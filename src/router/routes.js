import { Feeds } from '@/pages/feeds';
import { Stories } from '@/pages/stories';

export default [
  {
    path: '/',
    component: Feeds,
    name: 'home',
  },
  {
    path: '/stories',
    component: Stories,
    name: 'stories',
  }
];
