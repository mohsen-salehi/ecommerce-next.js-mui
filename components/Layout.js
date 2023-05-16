import React from "react";
import Head from "next/head";
import { AppBar, Box, Container, Toolbar, Typography ,Button } from "@mui/material";
import NextLink from "next/link";

function Layout({title , children }) {
  return (
    <div>
      <Head>
        <title>{title}-Next.js</title>
      </Head>
      <AppBar positon="static">
        <Toolbar className="header">
          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems : "center",
              justifyContent: "space-between",
            }}
          >
            <NextLink href="/">
              <Typography>SHOP</Typography>
            </NextLink>
            <Box sx={{ display: "flex" }}>
              <Button sx={{margin: "0 3px" , color: "black"}} size="medium" className="buttons">
               Cart
              </Button>
              <Button sx={{margin: "0 3px" , color: "black"}} size="medium" className="buttons">
               Login
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Container className="content">{children}</Container>
      <footer className="footer">
        <Typography >Next Shop Mui</Typography>
      </footer>
    </div>
  );
}

export default Layout;
