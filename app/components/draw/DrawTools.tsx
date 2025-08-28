import CreateIcon from '@mui/icons-material/Create';
import AutoFixOffIcon from '@mui/icons-material/AutoFixOff';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import { memo } from 'react';

type DrawToolType = {
    draw: string,
    onChangeTool: (tool: string) => void
}
function DrawTools({ draw, onChangeTool }: DrawToolType) {

    const handleDraw = (
        event: React.MouseEvent<HTMLElement>,
        newDraw: string | null,
    ) => {
        if (newDraw === null) return;
        onChangeTool(newDraw!)
    };

    return (
        <>
            <ToggleButtonGroup
                value={draw}
                exclusive
                onChange={handleDraw}
                aria-label="Draw tools"
            >
                <ToggleButton value="pen" aria-label="pen">
                    <CreateIcon />
                </ToggleButton>
                <ToggleButton value="eraser" aria-label="eraser">
                    <AutoFixOffIcon />
                </ToggleButton>
            </ToggleButtonGroup>
        </>
    );
}

export default memo(DrawTools);