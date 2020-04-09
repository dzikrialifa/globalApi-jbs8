import GetAPI from './Get';
import PostAPI from './Post';
import DeleteAPI from './Delete';

// GET
const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');

// post
const postNewsBlog = () => (dataYgDikirim) => PostAPI('posts', dataYgDikirim);

// delete
const deleteNewsBlog = () => (dataYgDihapus) => DeleteAPI('posts', dataYgDihapus);

const API = {
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API;