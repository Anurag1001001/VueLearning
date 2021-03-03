<template>
  <section>
    <header>
      <h1>
        My friend List
      </h1>
    </header>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.name + friend.id"
        :name="friend.name"
        :Phone-number="friend.phone"
        :email-Address="friend.email"
        :is-Favourite="true"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "1",
          name: "Anurag",
          phone: "7899874562",
          email: "anurag@localhost.com",
        },
        {
          id: "2",
          name: "Tripathi",
          phone: "7899874562",
          email: "tripathi@localhost.com",
        },
      ],
    };
  },
};
</script>
