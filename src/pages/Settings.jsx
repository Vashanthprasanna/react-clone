import React from 'react'
import { Box, Typography, TextField, Avatar, Tabs, Button, Drawer, Tab, Paper } from '@mui/material'
import { Link } from 'react-router-dom';
import ExpandLess from '@mui/icons-material/ExpandLess';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import InputLabel from '@mui/material/InputLabel';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Divider from "@mui/material/Divider";
import Switch from '@mui/material/Switch';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import CustomDrawer from '../components/Drawer';
import NavTabs from '../components/NavTabs';
import SideBarDrawer from '../components/SideBarDrawer';
import HomeIcon from "@mui/icons-material/HomeOutlined";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import Toggle from '../components/Toggle.jsx'
import Input from '@mui/material/Input';
import { ListItems, ListButton, ListItemWithImg, NestedList } from "../components/ListItems.jsx";
import '../App.css';

import { styled } from '@mui/material/styles';
import Badge, { badgeClasses } from '@mui/material/Badge';


const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -10px;
    right: 5px;
  }
`;

function Settings() {

  const ariaLabel = { 'aria-label': 'description' };


  const [value, setValue] = useState(0);

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }



  return (
    <Box sx={{ mx: 2, mt: 2, backgroundColor: 'white', height: 'fit-content' }}>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <MenuIcon sx={{ color: 'grey', mx: 1 }} />
        <Link to="/Settings" style={{ textDecoration: "none", color: "grey", fontSize: 14, fontWeight: 400 }}>Pages</Link>
        <Typography variant="body1" sx={{ mx: 1 }}>/</Typography>
        <Link to="/Settings" style={{ textDecoration: "none", color: "grey", fontSize: 14, fontWeight: 400 }}>Account</Link>
        <Typography variant="body1" sx={{ mx: 1 }}>/</Typography>
        <Typography variant="body1" sx={{ fontSize: 14, fontWeight: 700 }}>Settings</Typography>
      </Box>

      <Box sx={{ mt: 6 }}>

        {/* Tabs */}

        <Tabs value={value} onChange={handleChange}>
          <Tab label='Messages' />
          <Tab label='Social' />
          <Tab label='Notifications' />
          <Tab label='Backup' />
        </Tabs>

        {/* body */}

        <Box sx={{ display: 'flex', flexWrap: 'wrap', backgroundColor: 'grey', gap: 3, height: 'fit-content' }}>

          {/* sidebar */}

          <Box sx={{ border: 1, my: 4, flexBasis: '10%', flexGrow: 1, position: 'sticky', top: 0, height: 'fit-content' }}>
            <ListButton title="Profile" />
            <ListButton title="Basic Info" />
            <ListButton title="Change Password" />
            <ListButton title="2FA" />
            <ListButton title="Accounts" />
            <ListButton title="Notifications" />
            <ListButton title="Sessions" />
            <ListButton title="Delete Account" />
          </Box>

          {/* right body */}

          <Box sx={{ minWidth: '73%', flexGrow: 1, height: 100 }}>


            {/* Profile Name sec */}


            <Box sx={{ display: 'flex', justifyContent: 'space-between', border: 1, mt: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', }}>
                <Avatar alt="Profile" src="/profile_2.jpg" sx={{ width: 74, height: 74 }} />
                <Box sx={{ ml: 3 }}>
                  <Typography variant='h6'>Richard Davis</Typography>
                  <Typography sx={{ color: 'grey' }}>CEO / Co-Founder</Typography>
                </Box>
              </Box>
            </Box>


            {/* Basic Info */}


            <Box sx={{ border: 1, mt: 4 }}>
              <Typography variant='h6'>Basic Info</Typography>

              {/* Form fields */}


              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>

                <Box sx={{ flexBasis: 50, flexGrow: 1 }} >
                  <InputLabel htmlFor="component-helper">First Name</InputLabel>
                  <Input placeholder="Alec" inputProps={ariaLabel} />
                </Box>

                <Box sx={{ flexBasis: 50, flexGrow: 1 }}>
                  <InputLabel htmlFor="component-helper">Last Name</InputLabel>
                  <Input placeholder="Thompson" inputProps={ariaLabel} sx={{ flexBasis: 50, flexGrow: 1 }} />
                </Box>
              </Box>


              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <Box sx={{ flexBasis: 50, flexGrow: 1 }}>
                  <InputLabel htmlFor="component-helper">Last Name</InputLabel>
                  <Input placeholder="Thompson" inputProps={ariaLabel} sx={{ flexBasis: 50, flexGrow: 1 }} />
                </Box>

                <Box sx={{ flexBasis: 50, flexGrow: 1 }}>
                  <InputLabel htmlFor="component-helper">Last Name</InputLabel>
                  <Input placeholder="Thompson" inputProps={ariaLabel} sx={{ flexBasis: 50, flexGrow: 1 }} />
                </Box>

                <Box sx={{ flexBasis: 50, flexGrow: 1 }}>
                  <InputLabel htmlFor="component-helper">Last Name</InputLabel>
                  <Input placeholder="Thompson" inputProps={ariaLabel} sx={{ flexBasis: 50, flexGrow: 1 }} />
                </Box>
              </Box>


              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>

                <Box sx={{ flexBasis: 50, flexGrow: 1 }} >
                  <InputLabel htmlFor="component-helper">First Name</InputLabel>
                  <Input placeholder="Alec" inputProps={ariaLabel} />
                </Box>

                <Box sx={{ flexBasis: 50, flexGrow: 1 }}>
                  <InputLabel htmlFor="component-helper">Last Name</InputLabel>
                  <Input placeholder="Thompson" inputProps={ariaLabel} sx={{ flexBasis: 50, flexGrow: 1 }} />
                </Box>
              </Box>


              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>

                <Box sx={{ flexBasis: 50, flexGrow: 1 }} >
                  <InputLabel htmlFor="component-helper">First Name</InputLabel>
                  <Input placeholder="Alec" inputProps={ariaLabel} />
                </Box>

                <Box sx={{ flexBasis: 50, flexGrow: 1 }}>
                  <InputLabel htmlFor="component-helper">Last Name</InputLabel>
                  <Input placeholder="Thompson" inputProps={ariaLabel} sx={{ flexBasis: 50, flexGrow: 1 }} />
                </Box>
              </Box>


              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>

                <Box sx={{ flexBasis: 50, flexGrow: 1 }} >
                  <InputLabel htmlFor="component-helper">First Name</InputLabel>
                  <Input placeholder="Alec" inputProps={ariaLabel} />
                </Box>

                <Box sx={{ flexBasis: 50, flexGrow: 1 }}>
                  <InputLabel htmlFor="component-helper">Last Name</InputLabel>
                  <Input placeholder="Thompson" inputProps={ariaLabel} sx={{ flexBasis: 50, flexGrow: 1 }} />
                </Box>
              </Box>


            </Box>

            {/* Change Password */}


            <Box sx={{ border: 1, mt: 4, px: 3 }}>
              <Typography variant='h6'>Check Password</Typography>

              {/* Input fields */}

              <TextField id="outlined-basic" label="Current Password" variant="outlined" sx={{ width: '100%', mt: 2 }} />


              <TextField id="outlined-basic" label="New Password" variant="outlined" sx={{ width: '100%', mt: 2 }} />


              <TextField id="outlined-basic" label="Confirm New Password" variant="outlined" sx={{ width: '100%', mt: 2 }} />


              {/* Password requirements */}

              <Typography variant='h6' sx={{ mt: 4 }}>Password requirements</Typography>

              <Typography variant='body1'>Please follow this guide for a strong password</Typography>

              <ul>
                <li>One special characters</li>
                <li>Min 6 characters</li>
                <li>One number (2 are recommended)</li>
                <li>Change it often</li>
              </ul>

              <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                <Button variant='contained' >Update Password</Button>
              </Box>

            </Box>


            {/* Two-factor Aurthentication */}


            <Box sx={{ border: 1, mt: 4, px: 3 }}>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 3, px: 2 }}>
                <Typography variant='h6'>Two-factor Aurthentication</Typography>
                <Typography sx={{ color: 'green', backgroundColor: 'greenyellow', p: 1 }}>
                  Enabled
                </Typography>
              </Box>

              {/* 2FA Content */}

              <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 3, px: 2 }}>
                <Typography variant='h6'>Security Keys</Typography>

                <Box sx={{ display: 'flex', }}>
                  <Typography sx={{ p: 1 }}>
                    Not Security keys
                  </Typography>
                  <Button variant='outlined'>Add</Button>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 3, px: 2 }}>
                <Typography variant='h6'>SMS number</Typography>
                <Box sx={{ display: 'flex', }}>
                  <Typography sx={{ p: 1 }}>
                    +3012374423
                  </Typography>
                  <Button variant='outlined'>Edit</Button>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 3, px: 2 }}>
                <Typography variant='h6'>Authenticator app</Typography>
                <Box sx={{ display: 'flex', }}>
                  <Typography sx={{ p: 1 }}>
                    Not Configured
                  </Typography>
                  <Button variant='outlined'>Set Up</Button>
                </Box>
              </Box>




            </Box>


            {/* Accounts */}


            <Box sx={{ border: 1, mt: 4, px: 3 }}>
              <Typography variant='h6'>Accounts</Typography>
              <Typography sx={{ p: 1 }}>
                Here you can setup and manage your integration settings.
              </Typography>


              <Box sx={{ display: "flex", justifyContent: 'space-between' }}>
                <Box sx={{ display: "flex", }}>
                  <img src="#" alt="Slack" />
                  <Box>
                    <Typography variant='h6'>Slack</Typography>
                    <Typography>Show Less
                      <ExpandLess />
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex" }}>
                  Enabled <Switch {...label} />
                </Box>

                <Box>
                  <Typography variant='body1'>You haven't added your Slack yet or you aren't authorized. Please add our Slack Bot to your account by clicking on here. When you've added the bot, send your verification code that you have received.</Typography>
                  <Typography>Verfication Code</Typography>
                  <Input></Input>
                </Box>


              </Box>






            </Box>






          </Box>








        </Box>
      </Box>
    </Box>
  )
}

export default Settings