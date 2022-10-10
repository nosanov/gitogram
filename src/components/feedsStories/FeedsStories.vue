<template>
  <ul class="feeds-stories">
    <li
      v-for="story in stories"
      :key="story.id"
      class="feeds-stories__story"
    >
      <UserStory
        :avatar="story.owner.avatar_url"
        :username="story.owner.login"
        @userStoryClick="$emit('userStoryClick', story.id)"
      />
    </li>
  </ul>
</template>

<script>
import { UserStory } from "@/components/userStory";

export default {
  name: "FeedsStories",
  components: {
    UserStory,
  },
  props: {
    stories: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "./feeds-stories";
</style>
