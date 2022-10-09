import Logo from "./Logo.vue";

export default {
  title: 'Logo',
  component: { Logo },
}

const defaultTemplate = () => ({
  components: {
    Logo
  },
  template: `
    <Logo />
  `
});

export const defaultView = defaultTemplate.bind({});

defaultView.story = {
  name: 'Стандартный вид'
};
