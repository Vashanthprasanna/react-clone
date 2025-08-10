import React from 'react'
import { Link } from 'react-router-dom';
import { Typography,TextField,Box,Button,Switch } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../App.css'

const Logout = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
    <Box className='logoutPage'>

        <Box className='logoutHeader'>
            <Box sx={{display : 'flex', flexWrap: 'wrap', alignItems: 'center'}}>

            <Typography variant='body2' sx={{marginLeft: '30px'}}>Pages</Typography>
            <KeyboardArrowDownIcon />
            <Typography variant='body2' sx={{marginLeft: '30px'}}>Authentication</Typography>
            <KeyboardArrowDownIcon />
            <Typography variant='body2' sx={{marginLeft: '30px'}}>Application</Typography>   
            <KeyboardArrowDownIcon />
            <Typography variant='body2' sx={{marginLeft: '30px'}}>Ecommerce</Typography>   
            <KeyboardArrowDownIcon />
            <Typography variant='body2' sx={{marginLeft: '30px'}}>Docs</Typography>   
            <KeyboardArrowDownIcon />
            </Box>

            <Button sx={{fontSize: '12px', backgroundColor: 'black', textTransform: 'capitalize', width: '90px'}}>Buy Now</Button>
        </Box>

    <Box className='bodyContainer'>
        <Box className='signInContainer'>
            <Box>
                <Typography variant='h6' sx={{marginBottom: '25px'}}>Sign In</Typography>
                <FacebookIcon sx={{marginInline: '20px'}}/>
                <GitHubIcon sx={{marginInline: '20px'}}/>
                <GoogleIcon sx={{marginInline: '20px'}}/>
            </Box>
            {/* <Box> */}
                <TextField id="Email" label="Email" variant="outlined" />
                <TextField id="Password" label="Password" variant="outlined" type='password' />
            {/* </Box> */}
            <Box className='rememberMe'>
                <Switch {...label} defaultChecked sx={{
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {backgroundColor: 'grey',},
                    '& .MuiSwitch-track': {backgroundColor: 'grey', // Unchecked track color
                    },
                    
                }}/>
                <Typography variant='body2' sx={{ fontSize: 12, color: 'grey' }}>Remember me</Typography>
            </Box>
            <Button variant='contained' sx={{ textTransform : 'capitalize' , width: '100%' }}>Sign In</Button>
            <Box className='signUpLink'>
                <Typography variant='body2' sx={{ fontSize: 12, color: 'grey' }}>Don't have an account? </Typography>
                <Link style={{ textDecoration: 'none',fontSize: 12, color: 'grey' }}>
                    Sign Up
                </Link>
            </Box>
                
            
        </Box>
    </Box>



{/* Footer */}


        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', my: 2,}} className='footer logoutFooter'>

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

    </Box>
    
  )
}

export default Logout