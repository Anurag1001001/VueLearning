<template>
  <div>
    <!-- <the-header></the-header> -->
    <!-- <badge-list></badge-list> -->
    <!-- <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info> -->
    <TheHeader />
    <!-- <BadgeList />
    <userInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    />
    <CourseGoal /> -->
    <button @click="setSelectedComponent('ActiveGoal')">ActiveGoal</button>
    <button @click="setSelectedComponent('manage-goal')">ManageGoal</button>
    <!-- <ActiveGoal v-if="selectedComponent === 'active-goal'" />
    <ManageGoal v-if="selectedComponent === 'manage-goal'" /> -->

    <component :is="selectedComponent"></component>
  </div>
</template>

<script>
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
import TheHeader from "./components/TheHeader.vue";
// import CourseGoal from "./components/CourseGoal.vue";
import ActiveGoal from "./components/ActiveGoal.vue";
import ManageGoal from "./components/ManageGoal.vue";
export default {
  components: {
    TheHeader,
    ActiveGoal,
    ManageGoal,
    // UserInfo,
    // BadgeList,
    // CourseGoal,
  },
  data() {
    return {
      selectedComponent: "active-goal",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
