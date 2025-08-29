import { Stage, Layer, Line } from "react-konva";
import DrawTools from "./DrawTools";
import ColorSelect from "./ColorSelect";
import { useDrawing } from "~/hooks/useDrawing";
import { useEffect, useMemo } from "react";
import StrokeSelect from "./StrokeSelect";
import { roomApi } from "~/api/roomApi";
import { useRoom } from "~/stores/room";

const CanvasSection = () => {
    const {room} = useRoom();
    const {
        tool, color, lines, stroke, containerRef, dimensions, changeColor, changeTool, changeStroke, handleMouseDown, handleMouseMove, handleMouseUp, handleUndo, handleRedo
    } = useDrawing();

    useEffect(() => {
        window.addEventListener('keydown', handleCtrlZ);
        return () => window.removeEventListener('keydown', handleCtrlZ);
    }, [lines]);

    useEffect(() => {
        roomApi.fetchRoomData(room.id);
    }, []);

    function handleCtrlZ(e: KeyboardEvent) {
        if (e.ctrlKey && e.key === 'z') {
            e.preventDefault();
            handleUndo();
        }
        if (e.ctrlKey && e.key === 'y') {
            e.preventDefault();
            handleRedo();
        }
    }

    const StageArea = useMemo(() => (
        <Stage
            width={dimensions.width}
            height={dimensions.height}
            onMouseDown={handleMouseDown}
            onMousemove={handleMouseMove}
            onMouseup={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchMove={handleMouseMove}
            onTouchEnd={handleMouseUp}
        >
            <Layer>
                {lines.map((line, i) => (
                    <Line
                        perfectDrawEnabled={false}
                        key={i}
                        points={line.points}
                        draggable
                        onDragEnd={(e) => {
                            line.points[0] = e.target.x;
                            line.points[1] = e.target.y;
                        }}
                        stroke={line.color}
                        strokeWidth={line.stroke}
                        tension={0.5}
                        lineCap="round"
                        lineJoin="round"
                        globalCompositeOperation={line.tool === "eraser" ? "destination-out" : "source-over"}
                    />
                ))}
            </Layer>
        </Stage>
    ), [dimensions, lines, tool, color, stroke]);

    return (
        <div ref={containerRef} className="text-black w-full h-full">
            <aside className="fixed bg-white/80 z-40 bottom-2 left-1/2 -translate-x-1/2 h-fit flex justify-center items-center">
                <DrawTools onChangeTool={changeTool} draw={tool} />
                <ColorSelect onChangeColor={changeColor} color={color} />
                <StrokeSelect stroke={stroke} onChangeStroke={changeStroke} />
            </aside>
            {StageArea}
        </div>
    );
};

export default CanvasSection;
