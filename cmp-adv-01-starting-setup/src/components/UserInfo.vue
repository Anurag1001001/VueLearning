<template>
  <section>
    <base-card>
      <template v-slot:header>
        <!-- we're passing this markup to baseCard component(child component) but that doesn't mean we're passing props and styles and everything to BaseCard, Vue analyze and evaluate the markup here itself and then it pass to baseCard(here Child) component and this is how Vuejs works(same concept of react) -->
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <template v-slot:default>
        <p>{{ infoText }}</p>
      </template>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ["fullName", "infoText", "role"],
};
</script>
