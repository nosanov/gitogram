<template>
  <ul class="menu">
    <li
      v-for="item in menuList"
      :key="item.id"
      :class="item.class"
      class="menu__item"
    >
      <a
        :href="item.href"
        class="menu__link"
      >
        <Icon :name="item.id" />
      </a>
    </li>
  </ul>
</template>

<script>
import { Icon } from "@/icons";

export default {
  name: "Menu",
  data() {
    const menuList = [
      {
        id: "Home",
        href: "/",
        class: "menu__item--home",
      },
      {
        id: "Profile",
        href: "/profile",
        class: "menu__item--profile",
      },
      {
        id: "Logout",
        href: "/logout",
        class: "menu__item--logout",
      },
    ];

    return {
      menuList,
    };
  },
  components: {
    Icon,
  },
}
</script>

<style lang="scss" scoped>
  @import "./menu";
</style>
