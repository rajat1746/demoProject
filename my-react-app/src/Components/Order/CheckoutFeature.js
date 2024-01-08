import React, { useContext, useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { MenuContext } from "./Menu/MenuContext";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

function CheckoutFeature() {
  const { selectedItems, removeSelectedItem, clearSelectedItems } =
    useContext(MenuContext);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    console.log(selectedItems);
  }, [selectedItems]);

  const calculateTotalPrice = () => {
    return selectedItems.reduce(
      (total, item) => total + parseFloat(item.attributes.menu_price),
      0
    );
  };

  const handleRemoveItem = (itemId) => {
    console.log(itemId);
    removeSelectedItem(itemId);
  };

  const handleCheckout = () => {
    // Implement your logic for the checkout process
    console.log("Checkout clicked!");
    clearSelectedItems(); // Optional: Clear selected items after checkout
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Grid item xs={4}>
      <Item>
        <Typography variant="h6">Selected Items</Typography>
        {selectedItems.map((item) => (
          <div
            key={item.attributes.id}
            style={{ marginBottom: "8px", width: "100%" }}
          >
            <div style={{ display: "flex", textAlign: "center" }}>
              <IconButton
                color="secondary"
                onClick={() => handleRemoveItem(item.attributes.menu_id)}
                style={{ marginRight: "8px" }}
              >
                <RemoveIcon />
              </IconButton>
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "80%",
                }}
              >
                <Typography variant="body2">
                  {item.attributes.menu_name}
                </Typography>
                <Typography variant="body2">
                  {item.attributes.menu_price}
                </Typography>
              </div>
            </div>
            <div style={{ flexGrow: 1, textAlign: "left" }}>
              <Typography variant="body2">
                {item.attributes.menu_description}
              </Typography>
            </div>
          </div>
        ))}
        <Typography variant="h6">Total Price: {calculateTotalPrice()}</Typography>
        <Button variant="contained" color="primary" onClick={handleCheckout}>
          Checkout
        </Button>

        {/* Checkout Success Modal */}
        <Dialog open={openModal} onClose={handleCloseModal}>
          <DialogTitle>Order Placed Successfully!</DialogTitle>
          <DialogContent>
            <Typography>Your order has been placed. Congratulations!</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Item>
    </Grid>
  );
}

export default CheckoutFeature;
