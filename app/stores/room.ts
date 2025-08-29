import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type RoomStoreType = {
    room: RoomType;
    changeRoom: (room: RoomType) => void;
};

export type RoomType = {
    id: string;
    name: string;
    lines: [],
    mouse: [],
};

export const useRoom = create(
    persist<RoomStoreType>(
        (set) => ({
            room: { id: "", name: "", lines: [], mouse: [] },
            changeRoom: (room: RoomType) => set({ room }),
        }),
        {
            name: "room-data",
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);
