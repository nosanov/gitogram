<template>
  <div
    :class="{'slide--active': isActive}"
    class="slide"
  >
    <div class="slide__header">
      <SlideProgress
        @onFinish="$emit('onProgressFinish')"
        :isActive="isActive"
      />
      <SlideHeader
        :avatar="data.avatar"
        :name="data.username"
        class="slide__title"
      />
    </div>
    <div class="slide__content">
      <div
        v-if="isLoading"
        class="slide__spinner"
      >
        <Spinner />
      </div>
      <div
        v-else
        class="slide__info slide-info"
      >
        <div
          v-if="data.content?.length"
          v-html="data.content"
          class="slide-info__text"
        ></div>
        <SlidePreloader
          v-else
          :paragraphsCount="2"
        />
      </div>
    </div>
    <div class="slide__footer">
      <slot name="footer"></slot>
    </div>
    <template v-if="isActive">
      <button
        v-if="buttonsShown.includes('prev')"
        @click="$emit('onPrevSlide')"
        class="slide__prev slide-prev"
      >
        <Icon
          name="Arrow"
          class="slide-prev__icon"
        />
      </button>
      <button
        v-if="buttonsShown.includes('next')"
        @click="$emit('onNextSlide')"
        class="slide__next slide-next"
      >
        <Icon
          name="Arrow"
          class="slide-next__icon"
        />
      </button>
    </template>
  </div>
</template>

<script>
import { SlideProgress } from '@/components/slide/components/slideProgress';
import { SlideHeader } from '@/components/slide/components/slideHeader';
import { SlidePreloader } from '@/components/slide/components/slidePreloader';
import { Spinner } from '@/components/spinner';
import { Icon } from "@/icons";

export default {
  name: 'Slide',
  components: {
    SlideProgress,
    SlideHeader,
    SlidePreloader,
    Spinner,
    Icon,
  },
  props: {
    isActive: Boolean,
    isLoading: {
      type: Boolean,
      default: false,
    },
    buttonsShown: {
      type: Array,
      default: () => ['prev', 'next'],
      validator(value) {
        return value.every((item) => item === 'prev' || item === 'next');
      },
    },
    data: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "./slide";
</style>
