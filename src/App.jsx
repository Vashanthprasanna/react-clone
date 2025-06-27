import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "@fontsource/roboto/300.css";
import {
  Button,
  Container,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
} from "@mui/material";
import { ListItems, ListButton, ListItemWithImg } from "./components/ListItems";
import Divider from "@mui/material/Divider";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Container
        disableGutters
        className="side-bar"
        sx={{
          ml: 1,
          mr: 1,
          width: "220px",
          borderRadius: "8px",
          fontSize: "14px",
          py: 2,
          height: "auto",
          backgroundColor: "white",
          my: 2,
          px: 1,
          overflow: "scroll",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", px: 2, pt: 2 }}>
          <img src="./Logo.png" alt="logo" className="logo" />
          <Typography variant="body1" sx={{ px: 2, fontSize: 14 }}>
            Creative Tim
          </Typography>
        </Box>
        <Divider sx={{ my: 2 }} />

        <ListItemWithImg title="Brooklyn Alice" />

        <Divider sx={{ my: 2 }} />

        <ListItems title="Dashboards" />
        {/* <Divider /> */}

        <Typography
          variant="body1"
          sx={{ px: 2, py: 1.5, fontWeight: 700, fontSize: 12 }}
        >
          PAGES
        </Typography>

        <ListItems title="Pages" />
        <ListItems title="Account" />
        <ListItems title="Team" />
        <ListItems title="Applications" />
        <ListItems title="Ecommerce" />
        <ListItems title="Authentication" />
        <Divider sx={{ my: 2 }} />

        <Typography
          variant="body1"
          sx={{ px: 2, py: 1, fontWeight: 700, fontSize: 12 }}
        >
          DOCS
        </Typography>

        <ListItems title="Basic" />
        <ListItems title="Components" />

        <ListButton title="Change Log" />
      </Container>
    </div>
  );
}

export default App;
