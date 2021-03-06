<template>
  <div>
    <h2>Manage Goal</h2>
    <input type="text" ref="goal" />
    <button @click="SetGoal">SetGoal</button>
    <teleport to="body">
      <ErrorMessage v-if="isInputFieldEmpty">
        <h2>Input Field empty</h2>
        <p>Please Enter atleast few character...</p>
        <button @click="removeMsg">Okay</button>
      </ErrorMessage>
    </teleport>
  </div>
</template>

<script>
import ErrorMessage from "./ErrorMessage";
export default {
  components: {
    ErrorMessage,
  },
  data() {
    return { isInputFieldEmpty: false };
  },
  methods: {
    SetGoal() {
      const inputText = this.$refs.goal.value;
      if (inputText === "") {
        this.isInputFieldEmpty = true;
      }
    },
    removeMsg() {
      this.isInputFieldEmpty = false;
    },
  },
};
</script>
