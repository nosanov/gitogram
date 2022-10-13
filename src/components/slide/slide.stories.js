import Slide from "./Slide.vue";
import SlideHeader from "./components/slideHeader/SlideHeader.vue";
import SlideButton from "./components/slideButton/SlideButton.vue";

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
    Slide,
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
  name: 'Пустой вид'
};

const fullTemplate = (args) => ({
  components: {
    Slide,
    SlideHeader,
    SlideButton,
  },
  data() {
    return {
      args,
    };
  },
  template: `
    <Slide>
      <template #title>
        <SlideHeader
          :avatar="args.avatar"
          :topicTitle="args.title"
        />
      </template>
      <template #content>
        {{ args.content }}
      </template>
      <template #footer>
        <SlideButton>
          {{ args.footerButton }}
        </SlideButton>
      </template>
    </Slide>
  `
});

export const fullView = fullTemplate.bind({});

fullView.args = {
  avatar: 'https://picsum.photos/200/300',
  title: 'Title content here',
  content: 'The easiest way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.',
  footerButton: 'Follow',
};

fullView.story = {
  name: 'Заполненный вид'
};
