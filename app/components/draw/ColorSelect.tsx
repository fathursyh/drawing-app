import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import { Box } from "@mui/material";
import { memo } from "react";

const COLORS = ["Black", "Red", "Blue", "Green"];
const circleColor = (color: string) => {
    switch (color) {
        case "Red":
            return "bg-red-600";
        case "Black":
            return "bg-black";
        case "Blue":
            return "bg-blue-600";
        case "Green":
            return "bg-green-600";
    }
};

type ColorSelectProps = {
    color: string;
    onChangeColor: (color: string) => void;
};
function ColorSelect({ color, onChangeColor }: ColorSelectProps) {
    const handleChange = (event: SelectChangeEvent) => {
        onChangeColor(event.target.value as string);
    };

    return (
        <Box>
            <FormControl>
                <Select labelId="color-label" id="color" variant="filled" size="small" value={color} label="color" onChange={handleChange}>
                    {COLORS.map((color) => (
                        <MenuItem value={color}>
                            <div className={`size-3 rounded-full ${circleColor(color)}`}></div>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}

export default memo(ColorSelect);
