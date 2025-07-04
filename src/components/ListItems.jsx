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
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from 'react';
// import { Link } from "react-router-dom";



function ListItems(props) {
  // const [open, setOpen] = useState(false);
  const isOpen = props.activeParent === props.title;

  const handleClick = () => {
    // setOpen((prev) => !prev);
    props.setActiveParent(isOpen ? null : props.title);
  };

  const iconMap = {
    'Dashboards': <DashboardOutlinedIcon sx={{ fontSize: 20 }} />,
    'Pages': <PhotoSizeSelectActualOutlinedIcon sx={{ fontSize: 20 }} />,
    'Account': <PeopleOutlineOutlinedIcon sx={{ fontSize: 20 }} />,
    'Team': <PermIdentityOutlinedIcon sx={{ fontSize: 20 }} />,
    'Applications': <AppsOutlinedIcon sx={{ fontSize: 20 }} />,
    'Ecommerce': <ShoppingBasketOutlinedIcon sx={{ fontSize: 20 }} />,
    'Authentication': <ContentPasteOutlinedIcon sx={{ fontSize: 20 }} />,
    'Basic': <UpcomingOutlinedIcon sx={{ fontSize: 20 }} />,
    'Components': <ViewInArOutlinedIcon sx={{ fontSize: 20 }} />,
    'Change Log': <ReceiptLongOutlinedIcon sx={{ fontSize: 20 }} />,
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
            {iconMap[props.title] || <DraftsIcon sx={{ fontSize: 20, color: 'grey' }} />}
            {/* <InboxIcon /> */}
          </ListItemIcon>
          <ListItemText primary={props.title} sx={{ '.MuiTypography-root': { fontSize: '12px' } }} />
          {isOpen ? <ExpandLess sx={{ fontSize: 20, color: 'black' }} /> : <ExpandMore sx={{ fontSize: 20, color: 'grey' }} />}
        </ListItemButton>

        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            {listMap[props.title]?.map((item, index) => (
              <ListItemButton key={item} sx={{ pl: 3 }}>
                {/* <ListItem key={index} disablePadding> */}

                <Box>{item.charAt(0)}</Box>

                <ListItemText primary={item} sx={{ '.MuiTypography-root': { fontSize: '12px' }, pl: 2 }} />

                {/* </ListItem> */}
              </ListItemButton>
            ))}

          </List>
        </Collapse>
      </List>
    </>

  )
}

function NestedList(props) {
  // const [open, setOpen] = useState(false);
  // const [openChildKey, setOpenChildKey] = useState(null);
  // const [selectedChild, setSelectedChild] = useState(null);



  const isOpen = props.activeParent === props.title;

  const handleParentClick = () => {
    // setOpen((prev) => !prev);
    props.setActiveParent(isOpen ? null : props.title);
  };

  const handleChildClick = (item) => {
    // setSelectedChild(item);
    // setOpenChildKey((prev) => (prev === item ? null : item));
    props.setActiveChild(props.activeChild === item ? null : item);
  };

  const iconMap = {
    'Dashboards': <DashboardOutlinedIcon sx={{ fontSize: 18, color: 'gray', mr: 1 }} />,
    'Pages': <PhotoSizeSelectActualOutlinedIcon sx={{ fontSize: 20 }} />,
    'Account': <PeopleOutlineOutlinedIcon sx={{ fontSize: 20 }} />,
    'Team': <PermIdentityOutlinedIcon sx={{ fontSize: 20 }} />,
    'Applications': <AppsOutlinedIcon sx={{ fontSize: 20 }} />,
    'Ecommerce': <ShoppingBasketOutlinedIcon sx={{ fontSize: 20 }} />,
    'Authentication': <ContentPasteOutlinedIcon sx={{ fontSize: 20 }} />,
    'Basic': <UpcomingOutlinedIcon sx={{ fontSize: 20 }} />,
    'Components': <ViewInArOutlinedIcon sx={{ fontSize: 20 }} />,
    'Change Log': <ReceiptLongOutlinedIcon sx={{ fontSize: 20 }} />,
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

  const listItemsMap = {
    'Projects': ['Timeline'],
    'Products': ['New Product', 'Edit Product', 'Product Page'],
    'Orders': ['Order Details', 'Order List'],
    'Sign In': ['Basic', 'Cover', 'Illustration'],
    'Sign Up': ['Cover'],
    'Reset Password': ['Cover'],
    'Getting Started': ['Overview', 'License', 'Quick Start', 'Build Tools'],
    'Foundation': ['Colors', 'Grid', 'Typography', 'Borders', 'Box Shadows', 'Functions', 'Routing System']

  }


  return (

    <>

      <List sx={{ p: 0 }}>
        {/* Parent List Item */}
        <ListItemButton onClick={handleParentClick}>
          <ListItemIcon sx={{ minWidth: 32 }}>
            {iconMap[props.title] || <DraftsIcon sx={{ fontSize: 20, color: 'grey' }} />}
          </ListItemIcon>
          <ListItemText primary={props.title} sx={{ '.MuiTypography-root': { fontSize: '12px' } }} />
          {isOpen ? <ExpandLess sx={{ fontSize: 20, color: 'black' }} /> : <ExpandMore sx={{ fontSize: 20, color: 'grey' }} />}
        </ListItemButton>

        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* Child List Item */}
            {listMap[props.title]?.map((item, index) => (
              props.subTitles?.includes(item) ? (
                <div key={item}>
                  <ListItemButton onClick={() => handleChildClick(item)} sx={{ pl: 3 }}>

                    <Box>{item.charAt(0)}</Box>
                    <ListItemText primary={item} sx={{ '.MuiTypography-root': { fontSize: '12px' }, pl: 2 }} />
                    {props.activeChild === item ? <ExpandLess sx={{ fontSize: 20, color: 'black' }} /> : <ExpandMore sx={{ fontSize: 20, color: 'grey' }} />}
                  </ListItemButton>

                  <Collapse in={props.activeChild === item} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {listItemsMap[item]?.map((subItem, index) => (
                        <ListItemButton key={subItem} sx={{ pl: 3 }}>

                          <Box>{subItem.charAt(0)}</Box>
                          <ListItemText primary={subItem} sx={{ '.MuiTypography-root': { fontSize: '12px' }, pl: 2 }} />


                        </ListItemButton>
                      ))}

                    </List>
                  </Collapse>
                </div>
              ) : (
                <ListItemButton key={item} sx={{ pl: 3 }}>
                  <Box>{item.charAt(0)}</Box>
                  <ListItemText primary={item} sx={{ '.MuiTypography-root': { fontSize: '12px' }, pl: 2 }} />
                </ListItemButton>
              )
            ))}


          </List>
        </Collapse>
      </List>
    </>

  )
}

