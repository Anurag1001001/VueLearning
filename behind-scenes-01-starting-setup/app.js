const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      console.log(this.$refs.userText);
    },
  },
  beforeCreate() {
    // in this function we can make http request, set a timer, and could do anything i want
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    console.log("beforeMounted()");
  },
  mounted() {
    console.log("mounted()");
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("updated()");
  },
  beforeUnmount() {
    console.log("beforeunmounted()");
  },
  unmounted() {
    console.log("unmounted()");
  },
});

app.mount("#app");

setTimeout(function () {
  app.unmount("#game");
}, 3000);

// NOrmal javascript
