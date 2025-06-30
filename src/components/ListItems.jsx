import React from 'react'
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import InboxIcon from '@mui/icons-material/Inbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import ListItem from '@mui/material/ListItem';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import UpcomingOutlinedIcon from '@mui/icons-material/UpcomingOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import DraftsIcon from '@mui/icons-material/Drafts';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
// import { Link } from "react-router-dom";



function ListItems(props) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const iconMap = {
    'Dashboards': <DashboardOutlinedIcon />,
    'Pages': <PhotoSizeSelectActualOutlinedIcon />,
    'Account': <PeopleOutlineOutlinedIcon />,
    'Team': <PermIdentityOutlinedIcon />,
    'Applications': <AppsOutlinedIcon />,
    'Ecommerce': <ShoppingBasketOutlinedIcon />,
    'Authentication': <ContentPasteOutlinedIcon />,
    'Basic': <UpcomingOutlinedIcon />,
    'Components': <ViewInArOutlinedIcon />,
    'Change Log': <ReceiptLongOutlinedIcon />,
  }

  const listMap = {
    'Dashboards': ['Analytics', 'Sales'],
    'Pages': ['Projects', 'Pricing Page', 'RTL', 'Widgets', 'Charts', 'Notifications'],
    'Account': ['Settings', 'Billing', 'Invoice'],
    'Team': ['All Projects', 'New User', 'Profile Overview'],
    'Applications': ['Kanban', 'Wizard', 'Data Tables', 'Calendar'],
    'Ecommerce': ['Products', 'Orders'],
    'Authentication': ['Sign In', 'Sign Up', 'Reset Password'],
    'Basic': ['Getting Started', 'Foundation'],
    'Components': ['Alerts', 'Avatar', 'Badge', 'Badge Dot', 'Box', 'Buttons', 'Date Picker', 'Dropzone', 'Editor', 'Input', 'Pagination', 'Progress', 'Snackbar', 'Social Button', 'Typography'],
  }


  return (

    <>

      <List sx={{ p: 0 }}>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon sx={{ minWidth: 32 }}>
            {iconMap[props.title] || <DraftsIcon />}
            {/* <InboxIcon /> */}
          </ListItemIcon>
          <ListItemText primary={props.title} sx={{ '.MuiTypography-root': { fontSize: '12px' } }} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            {listMap[props.title]?.map((item, index) => (
              <ListItemButton sx={{ pl: 3 }}>
                <ListItem key={index} disablePadding>

                  <Box>{item.charAt(0)}</Box>

                  <ListItemText key={index} primary={item} sx={{ '.MuiTypography-root': { fontSize: '12px' }, pl: 2 }} />

                </ListItem>
              </ListItemButton>
            ))}

          </List>
        </Collapse>
      </List>
    </>

  )
}

function ListButton(props) {

  const iconMap = {
    'Change Log': <ReceiptLongOutlinedIcon />,
  }

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ minWidth: 32 }}>
            {iconMap[props.title] || <DraftsIcon />}
          </ListItemIcon>
          <ListItemText primary={props.title} sx={{ '.MuiTypography-root': { fontSize: '12px' } }} />
        </ListItemButton>
      </ListItem>
    </>
  )
}

function ListItemWithImg(props) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const listMap = {
    'Brooklyn Alice': ['My Profile', 'Settings', 'Logout']
  }

  return (
    <>

      <List className='List' sx={{ p: 0, m: 0 }}>
        <ListItemButton onClick={handleClick}>
          <Avatar alt="Profile" src="/profile.jpg" sx={{ width: 30, height: 30 }} />
          <ListItemText primary={props.title} sx={{ '.MuiTypography-root': { fontSize: '12px', pl: 1 } }} />
          {open ? <ExpandLess /> : <ExpandMore />}

        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {listMap[props.title]?.map((item, index) => (
              <ListItemButton sx={{ pl: 3 }} onClick={() => navigate(`/${item}`)} >
                <ListItem key={index} disablePadding>

                  <Box>{item.charAt(0)}</Box>
                  <ListItemText key={index} primary={item} sx={{ '.MuiTypography-root': { fontSize: '12px' }, pl: 2 }} />


                </ListItem>
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>
    </>
  )
}

export { ListItems, ListButton, ListItemWithImg };