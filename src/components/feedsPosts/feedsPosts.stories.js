import FeedsPosts from "./FeedsPosts.vue";

export default {
  title: 'FeedsPosts',
  component: { FeedsPosts },
  argTypes: {
    posts: {
      control: {
        type: 'array'
      }
    },
  }
}

const defaultTemplate = (args) => ({
  components: {
    FeedsPosts
  },
  data() {
    return {
      args,
    };
  },
  template: `
    <FeedsPosts v-bind="args" />
  `
});

export const defaultView = defaultTemplate.bind({});

defaultView.args = {
  posts: [
    {
      "id": "0",
      "username": "joshua_l",
      "avatar": "https://picsum.photos/200/300",
      "title": "Vue.js",
      "description": "<b>JavaScript</b> framework for building interactive web applications ⚡",
      "star": "156k",
      "fork": "4",
      "issues": [
        {
          "id": "0",
          "author": "joshua_l",
          "message": "Enable performance measuring in production, at the user's request"
        },
        {
          "id": "1",
          "author": "Camille",
          "message": "It's Impossible to Rename an Inherited Slot"
        },
        {
          "id": "2",
          "author": "Marselle",
          "message": "transition-group with flex parent causes removed items to fly"
        }
      ],
      "date": "15 may"
    },
    {
      "id": "1",
      "username": "Camille",
      "avatar": "https://picsum.photos/200/400",
      "title": "React.js",
      "description": "<b>Open source</b> JavaScript library used for designing user interfaces",
      "star": "156k",
      "fork": "4",
      "issues": [],
      "date": "15 may"
    }
  ],
};

defaultView.story = {
  name: 'Стандартный вид'
};
