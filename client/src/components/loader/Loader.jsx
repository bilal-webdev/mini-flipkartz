import { Box, styled } from "@mui/material";
import { TailSpin } from "react-loader-spinner";

const Wrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Loader = () => {
  return (
    <Wrapper>
      <TailSpin color="#2874f0" height="80" width="80" ariaLabel="loading" />
    </Wrapper>
  );
};

export default Loader;
