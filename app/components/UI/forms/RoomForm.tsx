import { useActionState, useState, type PropsWithChildren } from "react";
import { Modal, Box, Typography, TextField, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router";

const initialValue = { error: false, room: null };
export function RoomForm({ children, type }: PropsWithChildren & { type: "create" | "join" }) {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        state.error = initialValue.error;
        state.room = initialValue.room;
    };

    const submitAction = async (_: any, data: FormData): Promise<any> => {
        const { room } = Object.fromEntries(data.entries());
        try {
            if (room === null || room === "") throw new Error();

            // * call firebase

            navigate(`/draw?room=${room}`);
            return { error: false, room };
        } catch (err) {
            return { error: true, room };
        }
    };

    const [state, formAction, isPending] = useActionState(submitAction, initialValue);

    if (!open) return <div onClick={handleOpen}>{children}</div>;

    return (
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
                    Enter Room {type === "create" ? "Name" : "Code"}
                </Typography>
                <form action={formAction} noValidate>
                    <Stack spacing={2}>
                        <TextField
                            autoFocus
                            label={`Room ${type === "create" ? "name" : "code"}`}
                            variant="outlined"
                            name="room"
                            fullWidth
                            required
                            defaultValue={state?.room}
                            error={state?.error}
                            helperText={state?.error && "Room cannot be empty."}
                        />
                        <Button type="submit" variant="contained" color="primary">
                            {type === "create" ? "Create" : "Join"}
                        </Button>
                    </Stack>
                </form>
            </Box>
        </Modal>
    );
}
