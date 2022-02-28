import create from 'zustand'

const useTodosStore = create(() => ({
  todos: [
    {
      id: '1',
      desc: 'first',
      timeCreated: 'null',
      tstatus: 'active',
    },
    {
      id: '2',
      desc: 'second',
      timeCreated: 'null',
      tstatus: 'active',
    },
  ],
}))

export default useTodosStore
