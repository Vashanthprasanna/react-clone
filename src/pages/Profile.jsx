import React from 'react'
import { Box, Typography, TextField, Avatar, Tabs, Tab, Button, Drawer } from '@mui/material'
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
    <Box sx={{ mx: 2, my: 4, backgroundColor: 'white', height: 'fit-content' }}>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', width: '100%', position: 'sticky', top: 20, zIndex: 2, borderRadius: 2, px: 1, backdropFilter: 'saturate(200%) blur(200px)', backgroundColor: 'rgba(255, 255, 255, 0.8)', }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <MenuIcon sx={{ color: 'grey', mx: 1 }} />
          <Link to="/Settings" style={{ textDecoration: "none", color: "grey" }}>Pages</Link>
          <Typography variant="body1" sx={{ mx: 1 }}>/</Typography>
          <Link to="/Settings" style={{ textDecoration: "none", color: "grey" }}>Profile</Link>
          <Typography variant="body1" sx={{ mx: 1 }}>/</Typography>
          <Typography variant="body1">Profile Overview</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', px: 1, py: 1 }}>
          <TextField label="Search here" size="small" />
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', px: 1 }}>

            <AccountCircleOutlinedIcon sx={{ color: 'grey', ml: 1 }} />
            <SettingsOutlinedIcon sx={{ color: 'grey', ml: 1 }} />
            <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', height: 30, width: 35 }}>
              <NotificationsNoneOutlinedIcon sx={{ color: 'grey', ml: 1 }} />
              <CartBadge badgeContent={9} color="warning" overlap="circular" />
            </Box>
          </Box>

        </Box>

      </Box>

      <Box sx={{
        my: 3, backgroundImage: `url('./profile-banner.jpeg')`, width: '100%',
        height: 300,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', borderRadius: 3
      }}>
      </Box>

      <Box sx={{ border: '1px solid grey', borderRadius: '8px', px: 2, pt: 2, backgroundColor: 'white', width: '96%', alignItems: 'center', top: -90, position: 'relative', mx: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
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

        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', mt: 5, px: 2, width: '76vw' }}>

          <Box sx={{ textAlign: 'left', width: '300px' }}>
            <Typography>Platform settings</Typography>

            <Typography variant='body2' sx={{ my: 2, color: 'grey' }}>Account</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Switch {...label} defaultChecked className='toggle' /> Email me when someone follows me
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Switch {...label} className='toggle' /> <Typography>Email me when someone answers on my post</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Switch {...label} defaultChecked className='toggle' />
              Email me when someone mentions me
            </Box>


            <Typography variant='body2' sx={{ my: 2, color: 'grey' }}>Application</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Switch {...label} className='toggle' /> New launches and projects
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Switch {...label} defaultChecked className='toggle' />
              Monthly product updates
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Switch {...label} className='toggle' /> Subscribe to newsletter
            </Box>


          </Box>

          <Divider orientation='vertical' />

          <Box sx={{ textAlign: 'left', width: '330px', height: 355 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography>Profile Information</Typography>
              <EditOutlinedIcon sx={{ color: 'grey', ml: 1 }} />
            </Box>


            <Typography sx={{ my: 2 }}>Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</Typography>

            <Typography sx={{ mt: 1 }}><b>Full Name : </b> Alec M. Thompson </Typography>
            <Typography sx={{ mt: 1 }}><b>Mobile : </b> (44) 123 1234 123 </Typography>
            <Typography sx={{ mt: 1 }}><b>Email : </b> alecthompson@mail.com </Typography>
            <Typography sx={{ mt: 1 }}><b>Location : </b> USA </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ mt: 1 }}><b>Social : </b> </Typography>
              <FacebookIcon sx={{ color: '#3b5998', ml: 1, mt: 1 }} />
              <TwitterIcon sx={{ color: '#00acee', ml: 1, mt: 1 }} />
              <InstagramIcon sx={{ color: '#C13584', ml: 1, mt: 1 }} />
            </Box>


          </Box>

          <Divider orientation='vertical' />

          <Box sx={{ textAlign: 'left', width: '330px' }}>
            <Typography>Conversations</Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>

                <Avatar src='./conv_profile_1.jpg' alt='profile' sx={{ width: 48, height: 48 }}></Avatar>
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
                  <Typography variant='body1'>Sophie B.</Typography>
                  <Typography variant='body2' sx={{ color: 'grey' }}>Hi! I need more information..</Typography>
                </Box>
              </Box>
              <Button variant='text' sx={{ ml: 2, fontSize: 12 }}>Reply</Button>
            </Box>


            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>

                <Avatar src='./conv_profile_2.jpg' alt='profile' sx={{ width: 48, height: 48 }}></Avatar>
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
                  <Typography variant='body1'>Anne Marie</Typography>
                  <Typography variant='body2' sx={{ color: 'grey' }}>Awesome work, can you..</Typography>
                </Box>
              </Box>
              <Button variant='text' sx={{ ml: 2, fontSize: 12 }}>Reply</Button>
            </Box>


            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src='./conv_profile_3.jpg' alt='profile' sx={{ width: 48, height: 48 }}></Avatar>
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
                  <Typography variant='body1'>Ivanna</Typography>
                  <Typography variant='body2' sx={{ color: 'grey' }}>About files I can..</Typography>
                </Box>

              </Box>
              <Button variant='text' sx={{ ml: 2, fontSize: 12 }}>Reply</Button>
            </Box>


            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>

                <Avatar src='./conv_profile_4.jpg' alt='profile' sx={{ width: 48, height: 48 }}></Avatar>
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
                  <Typography variant='body1'>Peterson</Typography>
                  <Typography variant='body2' sx={{ color: 'grey' }}>Have a great afternoon..</Typography>
                </Box>
              </Box>
              <Button variant='text' sx={{ ml: 2, fontSize: 12 }}>Reply</Button>
            </Box>


            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>

                <Avatar src='./profile.jpg' alt='profile' sx={{ width: 48, height: 48 }}></Avatar>
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
                  <Typography variant='body1'>Nick Daniel</Typography>
                  <Typography variant='body2' sx={{ color: 'grey' }}>Hi! I need more information..</Typography>
                </Box>
              </Box>
              <Button variant='text' sx={{ ml: 2, fontSize: 12 }}>Reply</Button>
            </Box>

          </Box>

          <Box sx={{ textAlign: 'left', width: '100%', my: 3, mt: 8 }}>
            <Typography variant='body1' sx={{ fontWeight: 'bold' }}>Projects</Typography>
            <Typography variant='body1' sx={{ color: 'grey' }}>
              Architects design houses
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', backgroundColor: 'white' }}>

              <Box sx={{ width: '240px', backgroundColor: 'white', mt: 3, mr: 6, height: 350 }}>
                <img src="./proj_1.jpg" alt="Project 1" width={241} height={137} style={{ borderRadius: '10px' }} />
                <Typography variant='body2' sx={{ color: 'grey' }}>Project #1</Typography>
                <Typography variant='h6'>Modern</Typography>
                <Typography variant='body2' sx={{ color: 'grey', my: 1 }}>As Uber works through a huge amount of internal management turmoil.</Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                  <Button variant='outlined' sx={{ borderRadius: 2 }}>View Project</Button>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src='./conv_profile_1.jpg' alt='profile' sx={{ width: 25, height: 25, border: '2.5px white solid' }}></Avatar>
                    <Avatar src='./conv_profile_2.jpg' alt='profile' sx={{ width: 25, height: 25, ml: -1, border: '2.5px white solid' }}></Avatar>
                    <Avatar src='./conv_profile_3.jpg' alt='profile' sx={{ width: 25, height: 25, ml: -1, border: '2.5px white solid' }}></Avatar>
                    <Avatar src='./conv_profile_4.jpg' alt='profile' sx={{ width: 25, height: 25, ml: -1, border: '2.5px white solid' }}></Avatar>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ width: '240px', backgroundColor: 'white', mt: 3, mr: 6, height: 350 }}>
                <img src="./proj_2.jpg" alt="Project 2" width={241} height={137} style={{ borderRadius: '10px' }} />
                <Typography variant='body2' sx={{ color: 'grey' }}>Project #2</Typography>
                <Typography variant='h6'>Scandinavian</Typography>
                <Typography variant='body2' sx={{ color: 'grey', my: 1 }}>Music is something that everyone has their own specific opinion about.</Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                  <Button variant='outlined' sx={{ borderRadius: 2 }}>View Project</Button>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src='./conv_profile_2.jpg' alt='profile' sx={{ width: 25, height: 25, border: '2.5px white solid' }}></Avatar>
                    <Avatar src='./conv_profile_3.jpg' alt='profile' sx={{ width: 25, height: 25, ml: -1, border: '2.5px white solid' }}></Avatar>
                    <Avatar src='./conv_profile_4.jpg' alt='profile' sx={{ width: 25, height: 25, ml: -1, border: '2.5px white solid' }}></Avatar>
                    <Avatar src='./conv_profile_1.jpg' alt='profile' sx={{ width: 25, height: 25, ml: -1, border: '2.5px white solid' }}></Avatar>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ width: '240px', backgroundColor: 'white', mt: 3, mr: 6, height: 350 }}>
                <img src="./proj_3.jpg" alt="Project 3" width={241} height={137} style={{ borderRadius: '10px' }} />
                <Typography variant='body2' sx={{ color: 'grey' }}>Project #3</Typography>
                <Typography variant='h6'>Minimalist</Typography>
                <Typography variant='body2' sx={{ color: 'grey', my: 1 }}>Different people have different taste, and various types of music.</Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                  <Button variant='outlined' sx={{ borderRadius: 2 }}>View Project</Button>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src='./conv_profile_3.jpg' alt='profile' sx={{ width: 25, height: 25, border: '2.5px white solid' }}></Avatar>
                    <Avatar src='./conv_profile_4.jpg' alt='profile' sx={{ width: 25, height: 25, ml: -1, border: '2.5px white solid' }}></Avatar>
                    <Avatar src='./conv_profile_1.jpg' alt='profile' sx={{ width: 25, height: 25, ml: -1, border: '2.5px white solid' }}></Avatar>
                    <Avatar src='./conv_profile_2.jpg' alt='profile' sx={{ width: 25, height: 25, ml: -1, border: '2.5px white solid' }}></Avatar>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ width: '240px', backgroundColor: 'white', mt: 3, height: 350 }}>
                <img src="./proj_4.jpeg" alt="Project 4" width={241} height={137} style={{ borderRadius: '10px' }} />
                <Typography variant='body2' sx={{ color: 'grey' }}>Project #4</Typography>
                <Typography variant='h6'>Gothic</Typography>
                <Typography variant='body2' sx={{ color: 'grey', my: 1 }}>Why would anyone pick blue over pink? Pink is obviously a better color.</Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                  <Button variant='outlined' sx={{ borderRadius: 2 }}>View Project</Button>
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

        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2">&copy; 2025, made with</Typography>
          <FavoriteIcon sx={{ width: 16, height: 16, mx: .3, color: 'grey' }} />
          <Typography variant="body2"> by <b>Creative Tim</b> for a better web.</Typography>
        </Box>
        <Box >
          <a href='https://www.creative-tim.com/' target='_blank' style={{ textDecoration: 'none', color: 'inherit', margin: '15px' }}>Creative Tim</a>
          <a href='https://www.creative-tim.com/presentation' target='_blank' style={{ textDecoration: 'none', color: 'inherit', margin: '15px' }}>About Us</a>
          <a href='https://www.creative-tim.com/blog' target='_blank' style={{ textDecoration: 'none', color: 'inherit', margin: '15px' }}>Blog</a>
          <a href='https://www.creative-tim.com/license' target='_blank' style={{ textDecoration: 'none', color: 'inherit', marginLeft: '15px' }}>License</a>

        </Box>
      </Box>

      <Box sx={{
        backgroundColor: 'white', display: 'flex', justifyContent: 'end', zIndex
          : 1, position: 'fixed', bottom: 40, right: 40, borderRadius: 7, width: 52, height: 52, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <CustomDrawer />
        {/* sjbhckjbakjsc */}
      </Box>

    </Box>
  )
}

export default Profile