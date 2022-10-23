<template>
  <div class="stories-slider">
    <!-- <pre>{{trendings}}</pre> -->
    <ul
      class="stories-slider__list"
      ref="slider"
    >
      <li
        v-for="(trending, index) in trendings"
        :key="trending.id"
        ref="item"
        class="stories-slider__item"
      >
        <Slide
          :data="getStoryData(trending)"
          :isActive="slideIndex === index"
          :isLoading="slideIndex === index && isLoading"
          :buttonsShown="activeButtons"
          @onPrevSlide="handleSlide(index - 1)"
          @onNextSlide="handleSlide(index + 1)"
          @onProgressFinish="handleSlide(index + 1)"
          class="stories-slider__slide"
        >
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
import { SlideButton } from '@/components/slide/components/slideButton';

import { mapState, mapActions } from 'vuex';

export default {
  name: 'StoriesSlider',
  components: {
    Slide,
    SlideButton,
  },
  data() {
    return {
      slideIndex: 0,
      sliderPosition: 0,
      isLoading: false,
      isNavButtonsVisible: true,
    };
  },
  props: {
    slide: {
      type: Number,
    },
  },
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.data,
    }),
    activeButtons() {
      if (!this.isNavButtonsVisible) return [];
      if (this.slideIndex === 0) return ['next'];
      if (this.slideIndex === this.trendings.length - 1) return ['prev'];
      return ['prev', 'next'];
    }
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      fetchReadme: 'trendings/fetchReadme'
    }),
    async fetchReadmeForActiveSlide() {
      const {id, owner, name} = this.trendings[this.slideIndex];

      await this.fetchReadme({id, owner: owner.login, repo: name});
    },
    getStoryData(obj) {
      return {
        id: obj.id,
        avatar: obj.owner?.avatar_url,
        username: obj.owner?.login,
        content: obj.readme,
      };
    },
    moveSlider(index) {
      const { slider, item } = this.$refs;
      const slideWidth = parseInt(getComputedStyle(item[index]).getPropertyValue('width'), 10);

      this.slideIndex = index;
      this.sliderPosition = -(slideWidth * index);
      slider.style.transform = `translateX(${this.sliderPosition}px)`;
    },
    async loadReadme() {
      this.isLoading = true;
      this.isNavButtonsVisible = false;
      try {
        await this.fetchReadmeForActiveSlide();
      } catch(err) {
        console.log(err);
        throw err;
      } finally {
        this.isLoading = false;
        this.isNavButtonsVisible = true;
      }
    },
    async handleSlide(index) {
      this.moveSlider(index);
      await this.loadReadme();
    },
  },
  async mounted() {
    await this.fetchTrendings();
    await this.loadReadme();

    if (this.slide && this.trendings.length) {
      const index = this.trendings.findIndex((item) => item.id === this.slide);

      await this.handleSlide(index);
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "./stories-slider";
</style>