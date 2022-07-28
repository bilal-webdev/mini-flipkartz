import PaytmChecksum from "../paytm/PaytmChecksum.js";
import { paytmMerchantKey, paytmParams } from "../server.js";

import formidable from "formidable";
import https from "https";

export const addPaymentGateway = async (request, response) => {
  try {
    let paytmChecksum = await PaytmChecksum.generateSignature(
      paytmParams,
      paytmMerchantKey
    );

    let params = {
      ...paytmParams,
      "CHECKSUMHASH": paytmChecksum,
    };

    response.status(200).json(params);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

export const paytmResponse = (request, response) => {
  const form = new formidable.IncomingForm();
  // console.log(form);

  let paytmChecksum = request.body.CHECKSUMHASH;
  delete request.body.CHECKSUMHASH;

  let isVerifySignature = PaytmChecksum.verifySignature(
    request.body,
    paytmMerchantKey,
    paytmChecksum
  );

  if (isVerifySignature) {
    let paytmParams = {};
    paytmParams["MID"] = request.body.MID;
    paytmParams["ORDER_ID"] = request.body.ORDER_ID;

    PaytmChecksum.generateSignature(paytmParams, paytmMerchantKey).then(
      function (checksum) {
        paytmParams["CHECKSUMHASH"] = checksum;

        let post_data = JSON.stringify(paytmParams);

        let options = {
          hostname: "securegw-stage.paytm.in",
          port: 443,
          path: "/order/status",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": post_data.length,
          },
        };

        let res = "";
        let redirectURL = process.env.REACT_APP_BASE_URL || "http://localhost:3000";

        let post_req = https.request(options, function (post_res) {
          post_res.on("data", function (chunk) {
            res += chunk;
          });

          post_res.on("end", function () {
            let result = JSON.parse(res);
            response.redirect(redirectURL);
          });
          
        });

        post_req.write(post_data);
        post_req.end();
      }
    );
  } else {
    console.log("Checksum mismatched!");
  }
};
