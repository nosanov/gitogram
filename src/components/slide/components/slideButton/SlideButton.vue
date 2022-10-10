<template>
  <button
    @click="$emit('onFollowButtonClick')"
    class="slide-button"
  >
    <span class="slide-button__text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'SlideButton',
}
</script>

<style lang="scss" scoped>
  @import "./slide-button";
</style>
