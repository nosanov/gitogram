<template>
  <button
    @click="$emit('userStoryClick')"
    :class="['user-story', {'user-story--viewed' : isStoryViewed}]"
  >
    <div class="user-story__avatar">
      <img
        :src="avatar"
        :alt="username + '`s avatar'"
        class="user-story__img"
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
    isStoryViewed: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "./user-story";
</style>
