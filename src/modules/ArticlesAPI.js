import axios from "axios";
import store from "../state/store/configureStore";

const { dispatch, getState } = store;

const ArticlesAPI = {
  async index() {
    const response = await axios.get("api/articles");
    dispatch({ type: "SET_ARTICLES", payload: response.data.articles });
  },

  async show(id) {
    // const { articles } = getState();
    // const article = articles.find((element) => {
    //   return element.id === parseInt(id);
    // });
    const response = await axios.get(`api/articles/${id}`);
    const { article } = response.data;
    dispatch({ type: "SET_ACTIVE_ARTICLE", payload: article });
  },
  async create(params) {},
  async edit(id, params) {},
  async destroy(id) {},
};

export default ArticlesAPI;
