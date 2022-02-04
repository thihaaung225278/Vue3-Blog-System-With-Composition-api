import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import CreatePost from "../views/CreatePost.vue";
import PostDetail from "../views/PostDetail.vue";
import Tag from "../views/Tag.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/posts/:id",
    name: "PostDetail",
    component: PostDetail,
    props: true,
  },
  {
    path: "/create-post",
    name: "CreatePost",
    component: CreatePost,
  },
  {
    path: "/tags/:tag",
    name: "Tag",
    component: Tag,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
