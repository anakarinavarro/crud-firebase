<template>
  <v-data-table :headers="headers" :items="users" :loading="loading"> </v-data-table>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    headers: [
      { text: "#", value: "id" },
      { text: "Nombre", value: "name" },
      { text: "Apellido", value: "lastName" },
      { text: "Edad", value: "age" },
    ],
  }),
  computed: {
    ...mapState("users", {
      users: (state) => state.list,
      loading: (state) => state.loading,
    }),
  },
};
</script>

<style></style>
