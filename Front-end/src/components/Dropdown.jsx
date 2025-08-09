import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useState } from "react";

function Dropdown(props) {
    const [text, setText] = useState(props.defaultValue || "");

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <FormControl variant="standard" sx={{ my: 1, width: "100%" }}>
                <InputLabel id="demo-simple-select-standard-label">{props.title}</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={text}
                    onChange={handleChange}
                    sx={{ mr: 2 }}
                    MenuProps={{
                        PaperProps: {
                            style: {
                                maxHeight: 200,
                                
                            },
                        },
                    }}
                >
                    {
                        props.options.map((option) => (
                            <MenuItem value={option} >{option}</MenuItem>
                        ))}
                </Select>

            </FormControl>

        </div>
    );
}

function MultiSelectWithChips(props) {
    const [selected, setSelected] = React.useState([]);
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setSelected(event.target.value);
        setOpen(false);
    };

    const handleDelete = (chipToDelete) => {
        setSelected((prev) => prev.filter((v) => v !== chipToDelete));
    };

    return (
        <FormControl variant="standard" sx={{ width: "100%" }}>
            <Select
                multiple
                value={selected}
                onChange={handleChange}
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, }}>
                        {selected.map((value) => (
                            <Chip
                                key={value}
                                label={value}
                                onDelete={() => handleDelete(value)}
                                onMouseDown={(event) => event.stopPropagation()}
                                sx={{
                                    backgroundColor: "black",
                                    color: "white",
                                    "& .MuiChip-deleteIcon": {
                                        color: "white",
                                        width: 15
                                    },
                                    "& .MuiChip-deleteIcon:hover": {
                                        color: "white",  
                                    },
                                    fontSize: 12, height: 27
                                }}
                            />
                        ))}
                    </Box>
                )}
                MenuProps={{
                    PaperProps: { style: { maxHeight: 200 } },
                }}
                sx={{ my: 2.5 }}
            >
                {props.options.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}


export { Dropdown, MultiSelectWithChips }