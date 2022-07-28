import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";
import { v4 as uuid } from "uuid";

import Connection from "./database/db.js";
import DefaultData from "./default.js";
import Router from "./routes/route.js";

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", Router);

const PORT = process.env.PORT || 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


const URL =
  process.env.MONGODB_URI ||
  `mongodb://${USERNAME}:${PASSWORD}@ecommerce-web-shard-00-00.rvjla.mongodb.net:27017,ecommerce-web-shard-00-01.rvjla.mongodb.net:27017,ecommerce-web-shard-00-02.rvjla.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-gmhdrm-shard-0&authSource=admin&retryWrites=true&w=majority`;

Connection(URL);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const __dirname = path.resolve();
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


app.listen(PORT, () =>
  console.log(`Server is running successfully on ${PORT}`)
);

DefaultData();

// paytm payment gateway

export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;

export let paytmParams = {};

const callbackURL = process.env.REACT_APP_BASE_URL || "http://localhost:8000";

paytmParams["MID"] = process.env.PAYTM_MID;
paytmParams["WEBSITE"] = process.env.PAYTM_WEBSITE;
paytmParams["CHANNEL_ID"] = process.env.PAYTM_CHANNEL_ID;
paytmParams["INDUSTRY_TYPE_ID"] = process.env.PAYTM_INDUSTRY_TYPE;
paytmParams["ORDER_ID"] = uuid();
paytmParams["CUST_ID"] = process.env.PAYTM_CUST_ID;
paytmParams["TXN_AMOUNT"] = "100";
paytmParams["CALLBACK_URL"] = `${callbackURL}/api/callback`;
paytmParams["EMAIL"] = "shaykhh2015@gmail.com";
paytmParams["MOBILE_NO"] = "1234567890";
