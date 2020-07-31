<template>
  <div id="newTask">
    <input type="date" id="teste" v-model="newTask.date" />
    <input type="text" v-model="newTask.name" @keydown.enter="addNewTask" />
    <button @click="addNewTask">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: {
        name: "",
        date: "",
      },
    };
  },
  methods: {
    addNewTask() {
      this.$emit("addedTask", this.newTask);
    },
  },
};
</script>

<style>
#newTask {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 20px;
}

#newTask button {
  border: none;
  background-color: rgb(43, 196, 124);
  color: white;
  height: 30px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  word-break: break-all;
  font-size: 20px;
}

#newTask input {
  border: none;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  background-color: rgb(195, 196, 207);
  height: 28px;
  padding-left: 10px;
}

input[type="date"] {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  margin-right: 10px;
}
</style>