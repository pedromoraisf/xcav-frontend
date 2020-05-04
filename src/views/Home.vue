<template>
  <div class="base-dash d-flex">
    <left-side />
    <right-side />
  </div>
</template>

<script>
import LeftSide from "@/components/home/LeftSide"
import RightSide from "@/components/home/RightSide"

export default {
  components: {
    LeftSide, 
    RightSide
  }
}
</script>