<template>
  <div class="app-loader">
    <div class="cube">
      <div class="face front"></div>
      <div class="face back"></div>
      <div class="face right"></div>
      <div class="face left"></div>
      <div class="face top"></div>
      <div class="face bottom"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppLoader'
})
</script>

<style scoped>
.app-loader {
  width: 100px;
  height: 100px;
  perspective: 1000px;
  margin: 20% auto 0;
}

.cube {
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  position: relative;
  animation: spin 2.5s infinite linear;
}
.face {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: repeating-linear-gradient(0deg, rgba(70,70,70, 0.2) 0px, rgba(70,70,70, 0.2) 1px,transparent 1px, transparent 21px),repeating-linear-gradient(90deg, rgba(70,70,70, 0.2) 0px, rgba(70,70,70, 0.2) 1px,transparent 1px, transparent 21px),linear-gradient(90deg, rgb(252, 212, 53),rgb(252, 212, 53));
}

.top {
  transform: rotateX(90deg) translateZ(50px);
}
.bottom {
  transform: rotateX(-90deg) translateZ(50px);
}

.right {
  transform: rotateY(90deg) translateZ(50px);
}
.left {
  transform: rotateY(-90deg) translateZ(50px);
}

.front {
  transform: rotateX(0deg) translateZ(50px);
}
.back {
  transform: rotateX(-180deg) translateZ(50px);
}

@keyframes spin {
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
</style>
