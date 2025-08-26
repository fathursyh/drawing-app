import { Button, Stack, Typography, Box } from "@mui/material";
import { RoomForm } from "../UI/forms/RoomForm";

export function HeroSection() {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(0deg,rgba(51, 15, 15, 1) 0%, rgba(217, 41, 41, 1) 100%);",
                px: 2,
                minHeight: "100%",
            }}
        >
            <Stack spacing={4} alignItems="center">
                <Typography variant="h2" fontWeight={700} color="primary">
                    Unleash Your Creativity
                </Typography>
                <Typography variant="h6" color="inherit" textAlign="center" maxWidth={500}>
                    Welcome to the Drawing App! Sketch, doodle, and bring your ideas to life with our easy-to-use tools.
                </Typography>
                <Stack direction="row" spacing={2}>
                    <RoomForm type="create">
                        <Button variant="contained" color="success" size="large">
                            Start Drawing
                        </Button>
                    </RoomForm>
                    <RoomForm type="join">
                        <Button variant="outlined" color="inherit" size="large">
                            Join Room
                        </Button>
                    </RoomForm>
                </Stack>
            </Stack>
        </Box>
    );
}
