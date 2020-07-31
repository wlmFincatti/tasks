<template>
  <div>
    <h1 v-textCustom.tempo="'center'">{{'SKSAT'| textInverted}}</h1>
    <Message
      :styleCustom="compMessage.customStyle"
      :message="compMessage.text"
      v-show="compMessage.show"
    />
    <ProgressBar v-if="tasks.length" :perc="taskPerc" />
    <Message v-else :styleCustom="compMessageDone.customStyle" :message="compMessageDone.text" />
    <NewTask @addedTask="addTask" />
    <div id="tasksApp">
      <Tasks
        @taskRemoved="removeTask"
        @changedStatus="statusTask"
        v-for="task in tasks"
        :key="task.name"
        :task="task"
      />
    </div>
  </div>
</template>

<script>
import Tasks from "./components/Tasks.vue";
import NewTask from "./components/NewTask.vue";
import Message from "./components/Message.vue";
import ProgressBar from "./components/ProgressBar.vue";

export default {
  filters: {
    textInverted(text) {
      return text.split("").reverse().join("");
    },
  },
  components: {
    NewTask,
    Tasks,
    Message,
    ProgressBar,
  },
  methods: {
    addTask(task) {
      console.log(task);
      const valid = (t) => t.name === task.name;
      if (!this.tasks.filter(valid).length)
        this.tasks.push({ name: task.name, date: task.date, pending: false });
      else {
        this.compMessage.show = true;
        setTimeout(() => {
          this.compMessage.show = false;
        }, 1500);
      }
    },
    removeTask(taskName) {
      const valid = (t) => t.name === taskName;
      const index = this.tasks.findIndex(valid);
      this.tasks.splice(index, 1);
    },
    statusTask(task) {
      const valid = (t) => t.name === task.name;
      const index = this.tasks.findIndex(valid);
      this.tasks[index].pending = !task.pending;
    },
  },
  beforeUpdate() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  },
  mounted() {
    console.table(JSON.parse(localStorage.getItem("tasks")));
    this.tasks = JSON.parse(localStorage.getItem("tasks"));
  },
  watch: {
    tasks: {
      deep: true,
      handler() {
        let total = this.tasks.length;
        if (total) {
          let amountTasks = this.tasks.filter((t) => t.pending === true).length;
          this.taskPerc = Math.round((amountTasks / total) * 100) + "%";
        } else this.taskPerc = "0%";
      },
    },
  },
  data() {
    return {
      compMessage: {
        show: false,
        text: "Task já cadastrada",
        customStyle: { backgroundColor: "red", color: "white" },
      },
      compMessageDone: {
        text: "Não há mais tasks :)",
        customStyle: { backgroundColor: "green", color: "white" },
      },
      taskPerc: "0%",
      tasks: [],
    };
  },
};
</script>

<style>
body {
  background: linear-gradient(to right, rgb(136, 208, 226), rgb(86, 94, 163));
}
#tasksApp {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>