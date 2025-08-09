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
import { useState } from "react";

export default function CustomDrawer(props) {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const colors = ["#e91e63", "#212121", "#424242", "#4caf50", "#ff9800", "#f44336"];

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 360, px: 5 }}
      role="presentation"
    >
      <Box sx={{ my: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>

        <Box>
          <Typography variant='h5' sx={{ fontSize: 20, fontWeight: 700 }}>Material UI Configurator</Typography>
          <Typography variant='body1' sx={{ color: 'grey' }}>See our dashboard options.</Typography>
        </Box>

        <IconButton onClick={toggleDrawer(anchor, false)} >
          <CloseOutlinedIcon sx={{ color: 'black', fontSize: 18 }} />
        </IconButton>

      </Box>

      <Divider />

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 2, fontSize: 16, fontWeight: 700 }}>
          Sidenav Colors
        </Typography>
        <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
          {colors.map((color, index) => (
            <IconButton
              key={index}
              sx={{
                bgcolor: color,
                width: 24,
                height: 24,
                "&:hover": {
                  bgcolor: color,
                },
              }}
            />
          ))}
        </Box>
      </Box>
      <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 2, fontSize: 16, fontWeight: 700, }}>
        Sidenav Type
      </Typography>
      <p style={{ color: 'grey', fontSize: 14 }}>Choose between different sidenav types.</p>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap', my: 2, fontSize: 12, fontWeight: 700 }}>
        <Button variant='outlined' sx={{ border: 1, fontSize: 12, fontWeight: 700, borderRadius: 2, boxShadow: 'rgba(23, 23, 23, 0.15) 0px 3px 3px 0px, rgba(23, 23, 23, 0.2) 0px 3px 1px -2px, rgba(23, 23, 23, 0.15) 0px 1px 5px 0px' }}>Dark</Button>
        <Button variant='outlined' sx={{ border: 1, fontSize: 12, fontWeight: 700, borderRadius: 2, boxShadow: 'rgba(23, 23, 23, 0.15) 0px 3px 3px 0px, rgba(23, 23, 23, 0.2) 0px 3px 1px -2px, rgba(23, 23, 23, 0.15) 0px 1px 5px 0px' }}>Transparent</Button>
        <Button variant='contained' sx={{ fontSize: 12, fontWeight: 700, borderRadius: 2, boxShadow: 'rgba(23, 23, 23, 0.15) 0px 3px 3px 0px, rgba(23, 23, 23, 0.2) 0px 3px 1px -2px, rgba(23, 23, 23, 0.15) 0px 1px 5px 0px' }}>White</Button>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>

        <Typography sx={{ fontSize: 16, fontWeight: 700 }} >Navbar Fixed</Typography><Switch {...label} className='toggle' defaultChecked />
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>

        <Typography sx={{ fontSize: 16, fontWeight: 700 }} >Sidenav Mini</Typography><Switch {...label} className='toggle' />
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>

        <Typography sx={{ fontSize: 16, fontWeight: 700 }}>Light/Dark</Typography><Switch {...label} className='toggle' />
      </Box>
      <Divider sx={{ my: 2 }} />

      <Button variant='contained' sx={{ my: 1, borderRadius: 2, height: 40, width: 292, fontSize: 12, fontWeight: 700, boxShadow: 'rgba(23, 23, 23, 0.15) 0px 3px 3px 0px, rgba(23, 23, 23, 0.2) 0px 3px 1px -2px, rgba(23, 23, 23, 0.15) 0px 1px 5px 0px' }}>Buy Now</Button>
      <Button variant=
        'contained' sx={{ my: 1, borderRadius: 2, height: 40, width: 292, fontSize: 12, fontWeight: 700, boxShadow: 'rgba(23, 23, 23, 0.15) 0px 3px 3px 0px, rgba(23, 23, 23, 0.2) 0px 3px 1px -2px, rgba(23, 23, 23, 0.15) 0px 1px 5px 0px' }}>Buy Typescript Version</Button>
      <Button variant='outlined' sx={{ my: 1, borderRadius: 2, height: 40, width: 292, fontSize: 12, fontWeight: 700 }}>View Documentation</Button>

      <ButtonGroup
        disableElevation
        variant="outlined"
        sx={{ my: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Button sx={{ fontSize: 12, fontWeight: 600, textTransform: 'none', p: .5 }} >
          <StarBorderOutlinedIcon sx={{ width: 16, height: 16, }} />
          Star
        </Button>
        <Button sx={{ fontSize: 12, fontWeight: 600, p: .5 }}>140</Button>
      </ButtonGroup>

      <Typography fontWeight="bold" textAlign="center" sx={{ mt: 2 }}>Thank you for sharing!</Typography>

      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', alignItems: 'center', mb: 4 }}>



        <Button variant='contained' sx={{ border: '1px solid', width: 105, my: 1, fontSize: 12, fontWeight: 700, height: 40, borderRadius: 2, boxShadow: 'rgba(23, 23, 23, 0.15) 0px 3px 3px 0px, rgba(23, 23, 23, 0.2) 0px 3px 1px -2px, rgba(23, 23, 23, 0.15) 0px 1px 5px 0px', backgroundColor: 'black' }}> <TwitterIcon sx={{ fontSize: 16, mx: 1 }} /> Tweet</Button>
        <Button variant='contained' sx={{ border: '1px solid', width: 105, my: 1, fontSize: 12, fontWeight: 700, height: 40, borderRadius: 2, boxShadow: 'rgba(23, 23, 23, 0.15) 0px 3px 3px 0px, rgba(23, 23, 23, 0.2) 0px 3px 1px -2px, rgba(23, 23, 23, 0.15) 0px 1px 5px 0px', backgroundColor: 'black' }}> <FacebookIcon sx={{ fontSize: 16, mx: 1 }} /> Share</Button>

      </Box>
    </Box>
  );

  return (
    <div>
      { 
        <React.Fragment key={props.direction}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <IconButton onClick={toggleDrawer(props.direction, true)} sx={{ right: 6, top: 5.5 }}>
            <SettingsOutlinedIcon sx={{ color: 'black' }} />
          </IconButton>
          <Drawer
            anchor={props.direction}
            open={state[props.direction]}
            onClose={toggleDrawer(props.direction, false)}
          >
            {list(props.direction)}
          </Drawer>
        </React.Fragment>
      }
    </div>
  );
}
