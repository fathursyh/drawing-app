import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import { Box } from '@mui/material';
import { memo } from 'react';

const STROKES = [1, 3, 5, 7, 9];

type StrokeSelectProps = {
    stroke: number,
    onChangeStroke: (width: number) => void
}
function StrokeSelect({ stroke, onChangeStroke }: StrokeSelectProps) {

    const handleChange = (event: SelectChangeEvent) => {
        onChangeStroke(parseInt(event.target.value));
    };

    return (
        <Box>
            <FormControl>
                <Select
                    labelId="stroke-label"
                    id="stroke"
                    variant='outlined'
                    size='small'
                    sx={{ height: 48 }}
                    value={stroke.toString()}
                    label="stroke"
                    onChange={handleChange}
                >
                    {
                        STROKES.map(width => (
                            <MenuItem value={width}>
                               { width }px
                            </MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </Box>
    );
}

export default memo(StrokeSelect)