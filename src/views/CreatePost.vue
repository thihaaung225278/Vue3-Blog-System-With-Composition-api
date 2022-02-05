<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-8 mx-auto">
        <div v-if="error">
          <p class="text-danger">{{error}}</p>
        </div>
        <div class="card border-secondary shadow-sm mb-3">
          <div class="card-header text-success"><strong>Create Post Form</strong></div>
          <div class="card-body">
            <form @submit.prevent="addPost">
              <div class="mb-3">
                <label for="title" class="form-label">Post Title</label>
                <input type="text" class="form-control" id="post-title" v-model="title">
                <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
              </div>
              <div class="mb-3">
                <label for="tag" class="form-label">Tags</label>
                <input type="text" class="form-control" id="tag" v-model="tag" @keydown.enter.prevent="handleTag">
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
                <span>Create Post</span>
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
import { ref } from '@vue/reactivity'
import { useRouter } from "vue-router"
import {db, timestamp} from "../firebase/config"

export default{
  setup(){
    let title = ref("");
    let body = ref("");
    let tag = ref("");
    let tags = ref([]);
    let error = ref("");
    let router = useRouter();

    let handleTag = () =>{
      let smallTag = tag.value.toLowerCase();
      if(!tags.value.includes(smallTag) && tag.value){
        tags.value.push(smallTag);
        tag.value = ""
      }
    }

    let clearTag = (tag) =>{
      tags.value = tags.value.filter((loopTag)=>{
        return loopTag != tag;
      });
    }

    let addPost = async() =>{
      try{

        let res = await db.collection('posts').add({
          title: title.value,
          body: body.value,
          tags: tags.value,
          created_at: timestamp()
        });
        
        router.push({name:"Home"});
      }catch(err){
        error.value = err.message;
      }
    }
    return {title,body,tag,tags,error, handleTag, clearTag, addPost}
    
  }
}
</script>

<style scoped>
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