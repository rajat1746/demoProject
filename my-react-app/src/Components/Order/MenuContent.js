import React, { useEffect, useState, useContext } from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Typography,
  IconButton,
  Toolbar,
  TextField,
  Box,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import axios from "axios";
import CategoryContext from "./Cateogaries/CateogaryContext";
import MenuContext from "./Menu/MenuContext";
import AddIcon from "@mui/icons-material/Add";

function MenuContent() {
  const [value, setValue] = useState(0);
  const { menus, error } = useContext(MenuContext);
  const { categories } = useContext(CategoryContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [categoryMenus, setCategoryMenus] = useState({});

  useEffect(() => {
    // Fetch menus for each category

    const fetchCategoryMenus = async () => {
      const categoryMenusData = {};

      await Promise.all(
        categories.map(async (category) => {
          const response = await axios.get(
            `https://test.ashianafresh.com/api/menus/?category=${category.attributes.permalink_slug}`
          );

          categoryMenusData[category.attributes.name] = response.data.data;
        })
      );

      setCategoryMenus(categoryMenusData);
    };

    fetchCategoryMenus();
  }, [categories]);
  console.log(categoryMenus);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Grid item xs={6} style={{ display: "flex", flexDirection: "column" }}>
      <AppBar
        position='static'
        style={{ backgroundColor: "white", marginTop: "5px" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label='Menu' />
          <Tab label='Reviews' />
          <Tab label='Info' />
          <Tab label='Gallery' />
        </Tabs>
      </AppBar>

      <AppBar
        position='static'
        style={{ backgroundColor: "white", marginTop: "5px" }}>
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: grey[200],
              borderRadius: "4px",
              padding: "4px",
              marginRight: "8px",
            }}>
            <SearchIcon style={{ color: grey[600] }} />
          </Box>
          <TextField
            label='Search'
            variant='outlined'
            size='small'
            style={{ flex: 1 }}
          />
          <IconButton
            size='large'
            edge='end'
            color='inherit'
            aria-controls='search-menu'
            aria-haspopup='true'
            onClick={handleMenuOpen}>
            {/* Your additional icon goes here */}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Render content based on selected tab */}
      <div style={{ flex: 1, overflowY: "auto", marginTop: "5px" }}>
        {value === 0 && (
          <div>
            {Object.entries(categoryMenus).map(([header, menuItems]) => (
              <Accordion key={header}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`${header}-content`}
                  id={`${header}-header`}>
                  <Typography>{header}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div style={{ width: "100%" }}>
                    {menuItems.map((menuItem) => (
                      <div
                        key={menuItem.attributes.id}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}>
                        <div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              width: "450px",
                            }}>
                            <Typography variant='subtitle1'>
                              {menuItem.attributes.menu_name}
                            </Typography>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                              }}>
                              <Typography variant='body2'>
                                {menuItem.attributes.menu_price}
                              </Typography>
                              <IconButton>
                                <AddIcon />
                              </IconButton>
                            </div>
                          </div>

                          {menuItem.attributes.menu_description && (
                            <Typography variant='body2'>
                              {menuItem.attributes.menu_description}
                            </Typography>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        )}
        {value === 1 && <Typography>Reviews Content Goes Here</Typography>}
        {value === 2 && <Typography>Info Content Goes Here</Typography>}
        {value === 3 && <Typography>Gallery Content Goes Here</Typography>}
      </div>
    </Grid>
  );
}

export default MenuContent;
