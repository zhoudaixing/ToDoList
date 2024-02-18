import { create } from 'zustand'

interface State {
  list: string[],
  addList: (todo: string) => void
}

const useStore = create<State>((set) => ({
  list: ['123', '456'],
  addList: (todo) => set((state) => ({ list: [...state.list, todo] })),
}))

export default useStore