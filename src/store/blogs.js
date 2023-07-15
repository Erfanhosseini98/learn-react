export const MyBlogs = {
  state: {
    blogs: [],
    loading: true
  },

  reducers: {
    fillBlogs(state) {
    //   state.blogs.push({
    //     name: "elahe",
    //   });
      return {
        ...state,
        loading: false
      };
    },
  },

  effects: {
    fillBlogsEffect() {
        this.fillBlogs()
    }
  },
};
// export const myTodos = {
//   state: {
//     1: { todo: "Learn React" },
//   },

//   reducers: {
//     addTodo(state, todo) {
//       return {
//         ...state,
//         [Date.now()]: { todo },
//       };
//     },
//     removeTodo(state, id) {
//       delete state[id];
//       return {
//         ...state,
//       };
//     },
//   },

//   effects: {
//     async asyncRemoveTodo(id) {
//       await new Promise((resolve) => setTimeout(() => resolve(), 1000));
//       this.removeTodo(id);
//     },
//   },
// };
