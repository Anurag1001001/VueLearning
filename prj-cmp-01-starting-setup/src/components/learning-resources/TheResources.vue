<template>
  <Base-Card>
    <Base-Button
      @click="setSelectedTab('StoredResources')"
      :mode="storedResButtonMode"
      >Stored Resources
    </Base-Button>
    <Base-Button
      @click="setSelectedTab('AddResources')"
      :mode="addResButtonMode"
      >ADD Resources
    </Base-Button>
  </Base-Card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources';
import AddResources from './AddResources';

export default {
  components: {
    StoredResources,
    AddResources
  },
  provide() {
    return {
      resources: this.storedResources,
      addResources: this.addResources
    };
  },
  data() {
    return {
      selectedTab: 'StoredResources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org'
        },
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org'
        }
      ]
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'StoredResources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'AddResources' ? null : 'flat';
    }
  },
  methods: {
    setSelectedTab(val) {
      this.selectedTab = val;
    },
    addResources(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title,
        description,
        link: url
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'StoredResources';
    }
  }
};
</script>
