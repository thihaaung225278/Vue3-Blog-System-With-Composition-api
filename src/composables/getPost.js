import { ref } from "vue";
import { db } from "../firebase/config";

let getPost = (id) => {
  let load = async () => {
    try {
      let res = await db.collection("posts").doc(id).get();
      let data = { id: res.id, ...res.data() };
      post.value = data;
    } catch (err) {
      error.value = err.message;
    }
  };

  let error = ref("");
  let post = ref("");

  return { error, post, load };
};
export default getPost;
