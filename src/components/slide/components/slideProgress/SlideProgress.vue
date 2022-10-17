<template>
  <div :class="['slide-progress', {'slide-progress--active': shouldRunAnimation}]">
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
    this.$nextTick(() => {
      setTimeout(() => {
        this.isActive ? this.shouldRunAnimation = true : this.shouldRunAnimation = false;
      }, 500);
    });

    this.$refs.progress.addEventListener('transitionend', this.emitOnFinish);
    console.log(this.$refs.progress);
  },
  beforeUnmount() {
    this.$refs.progress.removeEventListener('transitionend', this.emitOnFinish);
  }
}
</script>

<style lang="scss" scoped>
  @import "./slide-progress";
</style>
