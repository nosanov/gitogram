import SlideHeader from "./SlideHeader.vue";

export default {
  title: 'SlideHeader',
  component: { SlideHeader },
  argTypes: {
    avatar: {
      control: {
        type: 'text'
      }
    },
    topicTitle: {
      control: {
        type: 'text'
      }
    },
  }
}

const defaultTemplate = (args) => ({
  components: {
    SlideHeader
  },
  data() {
    return {
      args,
    };
  },
  template: `
    <SlideHeader v-bind="args" />
  `
});

export const defaultView = defaultTemplate.bind({});

defaultView.args = {
  avatar: "https://picsum.photos/200/300",
  topicTitle: "Vue",
};

defaultView.story = {
  name: 'Стандартный вид'
};
