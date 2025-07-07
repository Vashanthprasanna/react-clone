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
import Input from '@mui/material/Input';
import CombinedTabs from '../components/Tabs.jsx';
import { Dropdown,MultiSelectWithChips } from '../components/Dropdown.jsx';
import { ListItems, ListButton, ListItemWithImg, NestedList } from "../components/ListItems.jsx";
import '../App.css';
import BasicTable from '../components/Table.jsx';


function Settings() {

  const ariaLabel = { 'aria-label': 'description' };


  const label = { inputProps: { 'aria-label': 'Switch demo' } };



  return (
    <Box sx={{ mx: 2, mt: 2, height: 'fit-content' }}>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <MenuIcon sx={{ color: 'grey', mx: 1 }} />
        <Link to="/Settings" style={{ textDecoration: "none", color: "grey", fontSize: 14, fontWeight: 400 }}>Pages</Link>
        <Typography variant="body1" sx={{ mx: 1 }}>/</Typography>
        <Link to="/Settings" style={{ textDecoration: "none", color: "grey", fontSize: 14, fontWeight: 400 }}>Account</Link>
        <Typography variant="body1" sx={{ mx: 1 }}>/</Typography>
        <Typography variant="body1" sx={{ fontSize: 14, fontWeight: 700 }}>Settings</Typography>
      </Box>

      <Box sx={{ mt: 6, height: 'fit-content', }}>



        <CombinedTabs options={['Message', 'Social', 'Notifications', 'Backup']}></CombinedTabs>



        <Box sx={{ display: 'flex', gap: 2, }} className='settings-body'>

          <Box sx={{ width: '30%' }} className='settings-sidebar'>

            {/* sidebar */}
            <Paper elevation={2} sx={{ borderRadius: 2, position: 'sticky', top: 10 }}>

              <Box sx={{ my: 1, p: 2, color: 'black' }}>
                <ListButton title="Profile" />
                <ListButton title="Basic Info" />
                <ListButton title="Change Password" />
                <ListButton title="2FA" />
                <ListButton title="Accounts" />
                <ListButton title="Notifications" />
                <ListButton title="Sessions" />
                <ListButton title="Delete Account" />
              </Box>
            </Paper>


          </Box>

          {/* Side content scrollable */}

          {/* right body */}

          <Box sx={{ width: '100%', mt: 1 }}>


            {/* Profile Name sec */}

            <Paper elevation={2} sx={{ borderRadius: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', borderRadius: 2, p: 2, flexWrap: 'wrap' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', }}>
                  <Avatar alt="Profile" src="/profile_2.jpg" sx={{ width: 74, height: 74 }} />
                  <Box sx={{ ml: 3 }}>
                    <Typography variant='h6' sx={{ fontSize: '20', fontWeight: '600' }}>Alex Thompson</Typography>
                    <Typography variant='body2' sx={{ color: 'grey', fontSize: '10', fontWeight: '600' }}>CEO / Co-Founder</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: 'center', }}>
                  <Typography variant='caption' sx={{ fontSize: '12', fontWeight: '400' }}>Switch to invisible</Typography>
                  <Switch {...label} defaultChecked />
                </Box>
              </Box>
            </Paper>



            {/* Basic Info */}

            <Paper elevation={2} sx={{ borderRadius: 2 }}>
              <Box sx={{ mt: 4, borderRadius: 2, p: 3 }}>
                <Typography variant='h6' sx={{ fontSize: 20, fontWeight: 700, mb: 2 }}>Basic Info</Typography>

                {/* Form fields */}


                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>

                  <Box sx={{ flexGrow: 1 }} >
                    <InputLabel htmlFor="component-helper" sx={{ fontSize: 12, fontWeight: 400 }}>First Name</InputLabel>
                    <Input placeholder="Alec" inputProps={ariaLabel} sx={{ width: '100%' }} />
                  </Box>

                  <Box sx={{ flexGrow: 1 }}>
                    <InputLabel htmlFor="component-helper" sx={{ fontSize: 12, fontWeight: 400 }}>Last Name</InputLabel>
                    <Input placeholder="Thompson" inputProps={ariaLabel} sx={{ width: '100%' }} />
                  </Box>
                </Box>


                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  <Box sx={{ flexBasis: 30, flexGrow: 1 }}>
                    <Dropdown title="I'm" options={['Male', 'Female']} ></Dropdown>
                  </Box>

                  <Box sx={{ flexBasis: 30, flexGrow: 1 }}>
                    <Dropdown title="Birth Date" options={[
                      "January", "February", "March", "April",
                      "May", "June", "July", "August",
                      "September", "October", "November", "December"
                    ]}></Dropdown>
                  </Box>

                  <Box sx={{ flexBasis: 30, flexGrow: 1 }}>
                    <Dropdown options={['1', '2', '3', '4']} defaultValue="1"></Dropdown>
                  </Box>

                  <Box sx={{ flexBasis: 30, flexGrow: 1 }} >
                    <Dropdown options={[
                      "1900", "1901", "1902", "1903", "1904", "1905", "1906", "1907", "1908", "1909",
                      "1910", "1911", "1912", "1913", "1914", "1915", "1916", "1917", "1918", "1919",
                      "1920", "1921", "1922", "1923", "1924", "1925", "1926", "1927", "1928", "1929",
                      "1930", "1931", "1932", "1933", "1934", "1935", "1936", "1937", "1938", "1939",
                      "1940", "1941", "1942", "1943", "1944", "1945", "1946", "1947", "1948", "1949",
                      "1950", "1951", "1952", "1953", "1954", "1955", "1956", "1957", "1958", "1959",
                      "1960", "1961", "1962", "1963", "1964", "1965", "1966", "1967", "1968", "1969",
                      "1970", "1971", "1972", "1973", "1974", "1975", "1976", "1977", "1978", "1979",
                      "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989",
                      "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999",
                      "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009",
                      "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019",
                      "2020", "2021"
                    ]} defaultValue="2021"></Dropdown>
                  </Box>

                </Box>


                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>

                  <Box sx={{ flexBasis: 50, flexGrow: 1, mr: 2, my: 1 }}>
                    <InputLabel htmlFor="component-helper" sx={{ fontSize: 12, fontWeight: 400 }}> Email</InputLabel>
                    <Input placeholder="example@email.com" inputProps={ariaLabel} sx={{ width: '100%' }} />
                  </Box>


                  <Box sx={{ flexBasis: 50, flexGrow: 1, mr: 2, my: 1 }}>
                    <InputLabel htmlFor="component-helper" sx={{ fontSize: 12, fontWeight: 400 }}>Confirmation email</InputLabel>
                    <Input placeholder="example@email.com" inputProps={ariaLabel} sx={{ width: '100%' }} />
                  </Box>
                </Box>


                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>

                  <Box sx={{ flexBasis: 50, flexGrow: 1, mr: 2, my: 1 }} >
                    <InputLabel htmlFor="component-helper" sx={{ fontSize: 12, fontWeight: 400 }}>Your Location</InputLabel>
                    <Input placeholder="Sydney, A" inputProps={ariaLabel} sx={{ width: '100%' }} />
                  </Box>

                  <Box sx={{ flexBasis: 50, flexGrow: 1, mr: 2, my: 1 }}>
                    <InputLabel htmlFor="component-helper">Phone Number</InputLabel>
                    <Input type="number" placeholder="+40 735 631 620" inputProps={{
                      inputMode: "numeric",
                      pattern: "[0-9 ]*",
                      min: 0
                    }} sx={{ width: '100%' }} />
                  </Box>
                </Box>


                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>

                  <Box sx={{ flexBasis: 50, flexGrow: 1, mr: 2, my: 1 }} >
                    <InputLabel htmlFor="component-helper" sx={{ fontSize: 12, fontWeight: 400 }}>Language</InputLabel>
                    <Input placeholder="English" inputProps={ariaLabel} sx={{ width: '100%' }} />
                  </Box>

                  <Box sx={{ flexBasis: 50, flexGrow: 1, mr: 2, my: 1 }}>
                    <MultiSelectWithChips title="I'm" options={['react', 'vue', 'angular', 'svelte']} ></MultiSelectWithChips>
                  </Box>
                </Box>


              </Box>
            </Paper>


            {/* Change Password */}

            <Paper elevation={2} sx={{ borderRadius: 2 }}>
              <Box sx={{ mt: 4, borderRadius: 2, p: 3 }}>
                <Typography variant='h6' sx={{ fontSize: 20, fontWeight: 700 }}>Change Password</Typography>

                {/* Input fields */}

                <TextField id="outlined-basic" label="Current Password" variant="outlined" sx={{ width: '100%', mt: 2 }} size="small" />


                <TextField id="outlined-basic" label="New Password" variant="outlined" sx={{ width: '100%', mt: 2 }} size="small" />


                <TextField id="outlined-basic" label="Confirm New Password" variant="outlined" sx={{ width: '100%', mt: 2, }} size="small" />


                {/* Password requirements */}

                <Typography variant='h6' sx={{ mt: 5, fontSize: '20', fontWeight: '700' }}>Password requirements</Typography>

                <Typography variant='body2' sx={{ py: 1, color: 'grey' }}>Please follow this guide for a strong password</Typography>

                <ul style={{ paddingLeft: 25, fontSize: 14, fontWeight: 400, color: 'grey' }}>
                  <li style={{ paddingBlock: 5 }}>One special characters</li>
                  <li style={{ paddingBlock: 5 }}>Min 6 characters</li>
                  <li style={{ paddingBlock: 5 }}>One number (2 are recommended)</li>
                  <li style={{ paddingBlock: 5 }}>Change it often</li>
                </ul>

                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                  <Button variant='contained' sx={{ borderRadius: 2, textTransform: 'none', fontSize: 12, my: 1 }} >Update Password</Button>
                </Box>

              </Box>

            </Paper>



            {/* Two-factor Aurthentication */}

            <Paper elevation={2} sx={{ borderRadius: 2 }}>
              <Box sx={{ mt: 4, borderRadius: 2, p: 3 }}>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', mb: 3 }}>
                  <Typography variant='h6' sx={{ fontSize: 20, fontWeight: 700 }}>Two-factor Aurthentication</Typography>
                  <Typography sx={{ color: 'rgb(113, 206, 117)', backgroundColor: 'rgb(33, 76, 45)', py: 1, px: 2, borderRadius: 2, fontSize: 12, fontWeight: 700, }}>
                    ENABLED
                  </Typography>
                </Box>

                {/* 2FA Content */}

                <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 2, flexWrap: 'wrap', borderRadius: 2 }}>
                  <Typography variant='body1' sx={{ fontSize: '16', fontWeight: '400', color: 'grey' }}>Security Keys</Typography>

                  <Box sx={{ display: 'flex', }}>
                    <Typography variant='body2' sx={{ px: 2, py: 1, fontSize: '16', fontWeight: '400', color: 'grey' }}>
                      Not Security keys
                    </Typography>
                    <Button variant='outlined' sx={{ fontSize: '12', fontWeight: '700', borderRadius: 2, textTransform: 'none' }}>Add</Button>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 2, flexWrap: 'wrap' }}>
                  <Typography variant='body1' sx={{ fontSize: '16', fontWeight: '400', color: 'grey' }}>SMS number</Typography>
                  <Box sx={{ display: 'flex', }}>
                    <Typography variant='body2' sx={{ px: 2, py: 1, fontSize: '16', fontWeight: '400', color: 'grey' }}>
                      +3012374423
                    </Typography>
                    <Button variant='outlined' sx={{ fontSize: '12', fontWeight: '700', borderRadius: 2, textTransform: 'none' }}>Edit</Button>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 2, flexWrap: 'wrap' }}>
                  <Typography variant='body1' sx={{ fontSize: '16', fontWeight: '400', color: 'grey' }}>Authenticator app</Typography>
                  <Box sx={{ display: 'flex', }}>
                    <Typography variant='body2' sx={{ px: 2, py: 1, fontSize: '16', fontWeight: '400', color: 'grey' }}>
                      Not Configured
                    </Typography>
                    <Button variant='outlined' sx={{ fontSize: '12', fontWeight: '700', borderRadius: 2, textTransform: 'none' }}>Set Up</Button>
                  </Box>
                </Box>




              </Box>

            </Paper>


            {/* Accounts */}

            <Paper elevation={2} sx={{ borderRadius: 2 }}>
              <Box sx={{ mt: 4, p: 3, borderRadius: 2 }}>
                <Typography variant='h6' sx={{ fontSize: 20, fontWeight: 700 }}>Accounts</Typography>
                <Typography variant='body2' sx={{ py: 1, fontSize: '14', fontWeight: '400', color: 'grey' }}>
                  Here you can setup and manage your integration settings.
                </Typography>


                <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', my: 2, flexWrap: 'wrap' }}>
                  <Box sx={{ display: "flex", alignItems: 'center' }}>
                    <img src="https://demos.creative-tim.com/material-dashboard-pro-react/static/media/logo-slack.7c47c5aa474b5c4fb39fcf05ffb8e4e7.svg" alt="Slack" width={48} height={40.6} />
                    <Box sx={{ mx: 2 }}>
                      <Typography variant='h6' sx={{ fontweight: '600' }}>Slack</Typography>
                      <Typography variant='body2' sx={{ color: 'grey', display: 'flex' }}>Show Less
                        <ExpandLess />
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: 'center', gap: 2 }}>
                    <Typography variant='body2' sx={{ fontSize: '14', fontWeight: '400', color: 'grey' }}>Enabled</Typography>
                    <Switch {...label} defaultChecked />
                  </Box>
                </Box>

                <Typography variant='body2' sx={{ fontSize: '14', fontWeight: '400', color: 'grey', ml: 9 }}>You haven't added your Slack yet or you aren't authorized. Please add our Slack Bot to your account by clicking on here. When you've added the bot, send your verification code that you have received.</Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgb(245, 245, 245)', ml: 9, my: 3, px: 2, py: 1, borderRadius: 2 }}>
                  <Typography variant='body2' sx={{ fontSize: '14', fontWeight: '600', color: 'grey' }}>Verfication Code</Typography>
                  <TextField
                    id="outlined-read-only-input"
                    defaultValue={1234567}
                    slotProps={{
                      input: {
                        readOnly: true,
                      },
                    }} size='small' sx={{
                      width: 100, "& .MuiInputBase-input": {
                        fontSize: "12px",
                      },
                    }}
                  />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgb(245, 245, 245)', ml: 9, my: 3, px: 2, py: 1, borderRadius: 2, flexWrap: 'wrap' }}>
                  <Typography variant='body2' sx={{ fontSize: '14', fontWeight: '600', color: 'grey' }}>Connected Account</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Typography variant='body2' sx={{ mx: 1, fontSize: '14', fontWeight: '600' }}>hello@creative-tim.com</Typography>
                    <Button variant='contained' sx={{ fontSize: 12, fontWeight: '700', textTransform: 'none', borderRadius: 2 }}>Delete</Button>
                  </Box>

                </Box>

                <Divider sx={{ my: 2 }} />

                <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', my: 2, flexWrap: 'wrap' }}>
                  <Box sx={{ display: "flex", alignItems: 'center' }}>
                    <img src="https://demos.creative-tim.com/material-dashboard-pro-react/static/media/logo-spotify.e83cf56c9d99a1fdf59e8deb58bbe470.svg" alt="Spotify" width={48} height={40.6} />
                    <Box sx={{ mx: 2 }}>
                      <Typography variant='h6' sx={{ fontweight: '600' }}>Spotify</Typography>
                      <Typography variant='body2' sx={{ color: 'grey', display: 'flex' }}>
                        Music
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: 'center', gap: 2 }}>
                    <Typography variant='body2' sx={{ fontSize: '14', fontWeight: '400', color: 'grey' }}>Enabled</Typography>
                    <Switch {...label} defaultChecked />
                  </Box>

                </Box>

                <Divider sx={{ my: 2 }} />

                <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', my: 2, flexWrap: 'wrap' }}>
                  <Box sx={{ display: "flex", alignItems: 'center' }}>
                    <img src="https://demos.creative-tim.com/material-dashboard-pro-react/static/media/logo-atlassian.f2b0e8570a4b4ce768854ff3dad1a6e1.svg" alt="Atlassian" width={48} height={40.6} />
                    <Box sx={{ mx: 2 }}>
                      <Typography variant='h6' sx={{ fontweight: '600' }}>Atlassian</Typography>
                      <Typography variant='body2' sx={{ color: 'grey', display: 'flex' }}>Payment vendor

                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: 'center', gap: 2 }}>
                    <Typography variant='body2' sx={{ fontSize: '14', fontWeight: '400', color: 'grey' }}>Enabled</Typography>
                    <Switch {...label} defaultChecked />
                  </Box>
                </Box>


                <Divider sx={{ my: 2 }} />

                <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', my: 2, flexWrap: 'wrap' }}>
                  <Box sx={{ display: "flex", alignItems: 'center' }}>
                    <img src="https://demos.creative-tim.com/material-dashboard-pro-react/static/media/logo-asana.d758f410d82760a61d1eabcb03409de6.svg" alt="Asana" width={48} height={40.6} />
                    <Box sx={{ mx: 2 }}>
                      <Typography variant='h6' sx={{ fontweight: '600' }}>Asana</Typography>
                      <Typography variant='body2' sx={{ color: 'grey', display: 'flex' }}>Organize your team

                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: 'center', gap: 2 }}>
                    <Typography variant='body2' sx={{ fontSize: '14', fontWeight: '400', color: 'grey' }}>Enabled</Typography>
                    <Switch {...label} />
                  </Box>
                </Box>




              </Box>

            </Paper>


            {/* Notifications */}

            <Paper elevation={2} sx={{ borderRadius: 2 }}>

              <Box sx={{ mt: 4, p: 3, borderRadius: 2 }}>
                <Typography variant='h6' sx={{ fontSize: '20', fontWeight: 700 }}
                >Notifications</Typography>
                <Typography variant='body2' sx={{ py: 1, color: 'grey' }}>
                  Choose how you receive notifications. These notification settings apply to the things you’re watching.
                </Typography>

                <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
                  <BasicTable />
                </Box>

              </Box>
            </Paper>


            {/* Sessions */}

            <Paper elevation={2} sx={{ borderRadius: 2 }}>

              <Box sx={{ mt: 4, p: 3, overflow: 'scroll', borderRadius: 2 }}>
                <Typography variant='h6' sx={{ fontSize: 20, fontWeight: 700 }}>Sessions</Typography>
                <Typography variant='body2' sx={{ py: 1, color: 'grey' }}>
                  This is a list of devices that have logged into your account. Remove those that you do not recognize.
                </Typography>



                <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 3, px: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <DesktopWindowsOutlinedIcon sx={{ color: 'grey' }} />
                    <Box>
                      <Typography variant='h6' sx={{ fontSize: 16, fontWeight: 400, color: 'grey' }}>Bucharest 68.133.163.201</Typography>
                      <Typography variant='caption' sx={{ color: 'grey' }}>Your current session</Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography sx={{ color: 'rgb(113, 206, 117)', backgroundColor: 'rgb(33, 76, 45)', py: .5, px: 2, borderRadius: 2, fontSize: 11, fontWeight: 700 }}>
                      ACTIVE
                    </Typography>
                    <Typography variant='body2' sx={{ p: 1, fontSize: 14, fontWeight: 400, color: 'grey' }}>
                      EU
                    </Typography>
                    <Link to={'/'} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'black' }}>
                      <Typography variant="body2" sx={{ fontSize: 14, fontWeight: 400 }}>See more</Typography>
                      <ArrowForwardSharpIcon sx={{ width: 14, height: 14, ml: .5 }}></ArrowForwardSharpIcon>
                    </Link>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 3, px: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <DesktopWindowsOutlinedIcon sx={{ color: 'grey' }} />
                    <Typography variant='h6' sx={{ fontSize: 16, fontWeight: 400, color: 'grey' }}>Chrome on macOS</Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant='body2' sx={{ p: 1, fontSize: 14, fontWeight: 400, color: 'grey' }}>
                      US
                    </Typography>
                    <Link to={'/'} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'black' }}>
                      <Typography variant="body2" sx={{ fontSize: 14, fontWeight: 400 }}>See more</Typography>
                      <ArrowForwardSharpIcon sx={{ width: 14, height: 14, ml: .5 }}></ArrowForwardSharpIcon>
                    </Link>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 3, px: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <PhoneIphoneOutlinedIcon sx={{ color: 'grey' }} />
                    <Typography variant='h6' sx={{ fontSize: 16, fontWeight: 400, color: 'grey' }}>Safari on iPhone</Typography>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Typography variant='body2' sx={{ p: 1, fontSize: 14, fontWeight: 400, color: 'grey' }}>
                      US
                    </Typography>
                    <Link to={'/'} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'black' }}>
                      <Typography variant="body2" sx={{ fontSize: 14, fontWeight: 400 }}>See more</Typography>
                      <ArrowForwardSharpIcon sx={{ width: 14, height: 14, ml: .5 }}></ArrowForwardSharpIcon>
                    </Link>
                  </Box>
                </Box>


              </Box>
            </Paper>


            {/* Delete Account */}

            <Paper elevation={2} sx={{ borderRadius: 2 }}>

              <Box sx={{ mt: 4, py: 2, px: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', borderRadius: 2 }}>
                <Box>
                  <Typography variant='h6' sx={{ fontSize: 20, fontWeight: 700 }}>Delete Account</Typography>
                  <Typography variant='body2' sx={{ py: 1, color: 'grey' }}>
                    Once you delete your account, there is no going back. Please be certain.
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button variant="outlined" sx={{ fontSize: 12, fontweight: 700 }}>
                    Deactivate
                  </Button>
                  <Button variant="contained" color='error' sx={{ fontSize: 12, fontweight: 700 }}>
                    Delete Account
                  </Button>
                </Box>
              </Box>
            </Paper>

          </Box>



        </Box>



      </Box>


      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'grey', flexWrap: 'wrap', my: 3 }} className='footer'>

        <Box sx={{ display: 'flex', px: 4, textAlign: 'center', alignItems: 'center', }}>
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