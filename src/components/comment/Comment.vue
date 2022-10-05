<template>
  <p class="comment">
    <span class="comment__author">
      {{ author }}
    </span>
    {{ message }}
  </p>
</template>

<script>
export default {
  name: "Comment",
  props: {
    author: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "./comment.scss";
</style>