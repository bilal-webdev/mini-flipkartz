import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  styled,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";

// components
import Search from "./Search";
import CustomButtons from "./CustomButtons";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const Component = styled(Link)(({ theme }) => ({
  marginLeft: "12%",
  lineHeight: 0,
  textDecoration: "none",
  color: "inherit",
  [theme.breakpoints.down("md")]: {
    marginLeft: "5%",
  },
}));

const SubHeading = styled(Typography)`
  font-size: 11px;
  font-style: italic;
`;

const PlusImage = styled("img")({
  width: "10px",
  height: 10,
  marginLeft: 2,
});

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
  margin: "0 5% 0 auto",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  color: "inherit",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";

  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpen = () => {
    setOpenDrawer(true);
  };

  const handleClose = () => {
    setOpenDrawer(false);
  };

  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: "55px" }}>

        <MenuButton onClick={handleOpen}>
          <MenuIcon />
        </MenuButton>
        <Drawer open={openDrawer} onClose={handleClose}>
          <Box style={{ width: 200 }}>
            <List>
              <ListItem>
                <ListItemButton >
                  <CustomButtons setOpenDrawer={setOpenDrawer}/>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>

        <Component to="/">
          <img src={logoURL} alt="logo" style={{ width: "75px" }} />
          <Box style={{ display: "flex" }}>
            <SubHeading>
              Explore&nbsp;
              <Box component="span" style={{ color: "#FFE500" }}>
                Plus
              </Box>
            </SubHeading>
            <PlusImage src={subURL} alt="sub-logo" />
          </Box>
        </Component>
        
        <Search />
        
        <CustomButtonWrapper>
          <CustomButtons setOpenDrawer={setOpenDrawer} />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
