<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Admin SPA</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">
              Posts
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav my-2">
          <li class="nav-item active">
            <a class="nav-link" @click="logout" href="javascript:">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <slot name="content" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'default-layout',
  methods: {
    logout: function() {
      localStorage.removeItem('login');
      this.$router.push('/login');
    }
  }
};
</script>

