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
    "owner": {
      "avatar_url": "https://picsum.photos/200/300",
      "login": "Alex"
    },
    },
    {
      "id": 1,
      "owner": {
        "avatar_url": "https://picsum.photos/200/400",
        "login": "Mike"
      },
    },
    {
      "id": 2,
      "owner": {
        "avatar_url": "https://picsum.photos/200/500",
        "login": "Bob"
      },
    }]
};

defaultView.story = {
  name: 'Стандартный вид'
};
