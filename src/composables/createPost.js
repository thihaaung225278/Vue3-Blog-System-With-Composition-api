import { ref } from "vue";
import { useRouter } from "vue-router";

let createPost = (title, body, tags) => {
  console.log(title);
  console.log(body);
  console.log(tags);
  let error = ref("");
  let router = useRouter();

  let addPostToServer = async () => {
    try {
      let res = fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          body: body,
          tags: tags,
        }),
      });
      if (res.status === 404) {
        throw new Error("Url Not Found.");
      }
      router.push({ name: "Home" });
    } catch (err) {
      error.value = err.message;
    }
  };

  return { error, addPostToServer };
};
export default createPost;
