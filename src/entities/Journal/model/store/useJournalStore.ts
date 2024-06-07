import { create } from "zustand";
import { IMemoir } from "../types/journal";
import { fetchMemoirs } from "../services/fetchMemoirs";
import { addMemoir } from "../services/addMemoir";
import { immer } from "zustand/middleware/immer";
import { deleteMemoir } from "../../model/services/deleteMemoir";

interface JournalStore {
  isLoading: boolean;
  error: undefined | any;
  items: IMemoir[];
  getMemoirs: () => void;
  addMemoir: (payload: IMemoir, callback?: () => void) => void;
  currentMemoir?: IMemoir;
  setCurrentMemoir: (id: string) => void;
  deleteMemoir: () => void;
}

export const useJournalStore = create<JournalStore>()(
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
  })),
);
