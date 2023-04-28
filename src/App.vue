<!-- ./src/App.vue -->

<script>
export default {
  data() {
    return {
      msg: this.blogName,
      users: [],
    };
  },
  beforeCreate() {
    console.log(this.blogName);
  },
  created() {
    this.axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.users = res.data;
    });
  },
};
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <h1>Welcome to {{ msg }}</h1>
    </div>
  </header>

  <main>
    <ul>
      <li v-for="user in users" :key="user.id">
        <p>{{ user.name }}</p>
      </li>
    </ul>
  </main>
</template>
