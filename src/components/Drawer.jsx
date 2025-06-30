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

export default function CustomDrawer() {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const colors = ["#e91e63", "#212121", "#424242", "#4caf50", "#ff9800", "#f44336"];

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 375 , px:5}}
      role="presentation"
    //   onClick={toggleDrawer(anchor, false)}
    //   onKeyDown={toggleDrawer(anchor, false)}
    >
        <Box sx={{mt:2,my:2, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

<Box>
            <Typography variant='h6'>Material UI Configurator</Typography>
            <Typography variant='body1'>See our dashboard options.</Typography>
</Box>

                <IconButton onClick={toggleDrawer(anchor, false)} >
                    <CloseOutlinedIcon />
                </IconButton>

        </Box>

      <Divider />

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 2 }}>
        Sidenav Colors
      </Typography>
      <Box sx={{ display: "flex", gap: 1 , mb:1}}>
        {colors.map((color, index) => (
          <IconButton
            key={index}
            sx={{
              bgcolor: color,
              width: 24,
              height: 24,
              border: "2px solid black",
              "&:hover": {
                bgcolor: color,
              },
            }}
          />
        ))}
      </Box>
    </Box>
      <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 2 }}>
        Sidenav Type
      </Typography>
      <p style={{color: 'grey'}}>Choose between different sidenav types.</p>

<Box sx={{display:'flex', gap: 1, flexWrap: 'wrap', my:2}}>
      <Button variant='outlined' sx={{border: '1px solid'}}>Dark</Button>
      <Button variant='outlined' sx={{border: '1px solid'}}>Transparent</Button>
      <Button variant='contained'>White</Button>
</Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2}}>

        <Typography sx={{fontWeight: 'bold'}} >Navbar Fixed</Typography><Switch {...label} className='toggle' />
      </Box>
      <Divider />
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2}}>

      <Typography sx={{fontWeight: 'bold'}} >Sidenav Mini</Typography><Switch {...label} className='toggle' />
      </Box>
      <Divider />
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2}}>

      <Typography sx={{fontWeight: 'bold'}}>Light/Dark</Typography><Switch {...label} className='toggle' />
      </Box>
      <Divider />

      <Button variant='contained' sx={{width: '100%',my:1}}>Buy Now</Button>
      <Button variant=
      'contained' sx={{width: '100%',my:1}}>Buy Typescript Version</Button>
      <Button variant='outlined' sx={{border: '1px solid',width: '100%',my:1}}>View Documentation</Button>

<ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled button group"
      sx={{width: '100%', my: 2, display: 'flex', justifyContent: 'center', alignItems: 'center'}}
    >
      <Button>
        <StarBorderOutlinedIcon sx={{width: 20, height: 20, mx:.5}} />
        Star
        </Button>
      <Button>140</Button>
    </ButtonGroup>

      <Typography fontWeight="bold" textAlign="center" sx={{mt:2}}>Thank you for sharing!</Typography>

<Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>



        <Button variant='contained' sx={{border: '1px solid',width: 100,my:1}}> <TwitterIcon sx={{width:25,height:17}}/> Tweet</Button>
        <Button variant='contained' sx={{border: '1px solid',width: 100,my:1}}> <FacebookIcon sx={{width:25,height:17}} /> Share</Button>
   
</Box>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <IconButton onClick={toggleDrawer(anchor, true)} sx={{ right:6,top:5.5}}>
            <SettingsOutlinedIcon />
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
