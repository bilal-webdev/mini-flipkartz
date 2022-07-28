import { Box, Typography, styled } from "@mui/material";
import { bottomIcons } from "../../constants/data";

const BottomContainer = styled(Box)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const BottomText = styled(Typography)`
  color: #fff;
  margin-left: 8px;
  font-size: 14px;
  cursor: pointer;
`;

const FooterBottom = () => {
  return (
    <>
      <BottomContainer>
        {bottomIcons.map((item) => (
          <Box key={item.text}>
            <img src={item.url} alt="icon" />
            <BottomText component="span">{item.text}</BottomText>
          </Box>
        ))}
        <BottomText style={{ cursor: "auto" }}>
          &copy; 2007-2022 Flipkart.com
        </BottomText>
        <img
          src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_69e7ec.svg"
          alt="visaIcon"
        />
      </BottomContainer>
    </>
  );
};

export default FooterBottom;
