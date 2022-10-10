<template>
  <div class="slide">
    <div class="slide__header">
      <SlideProgress />
      <!-- <SlideHeader /> -->
      <div class="slide__title">
        <slot name="title"></slot>
      </div>
    </div>
    <div class="slide__content">
      <slot name="content"></slot>
    </div>
    <div class="slide__footer">
      <!-- <SlideButton @onFollowButtonClick="onFollowButtonClick">Follow</SlideButton> -->
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import { SlideHeader } from '@/components/slide/components/slideHeader';
import { SlideProgress } from '@/components/slide/components/slideProgress';
import { SlideButton } from '@/components/slide/components/slideButton';

export default {
  name: 'Slide',
  components: {
    SlideHeader,
    SlideProgress,
    SlideButton,
  },
  methods: {
    onFollowButtonClick() {
      // 
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "./slide";
</style>
