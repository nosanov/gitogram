import Comment from "./Comment.vue";

export default {
  title: 'Comment',
  component: { Comment },
  argTypes: {
    author: {
      control: {
        type: 'text'
      }
    },
    message: {
      control: {
        type: 'text'
      }
    },
  }
}

const defaultTemplate = (args) => ({
  components: {
    Comment
  },
  data() {
    return {
      args,
    };
  },
  template: `
    <Comment
      v-bind="args"
    />
  `
});

export const defaultView = defaultTemplate.bind({});

defaultView.args = {
  author: "Mike",
  message: "Message from Mike"
};

defaultView.story = {
  name: 'Стандартный вид'
};
