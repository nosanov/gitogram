<template>
  <button
    @click="toggle"
    :class="['toggler', { active: isOpened }]"
  >
    <span class="toggler__caption">
      {{ isOpened ? "Hide" : "View" }} issues
    </span>
    <div class="toggler__icon">
      <Icon name="Triangle" />
    </div>
  </button>
</template>

<script>
import { Icon } from "@/icons";

export default {
  name: "Toggler",
  data() {
    return {
      isOpened: false,
    };
  },
  components: {
    Icon,
  },
  methods: {
    toggle() {
      this.isOpened = !this.isOpened;
      this.$emit('onToggle', this.isOpened);
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "./toggler";
</style>