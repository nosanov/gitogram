<template>
  <div class="feeds">
    <Topline class="feeds__topline feeds-topline">
      <template #headline>
        <Logo />
        <Menu />
      </template>
      <template #content>
        <ul class="feeds__stories">
          <li
            v-for="story in stories"
            :key="story.id"
            class="feeds__story"
          >
            <UserStory
              :avatar="story.avatar"
              :username="story.username"
              @userStoryClick="handleUserStoryClick(story.id)"
            />
          </li>
        </ul>
      </template>
    </Topline>
    <ul class="feeds__posts">
      <li
        v-for="post in posts"
        :key="post.id"
        class="feeds__post container container--md"
      >
        <Post
          :avatar="post.avatar"
          :username="post.username"
        >
          <template #topic>
            <div class="feeds__topic feeds-topic">
              <h2 class="feeds-topic__title">
                {{ post.title }}
              </h2>
              <p
                v-html="post.description"
                class="feeds-topic__description"
              ></p>
              <TopicInfo
                :starCount="post.star"
                :forkCount="post.fork"
                class="feeds-topic__info"
              />
            </div>
          </template>
        </Post>
        <Toggler
          v-if="post.issues.length"
          @onToggle="toggleIssues"
          class="feeds__toggler"
        />
        <ul
          v-if="post.issues.length && isIssuesShown"
          class="feeds__comments"
        >
          <li
            v-for="comment in post.issues"
            :key="comment.id"
            class="feed__comment"
          >
            <Comment
              :author="comment.author"
              :message="comment.message"
            />
          </li>
        </ul>
        <span class="feeds__date">
          {{ post.date }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { Topline } from "@/components/topline";
import { UserStory } from "@/components/userStory";
import { Logo } from "@/components/logo";
import { Menu } from "@/components/menu";
import { Post } from "@/components/post";
import { TopicInfo } from "@/components/topicInfo";
import { Toggler } from "@/components/toggler";
import { Comment } from "@/components/comment";
import stories from "./stories.json";
import posts from "./posts.json"

export default {
  name: "Feeds",
  data() {
    return {
      stories,
      posts,
      isIssuesShown: false,
    };
  },
  components: {
    Topline,
    UserStory,
    Logo,
    Menu,
    Post,
    TopicInfo,
    Toggler,
    Comment,
  },
  methods: {
    handleUserStoryClick(id) {
      console.log(id);
    },
    toggleIssues(isOpened) {
      this.isIssuesShown = isOpened;
    },
  },
}
</script>

<style scoped lang="scss">
  @import "./feeds";
</style>
