<template>
  <button @click="logIn" v-if="!userIsAuthenticated">LoggedIn</button>
  <button @click="logOut" v-else>LoggedOut</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters(['userIsAuthenticated'])
  },
  methods: {
    // logIn() {
    //   this.$store.dispatch('logIn');
    // },
    // logOut() {
    //   this.$store.dispatch('logOut');
    // },
    ...mapActions(['logIn', 'logOut'])
  }
};
</script>
