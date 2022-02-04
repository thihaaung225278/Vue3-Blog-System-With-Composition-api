<template>
  <div class="container mt-3">
      <div class="row">
          <div class="col-md-12">
                <div v-if="error" class="text-danger">
                    <h2>{{error}}</h2>
                </div>
                <div v-if="deleteError" class="text-danger">
                    <h2>{{deleteError}}</h2>
                </div>
                <div v-if="post">
                    <div class="card border-secondary mb-3">
                        <div class="card-header text-success"><strong>{{post.title}}</strong></div>
                        <div class="card-body">
                            <h5 class="card-title"></h5>
                            <p class="card-text">{{post.body}}</p>
                        </div>
                        <div class="card-footer d-flex justify-content-between">
                            <router-link :to="{name:'EditPost',params:{id:post.id}}" class="btn btn-outline-success d-flex">
                                <span class="me-3"><strong>Edit</strong></span>
                                <span class="material-icons">edit</span>
                            </router-link>
                            <button class="btn btn-outline-danger d-flex" @click="deletePost">
                                <span class="me-3"><strong>Delete</strong></span> 
                                <span class="material-icons">delete</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <Spinner></Spinner>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Spinner from '../components/Spinner'
import getPost from "../composables/getPost"
import { useRouter } from "vue-router"
export default {
  components: { Spinner },
    props:['id'],
    setup(props){

        let deleteError = ref("");
        let router = useRouter();

        let {error, post, load} = getPost(props.id);
        load();

        let deletePost = async() =>{
            try{
                let res = await fetch(`http://localhost:3000/posts/${props.id}`,{
                    method: "DELETE",
                });
                if(res.status === 404){
                    throw new Error("Url Not Found Error!");
                }
                router.push({name:'Home'});
            }catch(err){
                deleteError.value = err.message;
            }
        }

        return {error ,deleteError , post, deletePost}
    }
}
</script>

<style>

</style>