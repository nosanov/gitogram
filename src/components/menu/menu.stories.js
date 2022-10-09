import Menu from "./Menu.vue";

export default {
  title: 'Menu',
  component: { Menu },
}

const defaultTemplate = () => ({
  components: {
    Menu
  },
  template: `
    <Menu />
  `
});

export const defaultView = defaultTemplate.bind({});

defaultView.story = {
  name: 'Стандартный вид'
};
