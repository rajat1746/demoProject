import React, { useState } from "react";
import { Grid } from "@mui/material";
import Cateogaries from "./Cateogaries";
import MenuContent from "./MenuContent";
import CheckoutFeature from "./CheckoutFeature";

function OrderNow() {
  

  return (
    <div style={{ height: "100vh" }}>
      <Grid container spacing={2} style={{ height: "100%" }}>
        <Cateogaries />
        <MenuContent />
        <CheckoutFeature />
      </Grid>
    </div>
  );
}

export default OrderNow;
