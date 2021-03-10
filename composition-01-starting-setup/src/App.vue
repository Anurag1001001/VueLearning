<template>
  <section class="container">
    <h2>{{ user }}</h2>
    <p>{{ uAge }}</p>
    <div>
      <input type="text" placeholder="FirstName" v-model="fName" />
      <input type="text" placeholder="LastName" v-model="lName" />
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue';
export default {
  setup() {
    // const user = ref({
    //   Name: 'Anurag',
    //   age: 24
    // });

    const fName = ref('');
    const lName = ref('');
    const uAge = ref('32');

    // setTimeout(() => {
    //   // userName.value = 'ANur';
    //   (user.value.Name = 'anur'), (user.value.age = 25);
    // }, 2000);
    // function setFirstName(event) {
    //   fName.value = event.target.value;
    //   console.log(fName.value);
    // }
    // function setLastName(event) {
    //   lName.value = event.target.value;
    // }

    const user = computed(() => {
      return fName.value + ' ' + lName.value;
    });

    return {
      user,
      uAge,
      fName,
      lName
    };
  }
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
