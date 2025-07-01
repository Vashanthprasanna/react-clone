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
  const [activeParent, setActiveParent] = useState(null);
  const [activeChild, setActiveChild] = useState(null);

  const nestedListProps = {
    activeParent,
    setActiveParent,
    activeChild,
    setActiveChild
  };

  return (
    <BrowserRouter>
      <Box className="app">
        <Box sx={{ display: "flex", }}>
          <Container
            disableGutters
            className="side-bar"
            sx={{
              height: "calc(100vh - 15px)",
              position: "fixed",
              px:1,
              ml: 1.5,
              width: "220px",
              borderRadius: "8px",
              fontSize: "14px",
              py: 1,
              backgroundColor: 'white',
              my: 1,
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              border: '1px solid rgba(229, 229, 229)',
              overflow: "auto",
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


            <ListItemWithImg title="Brooklyn Alice" {...nestedListProps} />


            <Divider sx={{ my: 2 }} />

            <ListItems title="Dashboards" {...nestedListProps} />
            {/* <Divider /> */}

            <Typography
              variant="body1"
              sx={{ px: 2, py: 1, fontWeight: 700, fontSize: 12 }}
            >
              PAGES
            </Typography>

            <NestedList title="Pages" subTitles={["Projects"]} {...nestedListProps} />
            <ListItems title="Account" {...nestedListProps} />
            <ListItems title="Team" {...nestedListProps} />
            <ListItems title="Applications" {...nestedListProps} />
            <NestedList title="Ecommerce" subTitles={["Products", "Orders"]} {...nestedListProps} />
            <NestedList title="Authentication" subTitles={["Sign In", "Sign Up", "Reset Password"]} {...nestedListProps} />
            <Divider sx={{ my: 2 }} />

            <Typography
              variant="body1"
              sx={{ px: 2, py: 1, fontWeight: 700, fontSize: 12 }}
            >
              DOCS
            </Typography>

            <NestedList title="Basic" subTitles={["Getting Started", "Foundation"]} {...nestedListProps} />
            <NestedList title="Components" {...nestedListProps} />

            <ListButton title="Change Log" />
          </Container>

          <Box sx={{ ml: 30, width: 'calc(100% - 230px)', height: '100vh', overflow: 'auto' }}>
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
