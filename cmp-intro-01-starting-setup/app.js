const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "anurag",
          name: "Anurag Tripathi",
          email: "anurag@localhost.com",
          phone: "9876541230",
        },
        {
          id: "aaryan",
          name: "Aaryan Tripathi",
          email: "aaryan@localhost.com",
          phone: "7894563120",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
    <li>
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails">
            {{mayVisible ? 'Hide' : 'show'}}
          </button>
          <ul v-if="mayVisible">
            <li><strong>Phone:</strong>{{friend.phone}}</li>
            <li><strong>Email:</strong>{{friend.email}}</li>
          </ul>
    </li>
    `,
  data() {
    return {
      mayVisible: true,
      friend: {
        id: "anurag",
        name: "Anurag Tripathi",
        email: "anurag@localhost.com",
        phone: "9876541230",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.mayVisible = !this.mayVisible;
    },
  },
});

app.mount("#app");
