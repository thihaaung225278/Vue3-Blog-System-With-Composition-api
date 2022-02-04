<template>
   <div class="container mt-3">
    <div class="row">
      <div class="col-md-8 mx-auto">
        <div class="card border-secondary shadow-sm mb-3">
          <div class="card-header text-success"><strong>Edit Post Form</strong></div>
          <div class="card-body">
            <form @submit.prevent="editPost">
              <div class="mb-3">
                <label for="title" class="form-label">Post Title</label>
                <input type="text" class="form-control" id="post-title" v-model="title">
              </div>
              <div class="mb-3">
                <label for="tag" class="form-label">Tags</label>
                <input type="text" class="form-control" id="tag" v-model="tag">
                <div>
                  <span class="badge rounded-pill bg-success me-2 mt-2" v-for="tag in tags" :key="tag">
                    <span class="custom-tag">{{tag}}</span>
                    <span class="material-icons custom-material-icon ms-2" @click="clearTag(tag)">clear</span>
                  </span>
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Post Body</label>
                <textarea class="form-control" id="exampleInputPassword1" row="3" v-model="body"></textarea>
              </div>
              <button type="submit" class="btn btn-outline-success custom-button">
                <span>Edit Post</span>
                <span class="material-icons custom-button-icon ms-2">arrow_forward_ios</span>
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import getPost from "../composables/getPost"
import { onMounted } from '@vue/runtime-core';
import { useRouter } from 'vue-router'

export default {
    props:["id"],
    setup(props){

        let title = ref("");
        let body = ref("");
        let tag = ref("");
        let tags = ref("");
        let fetchError =ref("");
        let editError = ref("");
        let router = useRouter();

        let fetchData = async() =>{
            try{
                let res = await fetch(`http://localhost:3000/posts/${props.id}`);
                if(res.status === 404){
                    throw new Error("URL Not Found.");
                }
                let data = await res.json();
                title.value = data.title;
                body.value = data.body;
                tags.value = data.tags;
            }catch(err){
                fetchError.value = err.message;
            }
        }
        fetchData();

        let clearTag = (tag) =>{
            tags.value = tags.value.filter((loopTag) =>{
                return loopTag != tag;
            });
        }

        let editPost = async() =>{
            try{
                let res = fetch(`http://localhost:3000/posts/${props.id}`,{
                    method:"PATCH",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({
                        title: title.value,
                        body: body.value,
                        tags: tags.value
                    })
                });
                if(res.status === 404){
                    throw new Error("URL Not Found.");
                }
                router.push({name:"Home"});
            }catch(err){
                editError.value = err.message;
            }
        }

        return {title, body, tag, tags, clearTag, editPost}
    }
}
</script>

<style>
    .custom-tag{
    position: relative;
    top: -3px;
    text-shadow: 0px 0px 1px #000;;
  }
  .custom-material-icon{
    font-size: 16px;
    font-weight: bold;
    color: red;
    cursor: pointer;
    text-shadow: 0px 0px 2px #000;
    transition: all .3s ease;
  }
  .custom-material-icon:hover{
    color: white;
    text-shadow: 0px 0px 2px #000;
  }

  .custom-button-icon{
    font-size: 18px;
    font-weight: bold;
    position: relative;
    top: 3px;
  }
</style>