export const MyBlogs = {
  state: {
    data: [],
    loading: true,
    error: "",
  },

  reducers: {
    setData: (state, payload) => {
      return {
        ...state,
        data: payload,
      };
    },
    setLoading: (state, payload) => {
      return {
        ...state,
        loading: payload,
      };
    },
    setError: (state, payload) => {
      return {
        ...state,
        error: payload,
      };
    },
  },

  effects: {
    async getBlogs() {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          this.setData(data);
          this.setLoading(false);
        })
        .catch((e) => {
          this.setLoading(false);
          this.setError(e.message);
        });
    },
  },
};
