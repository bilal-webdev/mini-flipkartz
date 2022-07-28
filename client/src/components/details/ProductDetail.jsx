import {
  Box,
  Typography,
  styled,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

import { LocalOffer as Badge } from "@mui/icons-material";

const RightContainer = styled(Box)(({ theme }) => ({
  width: "95%",
  marginTop: "10px",
  paddingLeft: "25px",
  // margin: "50px 0 0 50px",
  // background: "red",
  "& > p": {
    marginTop: "10px",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    paddingLeft: "0px",
    marginTop: "5px",
  },
}));

const SmallText = styled(Box)`
  vertical-align: baseline;
  font-size: 14px;
  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const StyledBadge = styled(Badge)`
  margin-right: 10px;
  color: #14be48;
  font-size: 15px;
`;

const CoulmnText = styled(TableRow)`
  vertical-align: baseline;
  font-size: 14px;
  & > td {
    font-size: 14px;
    margin-top: 10px;
    border: none;
  }
`;

const InsideTableCell = styled(TableCell)`
  font-size: 14px;
  & > p {
    font-size: 14px;
  }
`;

const PointsImage = styled("img")(({ theme }) => ({
  maxWidth: 390,
  // border: '1px solid red',
  [theme.breakpoints.down("md")]: {
    maxWidth: 350,
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: 320,
  },
}));

const ProductDetail = ({ product }) => {
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";

  return (
    <RightContainer>
      <Typography variant="h5">{product.title.longTitle}</Typography>
      <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
        8 Ratings & 1 Reviews
        <Box component="span">
          <img
            src={fassured}
            alt="fassured"
            style={{ width: 77, marginLeft: 20 }}
          />
        </Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>
          ₹{product.price.cost}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#878787" }}>
          <strike>₹{product.price.mrp}</strike>
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#26a541" }}>
          {product.price.discount} off
        </Box>
      </Typography>
      <Typography>Available Offers</Typography>
      <SmallText>
        <Typography>
          <StyledBadge />
          Get extra 10% off (price inclusive of discount) T&C
        </Typography>
        <Typography>
          <StyledBadge />
          Buy 2 items save 5%; Buy 3 or more save 10% T&C
        </Typography>
        <Typography>
          <StyledBadge />
          10% off on ICICI Bank Credit Cards, up to ₹300. On orders of ₹1750 and
          above T&C
        </Typography>
        <Typography>
          <StyledBadge />
          5% Cashback on Flipkart Axis Bank Card T&C
        </Typography>
        <Typography>
          <StyledBadge />
          Sign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*
        </Typography>
        <Typography>
          <StyledBadge />
          No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹2999 T&C
        </Typography>
      </SmallText>
      <Table>
        <TableBody>
          <CoulmnText>
            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: "600" }}>
              Delivery by {date.toDateString()} | ₹40
            </TableCell>
          </CoulmnText>
          <CoulmnText>
            <TableCell style={{ color: "#878787" }}>Warranty</TableCell>
            <TableCell>No Warranty</TableCell>
          </CoulmnText>
          <CoulmnText>
            <TableCell style={{ color: "#878787" }}>Seller</TableCell>
            <InsideTableCell>
              <Box component="span" style={{ color: "#2874f0" }}>
                SupperComNet
              </Box>
              <Typography>GST invoice available</Typography>
              <Typography>
                View more sellers starting from ₹{product.price.cost}
              </Typography>
            </InsideTableCell>
          </CoulmnText>
          <CoulmnText>
            <TableCell colSpan="2">
              <PointsImage src={adURL} alt="flipkartpoints" />
            </TableCell>
          </CoulmnText>
          <CoulmnText>
            <TableCell style={{ color: "#878787" }}>Description</TableCell>
            <TableCell>{product.description}</TableCell>
          </CoulmnText>
        </TableBody>
      </Table>
    </RightContainer>
  );
};

export default ProductDetail;
