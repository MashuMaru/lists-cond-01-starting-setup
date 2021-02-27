const app = Vue.createApp({
  data() {
    return {
      goals: [],
      goalInput: "",
      // person: {
      //   name: 'MashuMaru',
      //   age: 29,
      //   date: "21-06-1991"
      // }
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.goalInput);
      this.goalInput = "";
    },
  },
});

app.mount("#user-goals");
