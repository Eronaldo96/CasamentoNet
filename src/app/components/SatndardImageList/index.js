import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import "./styles.scss";
export default function StandardImageList({ data }) {
  return (
    <ImageList className="ImagemLocal">
      {data.map((item) => (
        <Box className="ItemImagemLocal col-sm-6">
          <ImageListItem key={item.imagem}>
            <img
              srcSet={`${item.imagem}`}
              src={`${item.imagem}`}
              alt={item.descricao}
              loading="lazy"
            />
          </ImageListItem>
        </Box>
      ))}
    </ImageList>
  );
}
