import { onValue, ref, set } from "firebase/database";
import { db } from "./firebase.config";
export const roomApi = {
    createNewRoom: async (room: string) => {
        try {
            const randomCode = `ft-${new Date().getMilliseconds()}-${room}`;
            await set(ref(db, `rooms/${randomCode}/`), {name: room});
            return {roomData: {id: randomCode, name: room, lines: [], mouse: []}, error: null};
        } catch (err: any) {
            console.log(err);
            return {error: err.Error}
        }
    },
    fetchRoomData: async(id: string) => {
        const roomRef = ref(db, `rooms/${id}`);
        onValue(roomRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
        });
    }
};
