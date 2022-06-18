<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import UnityWebgl from 'unity-webgl';

const canvasRef = ref(null);
let unityComponent = null;

onMounted(() => {
  if (!unityComponent) {
    unityComponent = new UnityWebgl(canvasRef.value, {
      loaderUrl:
        '../game/3.loader.js',
      dataUrl:
        '../game/3.data',
      frameworkUrl:
        '../game/3.framework.js',
      codeUrl:
        '../game/3.wasm',
    });
  }
});
onBeforeUnmount(() => {
  if (unityComponent) {
    unityComponent.destroy();
    unityComponent = null;
  }
});
</script>

<template>
  <div style="width: 800px; height: 600px; border: 1px solid #f00">
    <canvas id="canvas" ref="canvasRef" style="width: 100%; height: 100%" />
  </div>
</template>
