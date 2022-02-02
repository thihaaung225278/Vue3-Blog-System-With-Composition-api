import { ref } from "@vue/reactivity";
import { resolve } from "core-js/fn/promise";
let getPosts = () => {
  let error = ref("");
  let posts = ref([]);

  let load = async () => {
    try {
      let res = await fetch("http://localhost:3000/posts");
      if (res.status === 404) {
        throw new Error("Url Not Found.");
      }
      let data = await res.json();

      posts.value = data;
    } catch (err) {
      error.value = err.message;
    }
  };

  return { error, posts, load };
};
export default getPosts;
