import Toggler from "./Toggler.vue";

export default {
  title: 'Toggler',
  component: { Toggler },
  argTypes: {
    onToggle: {
      action: 'onToggle',
      description: 'Show issues on click'
    },
    isOpened: {
      control: {
        type: 'boolean'
      }
    },
  }
}

const defaultTemplate = (args) => ({
  components: {
    Toggler
  },
  data() {
    return {
      args,
    };
  },
  template: `
    <Toggler
      @onToggle="args.onToggle"
      v-bind="args"
    />
  `
});

export const defaultView = defaultTemplate.bind({});

defaultView.args = {
  isOpened: false,
};

defaultView.story = {
  name: 'Стандартный вид'
};
