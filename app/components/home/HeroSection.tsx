import { Button, Stack, Typography, Box } from "@mui/material";
import { RoomForm } from "../UI/forms/RoomForm";

export function HeroSection() {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)",
                px: 2,
                minHeight: "100%",
            }}
        >
            <Stack spacing={4} alignItems="center">
                <Typography variant="h2" fontWeight={700} color="primary">
                    Unleash Your Creativity
                </Typography>
                <Typography variant="h6" color="textSecondary" textAlign="center" maxWidth={500}>
                    Welcome to the Drawing App! Sketch, doodle, and bring your ideas to life with our easy-to-use tools.
                </Typography>
                <Stack direction="row" spacing={2}>
                    <RoomForm>
                        <Button variant="contained" color="success" size="large">
                            Start Drawing
                        </Button>
                    </RoomForm>
                    <Button variant="outlined" color="primary" size="large">
                        Learn More
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
}
