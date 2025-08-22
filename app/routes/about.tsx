import { Box, Typography, Link, Stack, Card, CardContent, Grid, Divider } from "@mui/material";

export default function AboutPage() {
    return (
        <Box
            sx={{
                minHeight: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: 2,
                background: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)",
            }}
        >
            <Box sx={{ width: "100%", maxWidth: 800, bgcolor: "background.paper", borderRadius: 3, boxShadow: 3, p: 4 }}>
                <Stack spacing={4}>
                    {/* Header */}
                    <Stack spacing={1} alignItems="center">
                        <Typography variant="h3" fontWeight={700} color="primary">
                            About This Drawing App
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" textAlign="center">
                            Real-time collaborative drawing powered by Firebase
                        </Typography>
                    </Stack>
                    <Divider />

                    {/* Description */}
                    <Typography variant="body1" color="text.secondary" textAlign="center">
                        This web application lets you sketch, doodle, and create together with others instantly.
                        All changes are synchronized in real-time, making creativity seamless and interactive.
                        Whether you're brainstorming, teaching, or just having fun, this app is designed to make drawing easy and collaborative.
                    </Typography>

                    {/* Advantages Section */}
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography variant="h6" color="primary" gutterBottom>
                                        🚀 Real-Time Collaboration
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Draw with friends or colleagues at the same time. See everyone's changes instantly, powered by Firebase.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography variant="h6" color="primary" gutterBottom>
                                        🎨 Easy-to-Use Tools
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Simple and intuitive drawing tools for all skill levels. No installation required—just open and start drawing!
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography variant="h6" color="primary" gutterBottom>
                                        🔒 Secure & Private
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Your drawings are stored securely. Share your room link only with people you trust.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography variant="h6" color="primary" gutterBottom>
                                        💡 Great for Teams & Learning
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Perfect for remote teams, online classrooms, or creative sessions. Collaborate visually from anywhere.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    <Divider />

                    {/* Creator Info */}
                    <Stack spacing={1} alignItems="center">
                        <Typography variant="body1" color="text.secondary">
                            Created by <strong>Fathursyah Awandanu</strong>.
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Find me on GitHub:{" "}
                            <Link href="https://github.com/fathursyh" target="_blank" rel="noopener">
                                github.com/fathursyh
                            </Link>
                        </Typography>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
}