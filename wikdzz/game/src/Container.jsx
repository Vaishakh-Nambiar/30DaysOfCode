// import React from "react";
import "./App.css";
import "./index.css";
import Cards from "./Cards";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#0A050F",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "white",
}));

// export default function RowAndColumnSpacing() {
//   return (

//   );
// }

const Container = () => {
  return (
    <div className="outline bg-black text-white container">
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className="outline-yl bg-black"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            xs={8}
            className="outline-yl display"
            justifyContent="center"
            alignItems="center"
          >
            <Box sx={{ width: "100%" }} className="outline-yl">
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <Item>
                    <Cards />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <Cards />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <Cards />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <Cards />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <Cards />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <Cards />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <Cards />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <Cards />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <Cards />
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* /------------------------------- */}
          <Grid item xs={4} className="outline trending">
            {/* <Item>2</Item> */}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Container;
