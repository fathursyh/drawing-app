import { Box } from "@mui/material";
import CanvasSection from "~/components/draw/CanvasSection";

export default function DrawPage() {
    return (
        <div
        className="bg-white h-full w-full"
        >
            <CanvasSection />
        </div>
    )
}