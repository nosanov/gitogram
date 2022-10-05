<template>
  <component :is="name" />
</template>

<script>
import * as Icons from "@/icons/variants";

export default {
  name: "Icon",
  components: {...Icons},
  props: {
    name: {
      type: String,
      required: true,
      validator(value) {
        return Object.keys(Icons).includes(value);
      }
    }
  }
}
</script>