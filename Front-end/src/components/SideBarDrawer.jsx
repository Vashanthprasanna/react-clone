import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import ButtonGroup from '@mui/material/ButtonGroup';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useState } from "react";
import "@fontsource/roboto/300.css";
import {
    Container,
} from "@mui/material";
import { ListItems, ListButton, ListItemWithImg, NestedList } from "./ListItems";
import "../App.css";




export default function SideBarDrawer() {

    const [activeParent, setActiveParent] = useState(null);
    const [activeChild, setActiveChild] = useState(null);

    const nestedListProps = {
        activeParent,
        setActiveParent,
        activeChild,
        setActiveChild
    };



    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const [drawerOpen, setDrawerOpen] = useState(false);

    const colors = ["#e91e63", "#212121", "#424242", "#4caf50", "#ff9800", "#f44336"];

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
        setDrawerOpen(open);
    };

    const list = (anchor) => (


        <Box

        >
            <Container
                disableGutters
                className="side-bar-drawer"
                sx={{
                    height: "calc(100vh - 15px)",
                    position: "fixed",
                    px: 1,
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
                <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: "center", pl: 2, py: 1 }}>
                    <img src="./Logo.png" alt="logo" className="logo" />
                    <Typography variant="body1" sx={{ fontSize: 14 }}>
                        Creative Tim
                    </Typography>
                    <IconButton onClick={toggleDrawer(anchor, false)} >
                        <CloseOutlinedIcon sx={{ color: 'black', fontSize: 18, }} />
                    </IconButton>
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
        </Box>


    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
                    <IconButton onClick={toggleDrawer(anchor, true)} >
                        {drawerOpen ? <MenuOutlinedIcon sx={{ width: 20 }} /> : <MenuOpenOutlinedIcon sx={{ width: 20 }} />}
                    </IconButton>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
