<template>
  <section>
    <header>
      <h1>
        My friend List
      </h1>
    </header>
    <ul>
      <new-friend @add-friend="addFriend"></new-friend>
      <friend-contact
        v-for="friend in friends"
        :key="friend.name + friend.id"
        :name="friend.name"
        :id="friend.id"
        :Phone-number="friend.phone"
        :email-Address="friend.email"
        :is-Favourite="friend.isFavourite"
        @toggle-favourite="toggleFavourite"
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
          id: "1anurag",
          name: "Anurag",
          phone: "7899874562",
          email: "anurag@localhost.com",
          isFavourite: true,
        },
        {
          id: "2Tripathi",
          name: "Tripathi",
          phone: "7899874562",
          email: "tripathi@localhost.com",
          isFavourite: true,
        },
      ],
    };
  },
  methods: {
    toggleFavourite(friendId) {
      const identifiedFriend = this.friends.find(
        (friend) => friend.id === friendId
      );
      console.log(friendId, "id");
      identifiedFriend.isFavourite = !identifiedFriend.isFavourite;
    },
    addFriend(name, phone, email) {
      console.log("name", name);
      console.log(phone);
      console.log(email);
    },
  },
};
</script>
