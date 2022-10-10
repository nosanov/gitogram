import SlideProgress from "./SlideProgress.vue";

export default {
  title: 'SlideProgress',
  component: { SlideProgress },
  argTypes: {
    onFinish: {
      action: 'onFinish',
      description: 'Slide progress is finished'
    }
  }
}

const defaultTemplate = (args) => ({
  components: {
    SlideProgress
  },
  data() {
    return {
      args,
    };
  },
  template: `
    <SlideProgress @onFinish="args.onFinish" />
  `
});

export const defaultView = defaultTemplate.bind({});

// defaultView.args = {
  
// };

defaultView.story = {
  name: 'Стандартный вид'
};
