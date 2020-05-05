<template>
  <div class="w-100 text-center">
    <b-spinner v-if="type.length" :type="type" :style="styleReceive" label="Spinning" />
    <b-spinner v-else-if="!type.length" :style="styleReceive" label="Spinning" />
  </div>
</template>

<script>
export default {
  props: {
    styleReceive: {
      type: String,
      default: "width: 3rem; height: 3rem;"
    },
    type: {
      type: String,
      default: ""
    }
  }
};
</script>