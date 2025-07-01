import { Tabs, Tab, Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";

export default function NavTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: '#f5f5f5', borderRadius: 3, p: 0.5 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="standard"
        textColor="primary"
        indicatorColor="primary"
        sx={{
          '& .MuiTabs-indicator': {
            borderRadius: 2,
            backgroundColor: 'white',
            boxShadow: 1,
            height: '100%',
            zIndex: 0,
          },
          '& .MuiTab-root': {
            minHeight: 48,
            // minWidth: 100,
          },
          '& .Mui-selected': {
            backgroundColor: 'white',
            borderRadius: 2,
            zIndex: 1,
          },
        }}
      >
        <Tab icon={<HomeIcon />} label="App" />
        <Tab icon={<EmailIcon />} label="Message" />
        <Tab icon={<SettingsIcon />} label="Settings" />
      </Tabs>
    </Box>
  );
}
