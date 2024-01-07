import React from "react";
import { Box, Typography, Link, Grid, TextField } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: "#2b3e50",
        color: "#fff",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          {/* Section 1: ASHIANAFRESH */}
          <Typography variant='h6' mt={1}>
            ASHIANAFRESH
          </Typography>

          {/* Section 2: OrderNow, Reservation, Our Locations */}
          <Grid container spacing={1} style={{ display: "block" }}>
            <Grid item>
              <Link href='#' color='inherit' underline='none' variant='body'>
                OrderNow
              </Link>
            </Grid>
            <Grid item>
              <Link href='#' color='inherit' underline='none' variant='body2'>
                Reservation
              </Link>
            </Grid>
            <Grid item>
              <Link href='#' color='inherit' underline='none' variant='body2'>
                Our Locations
              </Link>
            </Grid>
          </Grid>
        </div>

        <div>
          {/* Section 3: INFORMATION */}
          <Typography variant='h6' mt={1}>
            INFORMATION
          </Typography>

          {/* Section 4: Contact Us, Administrator, About Us, Privacy Policy */}
          <Grid container spacing={1} style={{ display: "block" }}>
            <Grid item>
              <Link href='#' color='inherit' underline='none' variant='body2'>
                Contact Us
              </Link>
            </Grid>
            <Grid item>
              <Link href='#' color='inherit' underline='none' variant='body2'>
                Administrator
              </Link>
            </Grid>
            <Grid item>
              <Link href='#' color='inherit' underline='none' variant='body2'>
                About Us
              </Link>
            </Grid>
            <Grid item>
              <Link href='#' color='inherit' underline='none' variant='body2'>
                Privacy Policy
              </Link>
            </Grid>
          </Grid>
        </div>

        <div>
          {/* Section 5: FOLLOW US ON */}
          <Typography variant='h6' mt={1}>
            FOLLOW US ON
          </Typography>

          {/* Section 6: Social Icons */}
          <Grid container spacing={1} alignItems='center'>
            <Grid item>
              <FacebookIcon />
            </Grid>
            <Grid item>
              <InstagramIcon />
            </Grid>
          </Grid>
        </div>

        <div>
          {/* Section 7: Subscribe to our newsletter */}

          <Typography variant='h6' mt={1}>
            Subscribe to our newsletter
          </Typography>

          <TextField id='outlined-basic' variant='outlined' fullWidth mt={1} />
        </div>
      </div>

      {/* Section 8: Copyright */}
      <Typography variant='body2' mt={2}>
        © 2024 Test Restaurant
      </Typography>
    </Box>
  );
};

export default Footer;
