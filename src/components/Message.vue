<template>
  <div :style="styleCustom">{{message}}</div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    },
    styleCustom: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 40px;
}
</style>