const app = Vue.createApp({
  data() {
    return {
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    raiseAlert() {
      console.log("TEST");
      alert("Error!");
    },
    setName(event) {
      this.name = event.target.value;
    },
    setConfirmedName() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#assignment");
