<template>
  <base-container title="Vuex" v-if="isAuth">
    <h2>{{ counter }}</h2>
    <button @click="AddOne">Add 1</button>
  </base-container>

  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import UserAuth from './components/UserAuth.vue';
// import { mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    UserAuth
  },
  computed: {
    counter() {
      return this.$store.getters['number/normalizeCounter'];
    },
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    }
  },
  methods: {
    AddOne() {
      this.$store.dispatch('number/increment', { value: 10 });
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
