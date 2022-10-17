<template>
  <div class="stories">
    <Topline
      :isBasic="true"
      class="stories__topline stories-topline"
    >
      <template #headline>
        <button
          @click="$router.push('/')"
        >
          <Logo class="stories-topline__logo" />
        </button>
        <button
          @click="$router.push('/')"
          class="stories-topline__close"
        >
          <Icon name="Close" />
        </button>
      </template>
    </Topline>
    <div class="stories__content">
      <StoriesSlider
        :slide="Number($route.params.slide)"
        class="stories__slider"
      />
    </div>
  </div>
</template>

<script>
import { Topline } from "@/components/topline";
import { Logo } from "@/components/logo";
import { StoriesSlider } from "@/components/storiesSlider";

import { Icon } from "@/icons";

export default {
  name: "Stories",
  components: {
    Topline,
    Logo,
    StoriesSlider,
    Icon,
  },
}
</script>

<style scoped lang="scss">
  @import "./stories";
</style>
