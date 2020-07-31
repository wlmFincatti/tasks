<template>
  <div class="progress">
    <div :style="{width: perc}">{{perc}}</div>
  </div>
</template>

<script>
export default {
  props: ["perc"]
};
</script>

<style>
.progress {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 20px;
  position: relative;
  border: 1px solid white;
  background: slategrey;
  color: white;
  font-size: 14px;
  margin: 40px 0px;
}
.progress div {
  position: absolute;
  background-color: red;
  height: 100%;
}
</style>