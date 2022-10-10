<template>
  <ul class="feeds-posts">
    <li
      v-for="post in posts"
      :key="post.id"
      class="feeds-posts__post container container--md"
    >
      <Post
        :avatar="post.owner.avatar_url"
        :username="post.owner.login"
      >
        <template #topic>
          <div class="feeds-posts__topic feeds-posts-topic">
            <h2 class="feeds-posts-topic__title">
              {{ post.name }}
            </h2>
            <p
              v-html="post.description"
              class="feeds-posts-topic__description"
            ></p>
            <TopicInfo
              :starCount="post.stargazers_count"
              :forkCount="post.forks_count"
              class="feeds-posts-topic__info"
            />
          </div>
        </template>
      </Post>
      <Toggler
        v-if="post.open_issues_count.length"
        @onToggle="toggleIssues"
        class="feeds-posts__toggler"
      />
      <ul
        v-if="post.open_issues_count.length && isIssuesShown"
        class="feeds-posts__comments"
      >
        <li
          v-for="comment in post.issue_comment_url"
          :key="comment.id"
          class="feeds-posts__comment"
        >
          <Comment
            :author="comment.user.login"
            :message="comment.created_at"
          />
        </li>
      </ul>
      <span class="feeds-posts__date">
        {{ post.created_at }}
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
