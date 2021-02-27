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
      this.goalInput = '';
    },
    removeGoal(index){
      this.goals.splice(index, 1)
    },
    removeAll(index){
      this.goals.splice(index);
    }
  },
});

app.mount("#user-goals");
