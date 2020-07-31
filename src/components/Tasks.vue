<template>
  <div id="tasks" :class="status" @click="changeStatus(task)">
    <span>{{task.date}}</span>
    <p>{{task.name}}</p>
    <button @click="removeTask(task.name)">x</button>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  methods: {
    removeTask(taskName) {
      this.$emit("taskRemoved", taskName);
    },
    changeStatus(task) {
      this.$emit("changedStatus", task);
    }
  },
  computed: {
    status() {
      return {
        pending: !this.task.pending,
        done: this.task.pending
      };
    }
  }
};
</script>

<style>

div p {
  color: aliceblue;
}
#tasks {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  min-height: 80px, fit-content;
  margin: 5px;
  position: relative;
  opacity: 0.8;
}
p {
  word-break: break-all;
}
#tasks button {
  position: absolute;
  top: 4px;
  right: 4px;
  border-radius: 20px;
  border: 2px solid red;
  background-color: rgb(224, 71, 102);
  color: white;
  cursor: pointer;
}
#tasks:hover {
  opacity: 1;
}

.pending {
  background-color: rgb(231, 104, 104);
  border-left: 10px solid red;
}
.done {
  background-color: rgb(110, 194, 110);
  border-left: 10px solid green;
  text-decoration: line-through;
}

span{
  position: absolute;
  left: 2px;
  top: 2px;
  font-size: 12px;
  color: white;
  padding: 2px;
}
</style>