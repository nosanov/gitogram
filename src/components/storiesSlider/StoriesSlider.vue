<template>
  <div class="stories-slider">
    <pre>{{trendings}}</pre>
    <ul class="stories-slider__list">
      <li
        v-for="trending in trendings"
        :key="trending.id"
        class="stories-slider__item"
      >
        <Slide class="stories-slider__slide">
          <template #title>
            <SlideHeader
              avatar="https://picsum.photos/200/300"
              topicTitle="Vue.js"
            />
          </template>
          <template #content>
          </template>
          <template #footer>
            <SlideButton>
              Follow
            </SlideButton>
          </template>
        </Slide>
      </li>
    </ul>
  </div>
</template>

<script>
import { Slide } from "@/components/slide";
import { SlideHeader } from '@/components/slide/components/slideHeader';
import { SlideButton } from '@/components/slide/components/slideButton';

import { mapState, mapActions } from 'vuex';

export default {
  name: 'StoriesSlider',
  components: {
    Slide,
    SlideHeader,
    SlideButton,
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings
    }),
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings'
    }),
    getStoryData(obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar_url,
        userName: obj.owner?.login,
        content: obj.readme,
      };
    },
  },
  async created() {
    await this.fetchTrendings();
  }
}
</script>

<style lang="scss" scoped>
  @import "./stories-slider";
</style>