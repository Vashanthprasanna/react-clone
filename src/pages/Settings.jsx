import React from 'react'
import { Box, Typography, TextField, Avatar, Tabs, Button, Drawer, Tab, Paper } from '@mui/material'
import { Link } from 'react-router-dom';
import ExpandLess from '@mui/icons-material/ExpandLess';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import InputLabel from '@mui/material/InputLabel';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Divider from "@mui/material/Divider";
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
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
import BasicTable from '../components/Table.jsx';


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

      <Box sx={{ mt: 6, backgroundColor: "white", height: 'fit-content', }}>

        {/* Tabs */}

        <Tabs value={value} onChange={handleChange} sx={{ mb: 4 }}>
          <Tab label='Messages' />
          <Tab label='Social' />
          <Tab label='Notifications' />
          <Tab label='Backup' />
        </Tabs>

        {/* body */}


        <Box sx={{ display: 'flex', gap: 2, }} className='settings-body'>

          <Box sx={{ backgroundColor: 'white', width: '30%' }} className='settings-sidebar'>

            {/* sidebar */}

            <Box sx={{ border: 1, my: 1, position: 'sticky', top: 10, }}>
              <ListButton title="Profile" />
              <ListButton title="Basic Info" />
              <ListButton title="Change Password" />
              <ListButton title="2FA" />
              <ListButton title="Accounts" />
              <ListButton title="Notifications" />
              <ListButton title="Sessions" />
              <ListButton title="Delete Account" />
            </Box>


          </Box>

          {/* Side content scrollable */}

          {/* right body */}

          <Box sx={{ backgroundColor: 'white', width: '100%', mt: 1 }}>


            {/* Profile Name sec */}


            <Box sx={{ display: 'flex', justifyContent: 'space-between', border: 1 }}>
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

              <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 3, px: 2, flexWrap: 'wrap' }}>
                <Typography variant='h6'>Two-factor Aurthentication</Typography>
                <Typography sx={{ color: 'green', backgroundColor: 'greenyellow', py: .5, px: 2, borderRadius: 2 }}>
                  Enabled
                </Typography>
              </Box>

              {/* 2FA Content */}

              <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 3, px: 2, flexWrap: 'wrap' }}>
                <Typography variant='h6'>Security Keys</Typography>

                <Box sx={{ display: 'flex', }}>
                  <Typography sx={{ p: 1 }}>
                    Not Security keys
                  </Typography>
                  <Button variant='outlined'>Add</Button>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 3, px: 2, flexWrap: 'wrap' }}>
                <Typography variant='h6'>SMS number</Typography>
                <Box sx={{ display: 'flex', }}>
                  <Typography sx={{ p: 1 }}>
                    +3012374423
                  </Typography>
                  <Button variant='outlined'>Edit</Button>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 3, px: 2, flexWrap: 'wrap' }}>
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


              <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', my: 2, flexWrap: 'wrap' }}>
                <Box sx={{ display: "flex", alignItems: 'center' }}>
                  <img src="#" alt="Slack" />
                  <Box sx={{ mx: 2 }}>
                    <Typography variant='h6'>Slack</Typography>
                    <Typography>Show Less
                      <ExpandLess />
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: 'center' }}>
                  Enabled <Switch {...label} />
                </Box>
              </Box>

              <Typography variant='body1'>You haven't added your Slack yet or you aren't authorized. Please add our Slack Bot to your account by clicking on here. When you've added the bot, send your verification code that you have received.</Typography>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'grey', my: 1, p: 1 }}>
                <Typography>Verfication Code</Typography>
                <TextField
                  id="outlined-read-only-input"
                  defaultValue={1234567}
                  slotProps={{
                    input: {
                      readOnly: true,
                    },
                  }} size='small' sx={{ width: 100 }}
                />
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'grey', my: 1, p: 1, flexWrap: 'wrap' }}>
                <Typography>Connected Account</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                  <Typography sx={{ mx: 1 }}>hello@creative-tim.com</Typography>
                  <Button variant='contained'>Delete</Button>
                </Box>

              </Box>

              <Divider sx={{ my: 2 }} />

              <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', my: 2, flexWrap: 'wrap' }}>
                <Box sx={{ display: "flex", alignItems: 'center' }}>
                  <img src="#" alt="Slack" />
                  <Box sx={{ mx: 2 }}>
                    <Typography variant='h6'>Spotify</Typography>
                    <Typography>
                      Music
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: 'center' }}>
                  Enabled <Switch {...label} />
                </Box>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', my: 2, flexWrap: 'wrap' }}>
                <Box sx={{ display: "flex", alignItems: 'center' }}>
                  <img src="#" alt="Slack" />
                  <Box sx={{ mx: 2 }}>
                    <Typography variant='h6'>Atlassian</Typography>
                    <Typography>Payment vendor

                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: 'center' }}>
                  Enabled <Switch {...label} />
                </Box>
              </Box>


              <Divider sx={{ my: 2 }} />

              <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', my: 2, flexWrap: 'wrap' }}>
                <Box sx={{ display: "flex", alignItems: 'center' }}>
                  <img src="#" alt="Slack" />
                  <Box sx={{ mx: 2 }}>
                    <Typography variant='h6'>Asana</Typography>
                    <Typography>Organize your team

                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: 'center' }}>
                  Enabled <Switch {...label} />
                </Box>
              </Box>




            </Box>


            {/* Notifications */}


            <Box sx={{ border: 1, mt: 4, px: 3 }}>
              <Typography variant='h6'>Notifications</Typography>
              <Typography sx={{ p: 1 }}>
                Choose how you receive notifications. These notification settings apply to the things you’re watching.
              </Typography>

              <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
                <BasicTable />
              </Box>

            </Box>


            {/* Sessions */}


            <Box sx={{ border: 1, mt: 4, px: 3, overflow: 'scroll' }}>
              <Typography variant='h6'>Sessions</Typography>
              <Typography sx={{ p: 1 }}>
                This is a list of devices that have logged into your account. Remove those that you do not recognize.
              </Typography>



              <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 3, px: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <DesktopWindowsOutlinedIcon sx={{ color: 'grey' }} />
                  <Typography variant='h6'>Security Keys</Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography sx={{ color: 'green', backgroundColor: 'greenyellow', py: .5, px: 2, borderRadius: 2 }}>
                    Active
                  </Typography>
                  <Typography sx={{ p: 1 }}>
                    US
                  </Typography>
                  <Link to={'/'} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'black' }}>
                    <Typography variant="body2" color="initial">See more</Typography>
                    <ArrowForwardSharpIcon></ArrowForwardSharpIcon>
                  </Link>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 3, px: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <DesktopWindowsOutlinedIcon sx={{ color: 'grey' }} />
                  <Typography variant='h6'>Security Keys</Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography sx={{ p: 1 }}>
                    US
                  </Typography>
                  <Link to={'/'} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'black' }}>
                    <Typography variant="body2" color="initial">See more</Typography>
                    <ArrowForwardSharpIcon></ArrowForwardSharpIcon>
                  </Link>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 3, px: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <PhoneIphoneOutlinedIcon sx={{ color: 'grey' }} />
                  <Typography variant='h6'>Security Keys</Typography>
                </Box>

                <Box sx={{ display: 'flex', }}>
                  <Typography sx={{ p: 1 }}>
                    US
                  </Typography>
                  <Link to={'/'} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'black' }}>
                    <Typography variant="body2" color="initial">See more</Typography>
                    <ArrowForwardSharpIcon></ArrowForwardSharpIcon>
                  </Link>
                </Box>
              </Box>


            </Box>


            {/* Delete Account */}


            <Box sx={{ border: 1, mt: 4, px: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
              <Box>
                <Typography variant='h6'>Delete Account</Typography>
                <Typography >
                  Once you delete your account, there is no going back. Please be certain.
                </Typography>
              </Box>

              <Box>
                <Button variant="outlined" color="default">
                  Deactivate
                </Button>
                <Button variant="contained" color="default">
                  Delete Account
                </Button>
              </Box>
            </Box>

          </Box>



        </Box>



      </Box>


      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', color: 'grey', flexWrap: 'wrap' }} className='footer'>

        <Box sx={{ display: 'flex', px: 4, textAlign: 'center', backgroundColor: 'white', }}>
          <Typography variant="body2" >&copy; 2025, made with</Typography>
          <FavoriteIcon sx={{ width: 16, height: 16, mx: .3, color: 'grey' }} />
          <Typography variant="body2"> by <span style={{ color: 'black' }}>Creative Tim</span> for a better web.</Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', fontSize: 14, fontWeight: 400 }}>
          <a href='https://www.creative-tim.com/' target='_blank' style={{ textDecoration: 'none', color: 'inherit', margin: '15px' }}>Creative Tim</a>
          <a href='https://www.creative-tim.com/presentation' target='_blank' style={{ textDecoration: 'none', color: 'inherit', margin: '15px' }}>About Us</a>
          <a href='https://www.creative-tim.com/blog' target='_blank' style={{ textDecoration: 'none', color: 'inherit', margin: '15px' }}>Blog</a>
          <a href='https://www.creative-tim.com/license' target='_blank' style={{ textDecoration: 'none', color: 'inherit', margin: '15px' }}>License</a>
        </Box>
      </Box>

      {/* Drawer */}


      <Box sx={{
        backgroundColor: 'white', display: 'flex', justifyContent: 'end', zIndex
          : 1, position: 'fixed', bottom: 40, right: 40, borderRadius: 7, width: 52, height: 52, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <CustomDrawer />
      </Box>

    </Box>

  )
}

export default Settings