import { useCallback, useEffect, useRef, useState } from "react";

export function useDrawing() {
    const [tool, setTool] = useState("pen");
    const [color, setColor] = useState('Black');

    const [stroke, setStroke] = useState(3);
    const [lines, setLines] = useState<any[]>([]);
    const isDrawing = useRef(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const history = useRef<any[]>([]);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateSize = () => {
            if (containerRef.current) {
                const { width, height } = containerRef.current.getBoundingClientRect();
                setDimensions({ width, height });
            }
        };
        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    const changeTool = useCallback((tool: string) => {
        setTool(tool)
    }, [tool]);

    const changeColor = useCallback((color: string) => {
        setColor(color)
    }, [color]);

    const changeStroke = useCallback((width: number) => {
        setStroke(width)
    }, [stroke]);

    const handleMouseDown = (e: any) => {
        isDrawing.current = true;
        const pos = e.target.getStage().getPointerPosition();
        setLines([...lines, { tool, points: [pos.x, pos.y], color, stroke }]);
    };

    const handleMouseMove = (e: any) => {
        // no drawing - skipping
        if (!isDrawing.current) {
            return;
        }
        const stage = e.target.getStage();
        const point = stage.getPointerPosition();
        let lastLine = lines[lines.length - 1];
        // add point
        lastLine.points = lastLine.points.concat([point.x, point.y]);

        // replace last
        lines.splice(lines.length - 1, 1, lastLine);
        setLines(lines.concat());
    };

    const handleMouseUp = () => {
        isDrawing.current = false;
        history.current = lines;
    };

    const handleUndo = () => {
        if (lines.length === 0) return;
        setLines(prev => prev.slice(0, -1))
    }

    const handleRedo = () => {
        if (lines.length === history.current.length) return;
        setLines(prev => [...prev, history.current[lines.length]]);
    }

    return {
        tool,
        color,
        stroke,
        lines,
        dimensions,
        containerRef,
        changeColor,
        changeTool,
        changeStroke,
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        handleUndo,
        handleRedo,
    }
}