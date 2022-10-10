import TopicInfo from "./TopicInfo.vue";

export default {
  title: 'TopicInfo',
  component: { TopicInfo },
  argTypes: {
    starClick: {
      action: 'starClick',
      description: 'Click on Star button'
    },
    forkClick: {
      action: 'forkClick',
      description: 'Click on Fork button'
    },
    starCount: {
      control: {
        type: 'number'
      }
    },
    forkCount: {
      control: {
        type: 'number'
      }
    },
  }
}

const defaultTemplate = (args) => ({
  components: {
    TopicInfo
  },
  data() {
    return {
      args,
    };
  },
  template: `
    <TopicInfo
      @starClick="args.starClick"
      @forkClick="args.forkClick"
      v-bind="args"
    />
  `
});

export const defaultView = defaultTemplate.bind({});

defaultView.args = {
  starCount: 100,
  forkCount: 50,
};

defaultView.story = {
  name: 'Стандартный вид'
};
