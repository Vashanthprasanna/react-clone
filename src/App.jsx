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
  Paper
} from "@mui/material";
import { ListItems, ListButton, ListItemWithImg, NestedList } from "./components/ListItems";
import Divider from "@mui/material/Divider";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import { grey } from "@mui/material/colors";
import ExternalRedirect from "./pages/ExternalRedirect";


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
        <Box sx={{ display: "flex" }}>

          <Paper elevation={2} sx={{
            position: "fixed", height: "calc(100vh - 15px)",

            px: 1,
            ml: 1.5,
            width: "220px",
            borderRadius: "8px",
            fontSize: "14px",
            py: 1,
            backgroundColor: 'white',
            my: 1,

            overflow: "auto",
            top: 0,
            zIndex: 1200
          }} className="side-bar" >

            <Box
              

            >
              <Box sx={{ display: "flex", alignItems: "center", px: 2, pt: 1 }}>
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
            </Box>
          </Paper>


          <Box sx={{ ml: 30, width: 'calc(100% - 230px)', height: '100vh', overflow: 'auto' }} className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/My Profile" element={<Profile />} />
              <Route path="/Settings" element={<Settings />} />
              <Route path="/Profile Overview" element={<Profile />} />
              <Route path="/Overview" element={ <ExternalRedirect url="https://www.creative-tim.com/learning-lab/react/overview/material-dashboard/" />} />
              <Route path="/License" element={ <ExternalRedirect url="https://www.creative-tim.com/learning-lab/react/license/material-dashboard/" />} />
              <Route path="/Quick Start" element={ <ExternalRedirect url="https://www.creative-tim.com/learning-lab/react/quick-start/material-dashboard/" />} />
              <Route path="/Build Tools" element={ <ExternalRedirect url="https://www.creative-tim.com/learning-lab/react/build-tools/material-dashboard/" />} />
              <Route path="/Colors" element={ <ExternalRedirect url="https://www.creative-tim.com/learning-lab/react/colors/material-dashboard/" />} />
              <Route path="/Grid" element={ <ExternalRedirect url="https://www.creative-tim.com/learning-lab/react/grid/material-dashboard/" />} />
              <Route path="/Typography" element={ <ExternalRedirect url="https://www.creative-tim.com/learning-lab/react/base-typography/material-dashboard/" />} />
              <Route path="/Borders" element={ <ExternalRedirect url="https://www.creative-tim.com/learning-lab/react/borders/material-dashboard/" />} />
              <Route path="/Box Shadows" element={ <ExternalRedirect url="https://www.creative-tim.com/learning-lab/react/box-shadows/material-dashboard/" />} />
              <Route path="/Functions" element={ <ExternalRedirect url="https://www.creative-tim.com/learning-lab/react/functions/material-dashboard/" />} />
              <Route path="/Routing System" element={ <ExternalRedirect url="https://www.creative-tim.com/learning-lab/react/routing-system/material-dashboard/" />} />
              <Route path="/Alerts" element={ <ExternalRedirect url="https://www.creative-tim.com/learning-lab/react/alerts/material-dashboard/" />} />
              <Route path="/Avatar" element={ <ExternalRedirect url="https://www.creative-tim.com/learning-lab/react/avatar/material-dashboard/" />} />
              <Route path="/Badge" element={ <ExternalRedirect url="https://www.creative-tim.com/learning-lab/react/badge/material-dashboard/" />} />
              <Route path="/Badge Dot" element={ <ExternalRedirect url="https://www.creative-tim.com/learning-lab/react/badge-dot/material-dashboard/" />} />
              <Route path="/Box" element={ <ExternalRedirect url="https://www.creative-tim.com/learning-lab/react/box/material-dashboard/" />} />
              <Route path="/Buttons" element={ <ExternalRedirect url="https://www.creative-tim.com/learning-lab/react/buttons/material-dashboard/" />} />
              <Route path="/Date Picker" element={ <ExternalRedirect url="https://www.creative-tim.com/learning-lab/react/datepicker/material-dashboard/" />} />
              <Route path="/Dropzone" element={ <ExternalRedirect url="https://www.creative-tim.com/learning-lab/react/dropzone/material-dashboard/" />} />
              <Route path="/Editor" element={ <ExternalRedirect url="https://www.creative-tim.com/learning-lab/react/quill/material-dashboard/" />} />
              <Route path="/Input" element={ <ExternalRedirect url="https://www.creative-tim.com/learning-lab/react/input/material-dashboard/" />} />
              <Route path="/Pagination" element={ <ExternalRedirect url="https://www.creative-tim.com/learning-lab/react/pagination/material-dashboard/" />} />
              <Route path="/Progress" element={ <ExternalRedirect url="https://www.creative-tim.com/learning-lab/react/progress/material-dashboard/" />} />
              <Route path="/Snackbar" element={ <ExternalRedirect url="https://www.creative-tim.com/learning-lab/react/snackbar/material-dashboard/" />} />
              <Route path="/Social Button" element={ <ExternalRedirect url="https://www.creative-tim.com/learning-lab/react/social-buttons/material-dashboard/" />} />
              <Route path="/Change Log" element={ <ExternalRedirect url="https://github.com/creativetimofficial/ct-material-dashboard-pro-react/blob/main/CHANGELOG.md" />} />
            </Routes>
          </Box>

        </Box>

      </Box>
    </BrowserRouter>
  );
}

export default App;
