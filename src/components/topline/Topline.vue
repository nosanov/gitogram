<template>
  <div class="topline">
    <div class="container container--xl">
      <div class="topline__headline">
        <slot name="headline" />
      </div>
      <div
        v-if="$slots.content"
        class="topline__content"
      >
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "./topline.scss";
</style>
