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

function Dropdown(props) {
    const [text, setText] = React.useState(props.defaultValue || "");

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


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'react',
    'Vue',
    'Angular',
    'Javascript',
];

function getStyles(name, personName, theme) {
    return {
        fontWeight: personName.includes(name)
            ? theme.typography.fontWeightMedium
            : theme.typography.fontWeightRegular,
    };
}


function MultipleSelectChip() {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}


function ClickableAndDeletableChips(props) {
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    return (
        <Stack direction="row" spacing={1}>
            <Chip
                label={props.option}
                onClick={handleClick}
                onDelete={handleDelete}
            />
        </Stack>
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


export { Dropdown, MultipleSelectChip, ClickableAndDeletableChips, MultiSelectWithChips }