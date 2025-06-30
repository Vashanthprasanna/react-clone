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
import { ListItems, ListButton, ListItemWithImg, NestedList } from "./components/ListItems";
import Divider from "@mui/material/Divider";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import { grey } from "@mui/material/colors";


function App() {
  return (
    <BrowserRouter>
    <Box className="app">
      <Box sx={{ display: "flex", }}>
        <Container
          disableGutters
          className="side-bar"
          sx={{
            height: "100vh",
            ml: 1.5,
            width: "230px",
            borderRadius: "8px",
            fontSize: "14px",
            py: 1,
            backgroundColor: 'white',
            my: 1,
            border: '1px solid grey',
            overflow: "auto",
            position: "fixed",
            top: 0,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", px: 2, py: 1 }}>
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
            sx={{ px: 2, py: 1, fontWeight: 700, fontSize: 12 }}
          >
            PAGES
          </Typography>

          <NestedList title="Pages" />
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

        <Box sx={{ ml: 30, width: 'calc(100% - 230px)', height: '100vh', overflow: 'auto'}}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/My Profile" element={<Profile />} />
              <Route path="/Settings" element={<Settings />} />
            </Routes>
        </Box>

      </Box>

    </Box>
    </BrowserRouter>
  );
}

export default App;
