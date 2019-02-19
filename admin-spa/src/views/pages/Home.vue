<template>
  <default-layout>
    <template slot="content">
      <router-link to="/posts" class="btn btn-primary">Add</router-link>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Summary</th>
            <th scope="col">Author</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(v, index) in posts">
            <th>{{index + 1}}</th>
            <td>{{v.title}}</td>
            <td>{{v.summary}}</td>
            <td>{{v.author}}</td>
            <td>
              <router-link :to="'/posts/' + v.id" class="btn btn-primary">Edit</router-link>
              <button type="button" @click="onDelete(v.id)" class="btn btn-primary">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </default-layout>
</template>

<script>
// @ is an alias to /src
import DefaultLayout from "../layouts/Default.vue";
import Utils from "../../utils/";

export default {
  components: {
    DefaultLayout
  },
  data() {
    //localStorage.removeItem('posts');
    let posts = Utils.db();
    
    return {
      posts: posts
    };
  },
  mounted: function() {},
  computed: {

  },
  methods: {
    onDelete: function(id) {
      if (confirm("Are you sure to delete this item?")) {
        let db = Utils.db();
        let _this = this;

        db.forEach((item, i) => {
          if (item.id === id) {
            db.splice(i, 1);
            let parsed = JSON.stringify(db);
            localStorage.setItem("posts", parsed);
          }
        });

        this.posts = Utils.db();
      }
    }
  }
};
</script>
