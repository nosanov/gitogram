<template>
  <div class="post">
    <div class="post__author post-author">
      <img
        :src="avatar"
        class="post-author__avatar"
        alt="Author preview"
      >
      <p class="post-author__nickname">
        {{ username }}
      </p>
    </div>
    <div class="post__topic">
      <slot name="topic" />
    </div>
    <div
      v-if="$slots.issues"
      class="post__issues"
    >
      <slot name="issues" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    username: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "./post.scss";
</style>
