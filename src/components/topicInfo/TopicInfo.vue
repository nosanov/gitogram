<template>
  <div class="topic-info">
    <div class="topic-info__section topic-info-section">
      <button
        @click="$emit('starClick')"
        class="topic-info-section__button topic-info-section-button topic-info-section-button--star"
      >
        <div class="topic-info-section-button__icon">
          <Icon name="Star" />
        </div>
        <span class="topic-info-section-button__caption">
          Star
        </span>
      </button>
      <div class="topic-info-section__value topic-info-section__value--star">
        {{ starCount }}
      </div>
    </div>
    <div class="topic-info__section topic-info-section">
      <button
        @click="$emit('forkClick')"
        class="topic-info-section__button topic-info-section-button topic-info-section-button--fork"
      >
        <div class="topic-info-section-button__icon">
          <Icon name="Fork" />
        </div>
        <span class="topic-info-section-button__caption">
          Fork
        </span>
      </button>
      <div class="topic-info-section__value topic-info-section__value--fork">
        {{ forkCount }}
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@/icons";

export default {
  name: "TopicInfo",
  components: {
    Icon,
  },
  props: {
    starCount: {
      type: Number,
      required: false,
    },
    forkCount: {
      type: Number,
      required: false,
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "./topic-info";
</style>