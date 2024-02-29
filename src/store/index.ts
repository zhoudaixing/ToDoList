import { create } from "zustand";

interface ListItem {
  id: number;
  content: string;
  // time?: Date | undefined
  state?: 0 | 1 | 2;
  createdTime?: Date | undefined;
  finishedTime?: Date | undefined;
  creater?: string | undefined;
  tag?: string[]
  category?: string[]
}

interface State {
  count: number;
  list: ListItem[];
  finishList: ListItem[];
  addList: (todo: string) => void;
  deleteItem: (id: number, list: 'list' | 'finishList') => void;
  finishItem: (id: number) => void;
}

const useStore = create<State>((set) => ({
  count: 2,
  list: [
    {
      id: 1,
      content: "123",
    },
    {
      id: 2,
      content: "456",
    },
  ],
  finishList: [],
  addList: (todo) =>
    set((state) => ({
      list: [...state.list, { id: state.count + 1, content: todo }],
      count: state.count + 1,
    })),
  deleteItem: (id, list) =>
    set((state) => ({ finishList: state[list].filter((item) => item.id !== id) })),
  finishItem: (id) =>
    set((state) => {
      const item = state.list.filter((item) => item.id === id);
      return {
        list: state.list.filter((item) => item.id !== id),
        finishList: [...state.finishList, ...item],
      };
    }),
}));

export default useStore;
