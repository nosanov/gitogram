import Post from "./Post.vue";

export default {
  title: 'Post',
  component: { Post },
  argTypes: {
    content: {
      control: {
        type: 'text'
      }
    },
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
  }
}

const defaultTemplate = (args) => ({
  components: {
    Post
  },
  data() {
    return {
      args,
    };
  },
  template: `
    <Post v-bind="args">
      <template #topic>
        {{ args.content }}
      </template>
    </Post>
  `
});

export const defaultView = defaultTemplate.bind({});

defaultView.args = {
  content: "Here's some content",
  avatar: "https://picsum.photos/200/300",
  username: "Alex",
};

defaultView.story = {
  name: 'Старндартный вид'
};
