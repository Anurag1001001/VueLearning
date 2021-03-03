<template>
  <section>
    <header>
      <h1>
        My friend List
      </h1>
    </header>
    <ul>
      <friend-contact
        name="anurag"
        Phone-number="7889546123"
        email-Address="anurag@localhost.com"
        is-Favourite="1"
      ></friend-contact>
      <friend-contact
        name="Tripathi"
        Phone-number="897465321"
        email-Address="tripathi@localhost.com"
        is-Favourite="0"
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
          id: "anurag",
          name: "Anurag",
          phone: "7899874562",
          email: "anurag@localhost.com",
        },
        {
          id: "anurag",
          name: "Anurag",
          phone: "7899874562",
          email: "anurag@localhost.com",
        },
      ],
    };
  },
};
</script>
