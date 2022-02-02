import { ref } from "vue";

let getPost = (id) => {
  let error = ref("");
  let post = ref("");

  let load = async () => {
    try {
      let res = await fetch(`http://localhost:3000/posts/${id}`);
      if (res.status === 404) {
        throw new Error("Url Not Found.");
      }
      let data = await res.json();
      post.value = data;
    } catch (err) {
      error.value = err.message;
    }
  };

  return { error, post, load };
};
export default getPost;
