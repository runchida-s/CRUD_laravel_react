const axios = window.axios;

const BASE_API_URL = 'http://test.gth.intern.com/api'

export default {
    getAllPosts: () =>
        axios.get(`${BASE_API_URL}/items`),
    getOnePost: (id) =>
        axios.get(`${BASE_API_URL}/items/${id}/edit`),
    addPost: (item) =>
        axios.post(`${BASE_API_URL}/items`, item),
    updatePost: (item, id) =>
        axios.put(`${BASE_API_URL}/items/${id}`, item),
    deletePost: (id) =>
        axios.delete(`${BASE_API_URL}/items/${id}`),

}