<template>
  <div class="slide-header">
    <img
      :src="avatar"
      :alt="avatar + '`s image'"
      class="slide-header__img"
    />
    <span class="slide-header__name">
      {{ name }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'SlideHeader',
  props: {
    avatar: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "./slide-header";
</style>
