<template>
  <button
    @click="$emit('userStoryClick')"
    class="user-story"
  >
    <div class="user-story__avatar">
      <img
        :src="avatar"
        class="user-story__img"
        alt="username avatar"
      >
    </div>
    <div class="user-story__username">
      {{ username }}
    </div>
  </button>
</template>

<script>
export default {
  name: "UserStory",
  props: {
    avatar: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "./user-story";
</style>
