import UserStory from "./UserStory.vue";
import "./user-story.scss";

export default {
  title: 'UserStory',
  component: { UserStory },
  argTypes: {
    avatar: {
      control: {
        type: 'text'
      }
    },
    username: {
      control: {
        type: 'text'
      }
    },
    isStoryViewed: {
      control: {
        type: 'boolean'
      }
    }
  }
}

const defaultTemplate = (args) => ({
  components: {
    UserStory
  },
  data() {
    return {
      args,
    };
  },
  template: `
    <UserStory
      v-bind="args"
      class="user-story"
    />
  `
});

export const defaultView = defaultTemplate.bind({});

defaultView.args = {
  avatar: "https://picsum.photos/200/300",
  username: "Alex",
  isStoryViewed: false
};

defaultView.story = {
  name: 'Вид с непросмотренной историей (default)'
};

const viewedTemplate = (args) => ({
  components: {
    UserStory
  },
  data() {
    return {
      args,
    };
  },
  template: `
    <UserStory
      v-bind="args"
      class="user-story"
    />
  `
});

export const viewedStoryView = viewedTemplate.bind({});

viewedStoryView.args = {
  avatar: "https://picsum.photos/200/300",
  username: "Alex",
  isStoryViewed: true
};

viewedStoryView.story = {
  name: 'Вид с уже просмотренной историей'
};
