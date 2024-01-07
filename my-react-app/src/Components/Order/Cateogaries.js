import React, { useContext } from "react";
import { Grid, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import CategoryContext from "./Cateogaries/CateogaryContext";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const CategoryLink = styled(Link)(({ theme }) => ({
  color: "black",
  textDecoration: "none",
  fontSize: "1rem",
  margin: "8px 0",
  display: "block",
  "&:hover": {
    textDecoration: "underline",
  },
}));

function Categories() {
  const { categories, error } = useContext(CategoryContext);

  return (
    <Grid item xs={2} style={{ display: "flex", flexDirection: "column" }}>
      {error ? (
        <Item style={{ flex: 1, color: "red" }}>{error}</Item>
      ) : (
        <Item style={{ flex: 1 }}>
          {/* Render your categories here */}
          {categories.map((category) => (
            <CategoryLink
              key={category.id}
              href={`#${category.attributes.name}`}>
              {category.attributes.name}
            </CategoryLink>
          ))}
        </Item>
      )}
    </Grid>
  );
}

export default Categories;
