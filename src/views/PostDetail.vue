<template>
  <div class="container mt-3">
      <div class="row">
          <div class="col-md-12">
                <div v-if="error">
                    <h2>{{error}}</h2>
                </div>
                <div v-if="post">
                    <div class="card border-secondary mb-3">
                        <div class="card-header text-success"><strong>{{post.title}}</strong></div>
                        <div class="card-body">
                            <h5 class="card-title"></h5>
                            <p class="card-text">{{post.body}}</p>
                        </div>
                        <div class="card-footer d-flex justify-content-between">
                            <button class="btn btn-outline-success d-flex">
                                <span class="me-3"><strong>Edit</strong></span>
                                <span class="material-icons">edit</span>
                            </button>
                            <button class="btn btn-outline-danger d-flex">
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
import Spinner from '../components/Spinner'
import getPost from "../composables/getPost"
export default {
  components: { Spinner },
    props:['id'],
    setup(props){
       let {error, post, load} = getPost(props.id);
       load();

       return {error, post}
    }
}
</script>

<style>

</style>