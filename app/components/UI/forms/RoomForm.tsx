import { useState, type FormEvent, type PropsWithChildren } from "react";
import { Modal, Box, Typography, TextField, Button, Stack } from "@mui/material";

export function RoomForm({ children, type }: PropsWithChildren & {type: 'create' | 'join'}) {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const handleOpen = () => {
        setOpen(true);
        setName("");
    };
    const handleClose = () => setOpen(false);
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };
    return (
        <>
            <div onClick={handleOpen}>{children}</div>
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                        minWidth: 300,
                    }}
                >
                    <Typography variant="h6" mb={2} color="primary">
                        Enter Room {type === 'create' ? 'Name' : 'Code'}
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={2}>
                            <TextField label={`Room ${type === 'create' ? 'name' : 'code'}`} variant="outlined" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
                            <Button type="submit" variant="contained" color="primary">
                                {type === 'create' ? 'Create' : 'Join'}
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Modal>
        </>
    );
}
