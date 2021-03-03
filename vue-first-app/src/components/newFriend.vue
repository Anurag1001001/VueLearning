<template>
  <section>
    <form>
      <input
        type="text"
        placeholder="Enter your name"
        ref="userName"
        required
      />
      <input
        type="number"
        placeholder="Enter your Phone Num"
        ref="phoneNum"
        required
      />
      <input type="email" placeholder="Enter your email" ref="email" required />
      <button @click="addFriend">Submit</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return { name: "", phone: "", email: "" };
  },
  methods: {
    addFriend(e) {
      e.preventDefault();
      this.name = this.$refs.userName.value;
      this.phone = this.$refs.phoneNum.value;
      this.email = this.$refs.email.value;
      this.addToList();
    },
    addToList() {
      //   console.log(this.name);
      //   console.log(this.phone);
      //   console.log(this.email);
      this.$emit("add-friend", this.name, this.phone, this.email);
      //   this.name = "";
      //   this.phone = "";
      //   this.email = "";
    },
  },
};
</script>
