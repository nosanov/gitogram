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
          :stories="trendings"
          class="feeds__stories"
        />
      </template>
    </Topline>
    <FeedsPosts
      :posts="trendings"
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
import * as api from "@/api";

export default {
  name: "Feeds",
  data() {
    return {
      stories,
      posts,
      trendings: [],
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
  async created() {
    try {
      const {data} = await api.trendings.getTrendings();
      this.trendings = data.items;
    } catch(error) {
      console.error(error);
    }
  }
}
</script>

<style scoped lang="scss">
  @import "./feeds";
</style>
