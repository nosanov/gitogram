<template>
  <div class="feeds">
    <Topline class="feeds__topline feeds-topline">
      <template #headline>
        <Logo class="feeds-topline__logo" />
        <Menu />
      </template>
      <template #content>
        <FeedsStories
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

import { mapState, mapActions } from 'vuex';

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
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.data
    }),
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
    }),
  },
  async created() {
    await this.fetchTrendings();
  }
}
</script>

<style scoped lang="scss">
  @import "./feeds";
</style>
