<template>
  <login-layout>
    <template slot="content">
      <p v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
    </p>
    <form>
      <div class="row">
        <div class="col-2">Username:</div>
        <div class="col-4">
          <input class="form-control" v-model="login.userName" type="text">
        </div>
      </div>
      <div class="row">
        <div class="col-2">Password:</div>
        <div class="col-4">
          <input class="form-control" v-model="login.password" type="password">
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <input class="btn btn-primary" @click="loginForm" type="button" value="Login">
        </div>
      </div>
    </form>
    </template>
  </login-layout>
</template>
<script>
import LoginLayout from "../layouts/Login.vue";
import users from "../../db/users.json"

export default {
  components: {
    LoginLayout
  },
  data() {
    return {
      errors: [],
      login: {
        userName: '',
        password: ''
      }
    };
  },
  methods: {
    loginForm: function(e) {
      
      this.errors = [];

      if (!this.login.userName) {
        this.errors.push("Please, enter Username!")
      }
      if (!this.login.password) {
        this.errors.push("Please, enter Password!")
      }

      let userLogin = users.filter(u => u.userName === this.login.userName);
      if (this.errors.length == 0 && (userLogin.length == 0 || userLogin[0].password != 'demo')) {
        this.errors.push("Username or password invalid!")
      } 

      if (this.errors.length > 0) return;
      localStorage.setItem('login', 'login');
      this.$router.push('/');


      
    }
  }
};
</script>

