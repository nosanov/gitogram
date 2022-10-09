import FeedsStories from "./FeedsStories.vue";

export default {
  title: 'FeedsStories',
  component: { FeedsStories },
  argTypes: {
    stories: {
      control: {
        type: 'array'
      }
    },
  }
}

const defaultTemplate = (args) => ({
  components: {
    FeedsStories
  },
  data() {
    return {
      args,
    };
  },
  template: `
    <FeedsStories v-bind="args" />
  `
});

export const defaultView = defaultTemplate.bind({});

defaultView.args = {
  stories: [
    {
    "id": 0,
    "avatar": "https://picsum.photos/200/300",
    "username": "Alex"
    },
    {
      "id": 1,
      "avatar": "https://picsum.photos/200/400",
      "username": "Mike"
    },
    {
      "id": 2,
      "avatar": "https://picsum.photos/200/500",
      "username": "Bob"
    }]
};

defaultView.story = {
  name: 'Стандартный вид'
};
