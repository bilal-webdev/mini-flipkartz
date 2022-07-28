import { Box, Typography, styled } from "@mui/material";

const TopLeftComp = styled(Box)`
  width: 45%;
  display: flex;
  justify-content: space-between;
`;

const HeadText = styled(Typography)`
  font-weight: 400;
  color: #878787;
  font-size: 12px;
  margin-bottom: 9px;
  letter-spacing: 0;
`;

const BodyText = styled(Typography)`
  color: #ffffff;
  font-size: 12px;
  font-weight: 400;
  line-height: 2;
  letter-spacing: 0;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const TopRightComp = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

const MailContainer = styled(Box)`
  padding: 0 25px;
  border-left: 1px solid #454d5e;
`;

const MailText = styled(Typography)`
  color: #ffffff;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0;
`;

const AddressContainer = styled(Box)`
  padding-left: 14px;
`;

const AddressText = styled(Typography)`
  color: #ffffff;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0;
  & > a {
    text-decoration: none;
    font-weight: 500;
    color: #2874f0;
  }
`;

const FooterTop = () => {
  return (
    <>
      <TopLeftComp>
        <Box>
          <HeadText>ABOUT</HeadText>
          <BodyText>Contact Us</BodyText>
          <BodyText>About Us</BodyText>
          <BodyText>Careers</BodyText>
          <BodyText>Flipkart Stories</BodyText>
          <BodyText>Press</BodyText>
          <BodyText>Flipkart</BodyText>
          <BodyText>Wholesale</BodyText>
          <BodyText>Corporate</BodyText>
          <BodyText>Information</BodyText>
        </Box>
        <Box>
          <HeadText>HELP</HeadText>
          <BodyText>Payments</BodyText>
          <BodyText>Shipping</BodyText>
          <BodyText>Cancellations & Returns</BodyText>
          <BodyText>FAQ</BodyText>
          <BodyText>Report Infringement</BodyText>
        </Box>
        <Box>
          <HeadText>POLICY</HeadText>
          <BodyText>Return Policy</BodyText>
          <BodyText>Terms Of Use</BodyText>
          <BodyText>Security</BodyText>
          <BodyText>Privacy</BodyText>
          <BodyText>Sitemap</BodyText>
          <BodyText>EPR Compliance</BodyText>
        </Box>
        <Box>
          <HeadText>SOCIAL</HeadText>
          <BodyText>Facebook</BodyText>
          <BodyText>Twitter</BodyText>
          <BodyText>YouTube</BodyText>
        </Box>
      </TopLeftComp>

      <TopRightComp>
        <Box>
          <MailContainer>
            <HeadText>Mail Us:</HeadText>
            <MailText>
              Flipkart Internet Private Limited,
              <br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,
              <br />
              Outer Ring Road, Devarabeesanahalli Village,
              <br />
              Bengaluru, 560103,
              <br />
              Karnataka, India
            </MailText>
          </MailContainer>
        </Box>
        <Box>
          <AddressContainer>
            <HeadText>Registered Office Address:</HeadText>
            <AddressText>
              Flipkart Internet Private Limited,
              <br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,
              <br />
              Outer Ring Road, Devarabeesanahalli Village,
              <br />
              Bengaluru, 560103,
              <br />
              Karnataka, India
              <br />
              CIN : U51109KA2012PTC066107
              <br />
              Telephone: <a href="tel:1234567890">044-45614700</a>
            </AddressText>
          </AddressContainer>
        </Box>
      </TopRightComp>
    </>
  );
};

export default FooterTop;
