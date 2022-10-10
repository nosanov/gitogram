import SlideButton from "./SlideButton.vue";

export default {
  title: 'SlideButton',
  component: { SlideButton },
  argTypes: {
    onFollowButtonClick: {
      action: 'onFollowButtonClick',
      description: 'Click on follow button'
    },
    text: {
      control: {
        type: 'text'
      }
    },
  }
}

const defaultTemplate = (args) => ({
  components: {
    SlideButton
  },
  data() {
    return {
      args,
    };
  },
  template: `
    <SlideButton
      @onFollowButtonClick="args.onFollowButtonClick"
      v-bind="args"
    >
      {{ args.text }}
    </SlideButton>
  `
});

export const defaultView = defaultTemplate.bind({});

defaultView.args = {
  text: "Follow",
};

defaultView.story = {
  name: 'Стандартный вид'
};
