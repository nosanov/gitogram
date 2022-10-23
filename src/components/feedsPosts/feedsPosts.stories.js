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
      "owner": {
        "login": "joshua_l",
        "avatar_url": "https://picsum.photos/200/300"
      },
      "avatar": "https://picsum.photos/200/300",
      "name": "Vue.js",
      "description": "<b>JavaScript</b> framework for building interactive web applications ⚡",
      "stargazers_count": "156",
      "forks_count": "4",
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
      "open_issues_count": "2",
      "created_at": "15 may"
    },
    {
      "id": "1",
      "owner": {
        "login": "Camille",
        "avatar_url": "https://picsum.photos/200/400"
      },
      "username": "Camille",
      "avatar": "https://picsum.photos/200/400",
      "name": "React.js",
      "description": "<b>Open source</b> JavaScript library used for designing user interfaces",
      "stargazers_count": "156",
      "forks_count": "4",
      "open_issues_count": "",
      "created_at": "15 may"
    }
  ],
};

defaultView.story = {
  name: 'Стандартный вид'
};
