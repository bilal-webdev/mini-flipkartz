import { Box, styled, Typography } from "@mui/material";

const Component = styled(Box)`
  background: #fff;
  padding: 20px 25px 5px 25px;
  margin-top: 30px;
`;

const HeadText = styled(Typography)`
  margin-top: 5px;
  font-weight: 600;
  color: #878787;
  margin-bottom: 5px;
`;

const BodyText = styled(Typography)`
  font-weight: 400;
  color: #878787;
  font-size: 11px;
  line-height: 1.4;
  margin-bottom: 15px;
`;

const LastSection = () => {
  return (
    <Component>
      <Box>
        <HeadText>Flipkart: The One-stop Shopping Destination</HeadText>
        <BodyText>
          E-commerce is revolutionizing the way we all shop in India. Why do you
          want to hop from one store to another in search of the latest phone
          when you can find it on the Internet in a single click? Not only
          mobiles. Flipkart houses everything you can possibly imagine, from
          trending electronics like laptops, tablets, smartphones, and mobile
          accessories to in-vogue fashion staples like shoes, clothing and
          lifestyle accessories; from modern furniture like sofa sets, dining
          tables, and wardrobes to appliances that make your life easy like
          washing machines, TVs, ACs, mixer grinder juicers and other
          time-saving kitchen and small appliances; from home furnishings like
          cushion covers, mattresses and bedsheets to toys and musical
          instruments, we got them all covered. You name it, and you can stay
          assured about finding them all here. For those of you with erratic
          working hours, Flipkart is your best bet. Shop in your PJs, at night
          or in the wee hours of the morning. This e-commerce never shuts down.
        </BodyText>
        <HeadText>Flipkart Plus</HeadText>
        <BodyText>
          A world of limitless possibilities awaits you - Flipkart Plus was
          kickstarted as a loyalty reward programme for all its regular
          customers at zero subscription fee. All you need is 500 supercoins to
          be a part of this service. For every 100 rupees spent on Flipkart
          order, Plus members earns 4 supercoins & non-plus members earn 2
          supercoins. Free delivery, early access during sales and shopping
          festivals, exchange offers and priority customer service are the top
          benefits to a Flipkart Plus member. In short, earn more when you shop
          more!
        </BodyText>
        <HeadText>No Cost EMI</HeadText>
        <BodyText>
          In an attempt to make high-end products accessible to all, our No Cost
          EMI plan enables you to shop with us under EMI, without shelling out
          any processing fee. Applicable on select mobiles, laptops, large and
          small appliances, furniture, electronics and watches, you can now shop
          without burning a hole in your pocket. If you've been eyeing a product
          for a long time, chances are it may be up for a no cost EMI. Take a
          look ASAP! Terms and conditions apply.
        </BodyText>
        <HeadText>EMI on Debit Cards</HeadText>
        <BodyText>
          Did you know debit card holders account for 79.38 crore in the
          country, while there are only 3.14 crore credit card holders? After
          enabling EMI on Credit Cards, in another attempt to make online
          shopping accessible to everyone, Flipkart introduces EMI on Debit
          Cards, empowering you to shop confidently with us without having to
          worry about pauses in monthly cash flow. At present, we have partnered
          with Axis Bank, HDFC Bank, State Bank of India and ICICI Bank for this
          facility. More power to all our shoppers! Terms and conditions apply.
        </BodyText>
        <HeadText>Mobile Exchange Offers</HeadText>
        <BodyText>
          Get an instant discount on the phone that you have been eyeing on.
          Exchange your old mobile for a new one after the Flipkart experts
          calculate the value of your old phone, provided it is in a working
          condition without damage to the screen. If a phone is applicable for
          an exchange offer, you will see the 'Buy with Exchange' option on the
          product description of the phone. So, be smart, always opt for an
          exchange wherever possible. Terms and conditions apply.
        </BodyText>
      </Box>
    </Component>
  );
};

export default LastSection;
