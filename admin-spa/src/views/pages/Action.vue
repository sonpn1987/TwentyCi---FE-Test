<template>
  <default-layout>
    <template slot="content">
      <input type="hidden" v-model="posts.id">
      <div class="row">
        <div class="col-2">Title</div>
        <div class="col-10">
          <input v-model="posts.title" class="form-control" type="text">
        </div>
      </div>
      <div class="row">
        <div class="col-2">Summary</div>
        <div class="col-10">
          <textarea class="form-control" v-model="posts.summary" rows="4"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-2">Description</div>
        <div class="col-10">
          <textarea class="form-control" v-model="posts.description" rows="10"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-2">Author</div>
        <div class="col-10">
          <input v-model="posts.author" class="form-control" type="text">
        </div>
      </div>
      <div class="row">
        <button type="button" @click="onSave" class="btn btn-primary">Save</button>
      </div>
    </template>
  </default-layout>
</template>

<script>
// @ is an alias to /src
import DefaultLayout from "../layouts/Default.vue";
import Utils from "../../utils/";
import { isRejected } from 'q';
export default {
  components: {
    DefaultLayout
  },
  data() {
    return {
      posts: {
        id: "",
        title: "",
        summary: "",
        author: "",
        description: ""
      }
    };
  },
  mounted: function() {
    if (this.$route.params.id != undefined) {
      let db = Utils.db();
      let posts = db.filter(p => p.id === this.$route.params.id);

      if (posts != undefined && posts.length > 0) {
        const parsed = JSON.stringify(posts[0]);
        this.posts = JSON.parse(parsed);
      }
    }
  },
  methods: {
    onSave: function() {
      //validate: TODO

      //validate business: TODO

      //Business: TODO
      let db = Utils.db();

      //Insert
      if (this.$route.params.id == undefined) {
        this.posts.id = "" + Math.random();
        db.push(this.posts);

        let parsed = JSON.stringify(db);
        localStorage.setItem("posts", parsed);
        this.$router.push("/");
      }
      //Update
      else {

        let _this = this;
        db.forEach((item, i) => {
          if (item.id === _this.posts.id) {
            db[i] = _this.posts;
          }
        });

        let parsed = JSON.stringify(db);
        localStorage.setItem("posts", parsed);

        this.$router.push("/");
      }
    }
  }
};
</script>
