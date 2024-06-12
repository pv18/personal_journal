import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IMemoir } from "../types/journal";
import { fetchMemoirs } from "../services/fetchMemoirs";
import { addMemoir } from "../services/addMemoir";
import { immer } from "zustand/middleware/immer";
import { deleteMemoir } from "../../model/services/deleteMemoir";
import { set as setDB, get as getDB } from "idb-keyval";

const KEY_MEMOIRS_DB = "memoirs";

interface JournalStore {
  isLoading: boolean;
  error: undefined | any;
  items: IMemoir[];
  getMemoirs: () => void;
  addMemoir: (payload: IMemoir, callback?: () => void) => void;
  currentMemoir?: IMemoir;
  setCurrentMemoir: (id: string) => void;
  deleteMemoir: () => void;
  syncMemoir: () => void;
  getMemoirOffline: () => void;
  addMemoirOffline: (payload: IMemoir, callback?: () => void) => void;
  deleteMemoirOffline: () => void;
}

export const useJournalStore = create<JournalStore>()(
  devtools(
    immer((set, get) => ({
      isLoading: false,
      error: undefined,
      items: [],
      setCurrentMemoir: (id) => {
        const selectedMemoir = get().items.find((item) => item.id === id);
        if (selectedMemoir) {
          set({ currentMemoir: selectedMemoir });
        }
      },
      getMemoirs: async () => {
        set({ isLoading: true });
        try {
          const { data } = await fetchMemoirs();
          if (data) {
            set({
              items: data,
            });
          }
        } catch (e) {
          set({ error: e });
        } finally {
          set({ isLoading: false });
        }
      },
      addMemoir: async (payload, callback) => {
        set({ isLoading: true });
        try {
          const { data } = await addMemoir(payload);
          if (data) {
            await getDB(KEY_MEMOIRS_DB).then((val: IMemoir[]) => {
              setDB(KEY_MEMOIRS_DB, [...val, data]);
            });

            set({ items: [...get().items, data] });
            callback && callback();
          }
        } catch (e) {
          set({ error: e });
        } finally {
          set({ isLoading: false });
        }
      },
      deleteMemoir: async () => {
        set({ isLoading: true });
        try {
          const id = get().currentMemoir?.id;

          if (id) {
            const { data } = await deleteMemoir(id);
            if (data) {
              await getDB(KEY_MEMOIRS_DB).then((val: IMemoir[]) => {
                setDB(
                  KEY_MEMOIRS_DB,
                  val.filter((item) => item.id !== id),
                );
              });

              get().getMemoirs();
              set({ currentMemoir: undefined });
            }
          }
        } catch (e) {
          set({ error: e });
        } finally {
          set({ isLoading: false });
        }
      },
      syncMemoir: async () => {
        set({ isLoading: true });
        try {
          const { data } = await fetchMemoirs();
          if (data) {
            await setDB("memoirs", data);
            set({
              items: data,
            });
          }
        } catch (e) {
          set({ error: e });
        } finally {
          set({ isLoading: false });
        }
      },
      getMemoirOffline: async () => {
        set({ isLoading: true });
        try {
          await getDB(KEY_MEMOIRS_DB).then((val: IMemoir[]) => {
            set({ items: val });
          });
        } catch (e) {
          set({ error: e });
        } finally {
          set({ isLoading: false });
        }
      },
      addMemoirOffline: async (payload, callback) => {
        await setDB(KEY_MEMOIRS_DB, [...get().items, payload])
          .then(() => {
            get().getMemoirOffline();
            callback && callback();
          })
          .catch((err) => {
            console.log(`${err}`);
          });
      },
      deleteMemoirOffline: async () => {
        const id = get().currentMemoir?.id;
        if (id) {
          await setDB(KEY_MEMOIRS_DB, [
            ...get().items.filter((item) => item.id !== id),
          ])
            .then(() => {
              get().getMemoirOffline();
              set({ currentMemoir: undefined });
            })
            .catch((err) => {
              console.log(`${err}`);
            });
        }
      },
    })),
  ),
);
