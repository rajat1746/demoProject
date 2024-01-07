import React, { useState } from "react";
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
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { grey } from "@mui/material/colors";

function MenuContent() {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);

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
      <div style={{ flex: 1, overflowY: "auto" }}>
        {value === 0 && <Typography>Menu Content Goes Here</Typography>}
        {value === 1 && <Typography>Reviews Content Goes Here</Typography>}
        {value === 2 && <Typography>Info Content Goes Here</Typography>}
        {value === 3 && <Typography>Gallery Content Goes Here</Typography>}
      </div>
    </Grid>
  );
}

export default MenuContent;
