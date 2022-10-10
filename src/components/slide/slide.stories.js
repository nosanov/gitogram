import Slide from "./Slide.vue";

export default {
  title: 'Slide',
  component: { Slide },
  argTypes: {
    title: {
      control: {
        type: 'text'
      }
    },
    content: {
      control: {
        type: 'text'
      }
    },
    footer: {
      control: {
        type: 'text'
      }
    },
  }
}

const defaultTemplate = (args) => ({
  components: {
    Slide
  },
  data() {
    return {
      args,
    };
  },
  template: `
    <Slide>
      <template #title>
        {{ args.title }}
      </template>
      <template #content>
        {{ args.content }}
      </template>
      <template #footer>
        {{ args.footer }}
      </template>
    </Slide>
  `
});

export const defaultView = defaultTemplate.bind({});

defaultView.args = {
  title: 'Title content here',
  content: 'Main content here',
  footer: 'Footer content here',
};

defaultView.story = {
  name: 'Стандартный вид'
};
