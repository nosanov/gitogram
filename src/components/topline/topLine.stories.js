import Topline from "./Topline.vue";

export default {
  title: 'Topline',
  component: { Topline },
  argTypes: {
    headlineContent: {
      control: {
        type: 'text'
      }
    },
    mainContent: {
      control: {
        type: 'text'
      }
    },
  },
}

const defaultTemplate = (args) => ({
  components: {
    Topline
  },
  data() {
    return {
      args,
    };
  },
  template: `
    <Topline>
      <template #headline>
        {{ args.headlineContent }}
      </template>
      <template #content>
        {{ args.mainContent }}
      </template>
    </Topline>
  `
});

export const defaultView = defaultTemplate.bind({});

defaultView.args = {
  headlineContent: "headline content here",
  mainContent: "main content here",
};

defaultView.story = {
  name: 'Стандартный вид'
};
