import { ref } from "@vue/reactivity";
import { resolve } from "core-js/fn/promise";
import { db } from "../firebase/config";

let getPosts = () => {
  let error = ref("");
  let posts = ref([]);

  let load = async () => {
    try {
      let res = await db
        .collection("posts")
        .orderBy("created_at", "desc")
        .get();
      let data = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      posts.value = data;
    } catch (err) {
      error.value = err.message;
    }
  };

  return { error, posts, load };
};
export default getPosts;
