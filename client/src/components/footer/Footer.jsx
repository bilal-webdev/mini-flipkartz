import { Box, styled } from "@mui/material";
import FooterBottom from "./FooterBottom";

import FooterTop from "./FooterTop";

const Wrapper = styled(Box)(({ theme }) => ({
  padding: "40px 0 0 0",
  background: "#172337",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const TopComponent = styled(Box)`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-left: 65px;
`;

const BottomComponent = styled(Box)`
  border-top: 1px solid #454d5e;
  padding: 25px 0px;
  margin-top: 40px;
`;

const Footer = () => {
  return (
    <Wrapper>
      <TopComponent>
        <FooterTop />
      </TopComponent>

      <BottomComponent>
        <FooterBottom />
      </BottomComponent>
    </Wrapper>
  );
};

export default Footer;
