import React from 'react'
import { Box, Typography, TextField, Avatar, Tabs, Button, Drawer, Tab, Paper } from '@mui/material'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
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
import '../App.css';
import { styled } from '@mui/material/styles';
import Badge, { badgeClasses } from '@mui/material/Badge';


const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -10px;
    right: 5px;
  }
`;

function Profile() {
  const [value, setValue] = useState(0);

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }



  return (
    <Box sx={{ mx: 2, mt: 4, backgroundColor: 'white', height: 'fit-content' }}>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', width: '100%', position: 'sticky', top: 20, zIndex: 2, borderRadius: 2, px: 1, backdropFilter: 'saturate(200%) blur(200px)', backgroundColor: 'rgba(255, 255, 255, 0.8)', }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <MenuIcon sx={{ color: 'grey', mx: 1 }} />
          <Link to="/Settings" style={{ textDecoration: "none", color: "grey", fontSize: 14, fontWeight: 400 }}>Pages</Link>
          <Typography variant="body1" sx={{ mx: 1 }}>/</Typography>
          <Link to="/Settings" style={{ textDecoration: "none", color: "grey", fontSize: 14, fontWeight: 400 }}>Profile</Link>
          <Typography variant="body1" sx={{ mx: 1 }}>/</Typography>
          <Typography variant="body1" sx={{ fontSize: 14, fontWeight: 700 }}>Profile Overview</Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', px: 1, py: 1 }}>
          <TextField label="Search here" size="small" />
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', px: 1 }}>

            <AccountCircleOutlinedIcon sx={{ color: 'grey', ml: 1 }} />
            <Box className="sidebar-drawer-icon" >
              <SideBarDrawer />
            </Box>
            <SettingsOutlinedIcon sx={{ color: 'grey', ml: 1 }} />
            <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', height: 30, width: 35 }}>
              <NotificationsNoneOutlinedIcon sx={{ color: 'grey', ml: 1 }} />
              <CartBadge badgeContent={9} color="warning" overlap="circular" />

            </Box>
          </Box>

        </Box>

      </Box>

      <Box sx={{
        my: 3, backgroundImage: `linear-gradient(195deg, rgba(66, 66, 74, 0.6), rgba(25, 25, 25, 0.6)),url('./profile-banner.jpeg')`, width: '100%',
        height: 300,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', borderRadius: 3,
        opacity: 1,
        color: 'rgb(23, 23, 23)',
      }}>
      </Box>

      <Box sx={{ borderRadius: '8px', px: 2, pt: 2, pb: 5, backgroundColor: 'white', alignItems: 'center', top: -90, position: 'relative', mx: 3, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar alt="Profile" src="/profile_2.jpg" sx={{ width: 74, height: 74 }} />
            <Box sx={{ ml: 3 }}>
              <Typography variant='h6'>Richard Davis</Typography>
              <Typography sx={{ color: 'grey' }}>CEO / Co-Founder</Typography>
            </Box>
          </Box>

          <Box sx={{ bgcolor: 'background.paper' }}>

            <NavTabs />
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'space-between', mt: 3, backgroundColor: 'white' }}>

          <Box sx={{ flexBasis: '300px', backgroundColor: 'white', flexGrow: 1, px: 2, my: 2 }}>
            <Typography variant='h6' sx={{ px: 2, fontSize: 16 }}>Platform settings</Typography>

            <Typography variant='body2' sx={{ my: 2, color: 'grey', px: 2, fontSize: 12, fontWeight: 700 }}>ACCOUNT</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', fontSize: 14, fontWeight: 400, color: 'grey' }}>
              <Switch {...label} defaultChecked className='toggle' /> Email me when someone follows me
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', fontSize: 14, fontWeight: 400, color: 'grey' }}>
              <Switch {...label} className='toggle' /> Email me when someone answers on my post
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', fontSize: 14, fontWeight: 400, color: 'grey' }}>
              <Switch {...label} defaultChecked className='toggle' />
              Email me when someone mentions me
            </Box>


            <Typography variant='body2' sx={{ my: 2, color: 'grey', px: 2, fontSize: 12, fontWeight: 700 }}>APPLICATION</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', fontSize: 14, fontWeight: 400, color: 'grey' }}>
              <Switch {...label} className='toggle' /> New launches and projects
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', fontSize: 14, fontWeight: 400, color: 'grey' }}>
              <Switch {...label} defaultChecked className='toggle' />
              Monthly product updates
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', fontSize: 14, fontWeight: 400, color: 'grey' }}>
              <Switch {...label} className='toggle' /> Subscribe to newsletter
            </Box>


          </Box>

          <Divider orientation='vertical' />

          <Box sx={{ flexBasis: '300px', height: '100%', backgroundColor: 'white', flexGrow: 1, px: 2, my: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography variant='h6' sx={{ fontSize: 16 }}>Profile Information</Typography>
              <EditOutlinedIcon sx={{ color: 'grey', ml: 1 }} />
            </Box>


            <Typography sx={{ my: 2, fontSize: 14, fontWeight: 400, color: 'grey' }}>Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</Typography>


            <Typography sx={{ mt: 1, fontSize: 14, fontWeight: 400, color: 'grey' }}><span style={{ fontSize: 14, fontWeight: 700, color: 'black', marginRight: 5 }}>Full Name: </span> Alec M. Thompson </Typography>
            <Typography sx={{ mt: 1, fontSize: 14, fontWeight: 400, color: 'grey' }}><span style={{ fontSize: 14, fontWeight: 700, color: 'black', marginRight: 5 }}>Mobile: </span> (44) 123 1234 123 </Typography>
            <Typography sx={{ mt: 1, fontSize: 14, fontWeight: 400, color: 'grey' }}><span style={{ fontSize: 14, fontWeight: 700, color: 'black', marginRight: 5 }}>Email: </span> alecthompson@mail.com </Typography>
            <Typography sx={{ mt: 1, fontSize: 14, fontWeight: 400, color: 'grey' }}><span style={{ fontSize: 14, fontWeight: 700, color: 'black', marginRight: 5 }}>Location: </span> USA </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ mt: 1 }}><span style={{ fontSize: 14, fontWeight: 700, color: 'black', marginRight: 5 }}>Social: </span> </Typography>
              <FacebookIcon sx={{ color: '#3b5998', ml: 1, mt: 1 }} />
              <TwitterIcon sx={{ color: '#00acee', ml: 1, mt: 1 }} />
              <InstagramIcon sx={{ color: '#C13584', ml: 1, mt: 1 }} />
            </Box>


          </Box>

          <Divider orientation='vertical' />

          <Box sx={{ flexBasis: '300px', backgroundColor: 'white', flexGrow: 1, px: 2, my: 2 }}>
            <Typography variant='h6' sx={{ fontSize: 16 }}>Conversations</Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>

                <Avatar src='./conv_profile_1.jpg' alt='profile' sx={{ width: 48, height: 48 }}></Avatar>
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
                  <Typography variant='body1' sx={{ fontSize: 14, fontWeight: 600 }}>Sophie B.</Typography>
                  <Typography variant='body2' sx={{ color: 'grey', fontSize: 12, fontWeight: 400 }}>Hi! I need more information..</Typography>
                </Box>
              </Box>
              <Button variant='text' sx={{ ml: 2, fontSize: 12, fontWeight: 700, textTransform: 'none' }}>Reply</Button>
            </Box>


            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>

                <Avatar src='./conv_profile_2.jpg' alt='profile' sx={{ width: 48, height: 48 }}></Avatar>
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
                  <Typography variant='body1' sx={{ fontSize: 14, fontWeight: 600 }}>Anne Marie</Typography>
                  <Typography variant='body2' sx={{ color: 'grey', fontSize: 12, fontWeight: 400 }}>Awesome work, can you..</Typography>
                </Box>
              </Box>
              <Button variant='text' sx={{ ml: 2, fontSize: 12, fontWeight: 700, textTransform: 'none' }}>Reply</Button>
            </Box>


            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src='./conv_profile_3.jpg' alt='profile' sx={{ width: 48, height: 48 }}></Avatar>
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
                  <Typography variant='body1' sx={{ fontSize: 14, fontWeight: 600 }}>Ivanna</Typography>
                  <Typography variant='body2' sx={{ color: 'grey', fontSize: 12, fontWeight: 400 }}>About files I can..</Typography>
                </Box>

              </Box>
              <Button variant='text' sx={{ ml: 2, fontSize: 12, fontWeight: 700, textTransform: 'none' }}>Reply</Button>
            </Box>


            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>

                <Avatar src='./conv_profile_4.jpg' alt='profile' sx={{ width: 48, height: 48 }}></Avatar>
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
                  <Typography variant='body1' sx={{ fontSize: 14, fontWeight: 600 }}>Peterson</Typography>
                  <Typography variant='body2' sx={{ color: 'grey', fontSize: 12, fontWeight: 400 }}>Have a great afternoon..</Typography>
                </Box>
              </Box>
              <Button variant='text' sx={{ ml: 2, fontSize: 12, fontWeight: 700, textTransform: 'none' }}>Reply</Button>
            </Box>


            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>

                <Avatar src='./profile.jpg' alt='profile' sx={{ width: 48, height: 48 }}></Avatar>
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
                  <Typography variant='body1' sx={{ fontSize: 14, fontWeight: 600 }}>Nick Daniel</Typography>
                  <Typography variant='body2' sx={{ color: 'grey', fontSize: 12, fontWeight: 400 }}>Hi! I need more information..</Typography>
                </Box>
              </Box>
              <Button variant='text' sx={{ ml: 2, fontSize: 12, fontWeight: 700, textTransform: 'none' }}>Reply</Button>
            </Box>

          </Box>

        </Box>

        <Box sx={{ width: '100%', my: 3, mt: 6, backgroundColor: 'white' }}>
          <Typography Typography variant='h6' sx={{ px: 4, fontSize: 16, fontWeight: 600, my: 1 }}>Projects</Typography>
          <Typography variant='body2' sx={{ color: 'grey', px: 4, fontSize: 14, fontWeight: 400 }}>
            Architects design houses
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', backgroundColor: 'white', px: 3, pb: 2, gap: 5, justifyContent: 'center' }}>

          <Box sx={{ flexBasis: '200px', flexGrow: 1, backgroundColor: 'white', mt: 3, height: 'fit-content', py: 1 }}>
            <img src="./proj_1.jpg" alt="Project 1" width="auto" style={{ borderRadius: '10px', maxWidth: "100%" }} />
            <Typography variant='body2' sx={{ color: 'grey', fontSize: 14, fontWeight: 400, my: 1 }}>Project #1</Typography>
            <Typography variant='h6'>Modern</Typography>
            <Typography variant='body2' sx={{ color: 'grey', my: 1 }}>As Uber works through a huge amount of internal management turmoil.</Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
              <Button variant='outlined' sx={{ borderRadius: 2, fontSize: 12, fontWeight: 700 }}>View Project</Button>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src='./conv_profile_1.jpg' alt='profile' sx={{ width: 25, height: 25, border: '2.5px white solid' }}></Avatar>
                <Avatar src='./conv_profile_2.jpg' alt='profile' sx={{ width: 25, height: 25, ml: -1, border: '2.5px white solid' }}></Avatar>
                <Avatar src='./conv_profile_3.jpg' alt='profile' sx={{ width: 25, height: 25, ml: -1, border: '2.5px white solid' }}></Avatar>
                <Avatar src='./conv_profile_4.jpg' alt='profile' sx={{ width: 25, height: 25, ml: -1, border: '2.5px white solid' }}></Avatar>
              </Box>
            </Box>
          </Box>

          <Box sx={{ flexBasis: '200px', flexGrow: 1, backgroundColor: 'white', mt: 3, height: 'fit-content', py: 1 }}>
            <img src="./proj_2.jpg" alt="Project 2" width="auto" style={{ borderRadius: '10px', maxWidth: "100%" }} />
            <Typography variant='body2' sx={{ color: 'grey', fontSize: 14, fontWeight: 400, my: 1 }}>Project #2</Typography>
            <Typography variant='h6'>Scandinavian</Typography>
            <Typography variant='body2' sx={{ color: 'grey', my: 1 }}>Music is something that everyone has their own specific opinion about.</Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
              <Button variant='outlined' sx={{ borderRadius: 2, fontSize: 12, fontWeight: 700 }}>View Project</Button>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src='./conv_profile_2.jpg' alt='profile' sx={{ width: 25, height: 25, border: '2.5px white solid' }}></Avatar>
                <Avatar src='./conv_profile_3.jpg' alt='profile' sx={{ width: 25, height: 25, ml: -1, border: '2.5px white solid' }}></Avatar>
                <Avatar src='./conv_profile_4.jpg' alt='profile' sx={{ width: 25, height: 25, ml: -1, border: '2.5px white solid' }}></Avatar>
                <Avatar src='./conv_profile_1.jpg' alt='profile' sx={{ width: 25, height: 25, ml: -1, border: '2.5px white solid' }}></Avatar>
              </Box>
            </Box>
          </Box>

          <Box sx={{ flexBasis: '200px', flexGrow: 1, backgroundColor: 'white', mt: 3, height: 'fit-content', py: 1 }}>
            <img src="./proj_3.jpg" alt="Project 3" width="auto" style={{ borderRadius: '10px', maxWidth: "100%" }} />
            <Typography variant='body2' sx={{ color: 'grey', fontSize: 14, fontWeight: 400, my: 1 }}>Project #3</Typography>
            <Typography variant='h6'>Minimalist</Typography>
            <Typography variant='body2' sx={{ color: 'grey', my: 1 }}>Different people have different taste, and various types of choice & music.</Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
              <Button variant='outlined' sx={{ borderRadius: 2, fontSize: 12, fontWeight: 700 }}>View Project</Button>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src='./conv_profile_3.jpg' alt='profile' sx={{ width: 25, height: 25, border: '2.5px white solid' }}></Avatar>
                <Avatar src='./conv_profile_4.jpg' alt='profile' sx={{ width: 25, height: 25, ml: -1, border: '2.5px white solid' }}></Avatar>
                <Avatar src='./conv_profile_1.jpg' alt='profile' sx={{ width: 25, height: 25, ml: -1, border: '2.5px white solid' }}></Avatar>
                <Avatar src='./conv_profile_2.jpg' alt='profile' sx={{ width: 25, height: 25, ml: -1, border: '2.5px white solid' }}></Avatar>
              </Box>
            </Box>
          </Box>

          <Box sx={{ flexBasis: '200px', flexGrow: 1, backgroundColor: 'white', mt: 3, height: 'fit-content', py: 1 }}>
            <img src="./proj_4.jpeg" alt="Project 4" width="auto" style={{ borderRadius: '10px', maxWidth: "100%" }} />
            <Typography variant='body2' sx={{ color: 'grey', fontSize: 14, fontWeight: 400, my: 1 }}>Project #4</Typography>
            <Typography variant='h6'>Gothic</Typography>
            <Typography variant='body2' sx={{ color: 'grey', my: 1 }}>Why would anyone pick blue over pink? Pink is obviously a better color.</Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
              <Button variant='outlined' sx={{ borderRadius: 2, fontSize: 12, fontWeight: 700 }}>View Project</Button>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src='./conv_profile_4.jpg' alt='profile' sx={{ width: 25, height: 25, border: '2.5px white solid' }}></Avatar>
                <Avatar src='./conv_profile_1.jpg' alt='profile' sx={{ width: 25, height: 25, ml: -1, border: '2.5px white solid' }}></Avatar>
                <Avatar src='./conv_profile_2.jpg' alt='profile' sx={{ width: 25, height: 25, ml: -1, border: '2.5px white solid' }}></Avatar>
                <Avatar src='./conv_profile_3.jpg' alt='profile' sx={{ width: 25, height: 25, ml: -1, border: '2.5px white solid' }}></Avatar>
              </Box>
            </Box>
          </Box>

        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', color: 'grey', flexWrap: 'wrap' }} className='footer'>

        <Box sx={{ display: 'flex', px: 4, textAlign: 'center', backgroundColor: 'white', alignItems: 'center', }}>
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

      <Box sx={{
        backgroundColor: 'white', display: 'flex', justifyContent: 'end', zIndex
          : 1, position: 'fixed', bottom: 40, right: 40, borderRadius: 7, width: 52, height: 52, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <CustomDrawer />
      </Box>

    </Box>
  )
}

export default Profile