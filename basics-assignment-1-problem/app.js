const app = Vue.createApp({
  data() {
    return {
      name: "Daniel",
      age: 28,
      img: "https://cdn.mos.cms.futurecdn.net/PabJFgLVqABki76HHvPY7P-970-80.jpg.webp",
    };
  },
  methods: {
    outputRand() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