function ListButton(props) {

  const iconMap = {
    'Change Log': <ReceiptLongOutlinedIcon sx={{ fontSize: 20 }} />,
    'Profile': <PersonOutlinedIcon sx={{ fontSize: 22, color: 'black' }} />,
    'Basic Info': <ReceiptLongOutlinedIcon sx={{ fontSize: 22, color: 'black' }} />,
    'Change Password': <LockOutlinedIcon sx={{ fontSize: 22, color: 'black' }} />,
    '2FA': <SecurityOutlinedIcon sx={{ fontSize: 22, color: 'black' }} />,
    'Accounts': <BadgeOutlinedIcon sx={{ fontSize: 22, color: 'black' }} />,
    'Notifications': <CampaignOutlinedIcon sx={{ fontSize: 22, color: 'black' }} />,
    'Sessions': <SettingsApplicationsOutlinedIcon sx={{ fontSize: 22, color: 'black' }} />,
    'Delete Account': <DeleteOutlinedIcon sx={{ fontSize: 22, color: 'black' }} />,
  }

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ minWidth: 32 }}>
            {iconMap[props.title] || <DraftsIcon sx={{ fontSize: 20, color: 'grey' }} />}
          </ListItemIcon>
          <ListItemText primary={props.title} sx={{ '.MuiTypography-root': { fontSize: '14px', fontWeight: '400' } }} />
        </ListItemButton>
      </ListItem>
    </>
  )
}

function ListItemWithImg(props) {
  // const [open, setOpen] = useState(false);
  const isOpen = props.activeParent === props.title;
  const navigate = useNavigate();

  const handleClick = () => {
    // setOpen((prev) => !prev);
    props.setActiveParent(isOpen ? null : props.title);
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
          {isOpen ? <ExpandLess sx={{ fontSize: 20, color: 'black' }} /> : <ExpandMore sx={{ fontSize: 20, color: 'grey' }} />}

        </ListItemButton>

        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {listMap[props.title]?.map((item, index) => (
              <ListItemButton sx={{ pl: 3 }} onClick={() => navigate(`/${item}`)} >
                <ListItem key={index} disablePadding>

                  <Box>{item.charAt(0)}</Box>
                  <ListItemText primary={item} sx={{ '.MuiTypography-root': { fontSize: '12px' }, pl: 2 }} />


                </ListItem>
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>
    </>
  )
}

export { ListItems, ListButton, ListItemWithImg, NestedList };