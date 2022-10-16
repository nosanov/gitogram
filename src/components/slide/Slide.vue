<template>
  <div
    :class="{'slide--active': isActive}"
    class="slide"
  >
    <div class="slide__header">
      <SlideProgress :isActive="isActive" />
      <div class="slide__title">
        <slot name="title"></slot>
      </div>
    </div>
    <div class="slide__content">
      <slot name="content">
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
            class="slide-info__text"
            v-html="data.content"
          ></div>
          <SlidePreloader
            v-else
            :paragraphsCount="2"
          />
        </div>
      </slot>
    </div>
    <div class="slide__footer">
      <slot name="footer"></slot>
    </div>
    <template v-if="isActive">
      <button class="slide__prev slide-prev">
        <Icon
          name="Arrow"
          class="slide-prev__icon"
        />
      </button>
      <button class="slide__next slide-next">
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
import { SlidePreloader } from '@/components/slide/components/slidePreloader';
import { Spinner } from '@/components/spinner';
import { Icon } from "@/icons";

export default {
  name: 'Slide',
  components: {
    SlideProgress,
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
