<template>
  <ul class="feeds-stories">
    <li
      v-for="story in stories"
      :key="story.id"
      class="feeds-stories__story"
    >
      <UserStory
        :avatar="story.avatar"
        :username="story.username"
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
