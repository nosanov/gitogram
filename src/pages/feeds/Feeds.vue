<template>
  <div class="feeds">
    <Topline class="feeds__topline feeds-topline">
      <template #headline>
        <Logo />
        <Menu />
      </template>
      <template #content>
        <FeedsStories
          @userStoryClick="handleUserStoryClick"
          :stories="stories"
          class="feeds__stories"
        />
      </template>
    </Topline>
    <FeedsPosts
      :posts="posts"
      class="feeds__posts"
    />
  </div>
</template>

<script>
import { Topline } from "@/components/topline";
import { FeedsStories } from "@/components/feedsStories";
import { FeedsPosts } from "@/components/feedsPosts";
import { Logo } from "@/components/logo";
import { Menu } from "@/components/menu";
import stories from "./stories.json";
import posts from "./posts.json"

export default {
  name: "Feeds",
  data() {
    return {
      stories,
      posts,
    };
  },
  components: {
    Topline,
    FeedsStories,
    FeedsPosts,
    Logo,
    Menu,
  },
  methods: {
    handleUserStoryClick(id) {
      // eslint-disable-next-line
      console.log(id);
    },
  },
}
</script>

<style scoped lang="scss">
  @import "./feeds";
</style>
