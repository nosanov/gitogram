<template>
  <ul class="feeds-posts">
    <li
      v-for="post in posts"
      :key="post.id"
      class="feeds-posts__post container container--md"
    >
      <Post
        :avatar="post.avatar"
        :username="post.username"
      >
        <template #topic>
          <div class="feeds-posts__topic feeds-posts-topic">
            <h2 class="feeds-posts-topic__title">
              {{ post.title }}
            </h2>
            <p
              v-html="post.description"
              class="feeds-posts-topic__description"
            ></p>
            <TopicInfo
              :starCount="post.star"
              :forkCount="post.fork"
              class="feeds-posts-topic__info"
            />
          </div>
        </template>
      </Post>
      <Toggler
        v-if="post.issues.length"
        @onToggle="toggleIssues"
        class="feeds-posts__toggler"
      />
      <ul
        v-if="post.issues.length && isIssuesShown"
        class="feeds-posts__comments"
      >
        <li
          v-for="comment in post.issues"
          :key="comment.id"
          class="feeds-posts__comment"
        >
          <Comment
            :author="comment.author"
            :message="comment.message"
          />
        </li>
      </ul>
      <span class="feeds-posts__date">
        {{ post.date }}
      </span>
    </li>
  </ul>
</template>

<script>
import { Post } from "@/components/post";
import { TopicInfo } from "@/components/topicInfo";
import { Toggler } from "@/components/toggler";
import { Comment } from "@/components/comment";

export default {
  name: "FeedsPosts",
  data() {
    return {
      isIssuesShown: false,
    };
  },
  components: {
    Post,
    TopicInfo,
    Toggler,
    Comment,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    toggleIssues(isOpened) {
      this.isIssuesShown = isOpened;
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "./feeds-posts";
</style>
