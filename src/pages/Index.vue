<template>
  <div class="q-pa-sm">
    <div class="btn-area q-mb-lg no-print q-gutter-md flex">
      <q-btn
        color="green-9"
        label="StormWind"
        :disable="catalog === 'stormwind'"
        @click="ChangeCatalog('stormwind')"
      />
      <q-btn
        color="blue-9"
        label="Pro Courses"
        :disable="catalog === 'pro'"
        @click="ChangeCatalog('pro')"
      />
      <q-input dense label="Year" v-model="year" style="width: 300px" />
    </div>
    <q-page class="a4 gradient-bg flex flex-center">
      <div class="row text-center">
        <div class="col-12">
          <q-img src="~assets/logo.png" spinner-color="white" width="250px" />
        </div>

        <div class="text-h3 q-my-lg col-12 q-pt-lg">
          <p>{{ heading }} Catalog</p>
          <p>{{ year }}</p>
        </div>
      </div>
    </q-page>
    <q-page class="a4">
      <div class="row text-center">
        <div class="col-12">
          <q-img src="~assets/logo.png" spinner-color="white" width="250px" />
        </div>

        <div class="text-h3 q-my-lg col-12 q-pt-lg">
          <p>{{ heading }} Catalog</p>
          <p>{{ year }}</p>
        </div>
      </div>
    </q-page>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  data() {
    return {
      catalog: "stormwind",
      heading: "StormWind",
      year: "2023",
    };
  },
  methods: {
    ChangeCatalog(c) {
      this.catalog = c;
      switch (c) {
        case "stormwind":
          this.heading = "StormWind";
          break;

        case "pro":
          this.heading = "Pro Courses";
          break;
      }
    },
  },
});
</script>
