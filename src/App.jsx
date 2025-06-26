import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@fontsource/roboto/300.css';
import { Button, Container, Typography, List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { ListItems, ListButton } from './components/ListItems';
import Divider from '@mui/material/Divider';
import './App.css';


function App() {


  return (
    <div className='app'>

      <Container className='side-bar' sx={{ ml: 1, mr: 1, mt: 1, mb: 1, width: '220px', backgroundColor: 'rgba(0, 0, 0, 0.87);', borderRadius: '8px', color: 'white', fontSize: '14px' }}>
        <Typography variant="body1">Creative Tim</Typography>
        <Divider />
        <p>Brooklyn Alice</p>


        <ListItems title="Dashboards" />
        <Divider />

        <Typography variant='body1'>Pages</Typography>

        <ListItems title="Pages" />
        <ListItems title="Account" />
        <ListItems title="Team" />
        <ListItems title="Application" />
        <ListItems title="Ecommerce" />
        <ListItems title="Authentication" />
        <Divider />

        <Typography variant='body1'>Docs</Typography>

        <ListItems title="Basic" />
        <ListItems title="Components" />

        <ListButton title="Change Log" />

      </Container>

    </div>
  )
}

export default App
