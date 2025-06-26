import React from 'react'
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import ListItem from '@mui/material/ListItem';

import DraftsIcon from '@mui/icons-material/Drafts';



function ListItems(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (

    <>

      <List>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon sx={{ minWidth: 32 }}>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={props.title} sx={{ '.MuiTypography-root': { fontSize: '12px' } }} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary={props.subTitle} sx={{ '.MuiTypography-root': { fontSize: '12px' } }} />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </>

  )
}

function ListButton(props) {
  return (
    <>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ minWidth: 32 }}>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary={props.title} sx={{ '.MuiTypography-root': { fontSize: '12px' } }} />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  )
}

export { ListItems, ListButton }