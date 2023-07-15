export const MyBlogs = {
  state: {
    blogs: [],
    loading: true
  },

  reducers: {
    fillBlogs(state) {
      state.blogs.push({
        name: "elahe",
      });
      return {
        ...state,
        loading: false
      }
    },
  },

  effects: {
    fillBlogsEffect() {
        this.fillBlogs()
    }
  },
};
