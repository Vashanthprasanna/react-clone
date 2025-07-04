import React from "react";
import { Box, Tabs, Tab, useMediaQuery } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export default function CombinedTabs(props) {
    const [value, setValue] = React.useState(0);
    const isSmall = useMediaQuery("(max-width:600px)");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                backgroundColor: "#f5f5f5",
                borderRadius: 2,
                width: isSmall ? 220 : "100%",
                p: 1,
            }}
        >
            <Tabs
                orientation={isSmall ? "vertical" : "horizontal"}
                value={value}
                onChange={handleChange}
                sx={{
                    "& .MuiTabs-flexContainer": {
                        flexDirection: isSmall ? "column" : "row",
                    },
                    "& .MuiTab-root": {
                        justifyContent: isSmall ? "flex-start" : "center",
                        textTransform: "none",
                        fontSize: 14,
                        alignItems: "center",
                        borderRadius: 2,
                        minHeight: "auto",
                        px: 2,
                        py: 1,
                        transition: "background-color 0.3s ease, box-shadow 0.3s ease",  // transition here
                    },
                    "& .Mui-selected": {
                        backgroundColor: "white",
                        boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                    },
                    "& .MuiTabs-indicator": {
                        display: "none",
                    },
                }}
            >
                {
                    props.options.map((option) => (
                        <Tab icon={<HomeOutlinedIcon />} iconPosition="start" label={option} />
                    ))
                }
            </Tabs>
        </Box>
    );
}
