import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { InputBase, Box, styled, List, ListItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { getProductsAction } from "../../redux/actions/productActions";

const SearchContainer = styled(Box)(({ theme }) => ({
  background: "#ffffff",
  width: "36%",
  borderRadius: "2px",
  marginLeft: "12px",
  display: "flex",
  [theme.breakpoints.down("lg")]: {
    marginRight: "8px"
  },
  [theme.breakpoints.down("md")]: {
    width: "55%",
  },
}));

const InputSearchBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  paddingLeft: "20px",
  fontSize: "unset",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "10px",
  },
}));

const SearchIconWrapper = styled(Box)`
  color: #2874f0;
  padding: 5px;
  display: flex;
`;

const ListWrapper = styled(List)`
  position: absolute;
  background: #ffffff;
  color: #000;
  margin-top: 36px;
`;

const Search = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products } = getProducts;

  useEffect(() => {
    dispatch(getProductsAction);
  }, [dispatch]);

  const getText = (e) => {
    setText(e.target.value);
  };

  return (
    <SearchContainer>
      <InputSearchBase
        value={text}
        placeholder="Search for products, brands and more"
        onChange={(e) => getText(e)}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {text ? (
        <ListWrapper>
          {products
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <ListItem key={product.id}>
                <Link
                  to={`/product/${product.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={() => setText("")}
                >
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))}
        </ListWrapper>
      ) : (
        ""
      )}
    </SearchContainer>
  );
};

export default Search;
