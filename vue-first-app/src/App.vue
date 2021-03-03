<template>
  <section>
    <header>
      <h1>
        My friend List
      </h1>
    </header>
    <ul>
      <friend-contact></friend-contact>
      <friend-contact></friend-contact>
    </ul>
  </section>
</template>

<script>
// import FriendContact from "./components/FriendContact.vue";
export default {
  data() {
    return {
      friends: [
        {
          id: "anurag",
          name: "Anurag",
          phone: "7899874562",
          email: "anurag@localhost.com",
        },
        {
          id: "anurag",
          name: "Anurag",
          phone: "7899874562",
          email: "anurag@localhost.com",
        },
      ],
    };
  },
};
</script>
