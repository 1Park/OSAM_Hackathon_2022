<template>
  <div class="py-4 container-fluid">
    <div class=" row">
      <div class="col-12">
        <authors-table />
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-12">

      </div>
    </div>
  </div>
</template>

<script>
import AuthorsTable from "./components/AuthorsTable.vue";

export default {
  name: "tables",
  components: {
    AuthorsTable,

  },
  data() {
    return {

    };
  },
};
</script>
