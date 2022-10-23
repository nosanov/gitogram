<template>
  <div :class="['slide-progress', {'slide-progress--active': isActive}]">
    <div ref="progress" class="slide-progress__inner"></div>
  </div>
</template>

<script>
export default {
  name: 'SlideProgress',
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      shouldRunAnimation: false,
    };
  },
  methods: {
    emitOnFinish() {
      this.$emit('onFinish');
    },
  },
  mounted() {
    // this.$nextTick(() => {
      this.isActive ? this.shouldRunAnimation = true : this.shouldRunAnimation = false;
    // });

    this.$refs.progress.addEventListener('transitionend', this.emitOnFinish);
  },
  beforeUnmount() {
    this.$refs.progress.removeEventListener('transitionend', this.emitOnFinish);
  }
}
</script>

<style lang="scss" scoped>
  @import "./slide-progress";
</style>
