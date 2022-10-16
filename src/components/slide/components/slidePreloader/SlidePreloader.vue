<template>
  <div class="slide-preloader">
    <div class="slide-preloader__image"></div>
    <div
      v-for="n in paragraphsCount"
      :key="`slide-preloader__group-${n}`"
      class="slide-preloader__group"
    >
      <div class="slide-preloader__line slide-preloader__line--md"></div>
      <div class="slide-preloader__line slide-preloader__line--xl"></div>
      <div class="slide-preloader__line slide-preloader__line--sm"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlidePreloader',
  props: {
    paragraphsCount: {
      type: Number,
      default: 2,
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "./slide-preloader";
</style>
