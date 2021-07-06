import { HomePageData } from 'model/pagedata.model';

export const getPageData = (): HomePageData => ({
  title: 'My Starter App',
  description: 'The modern way!',
  seo: {
    title: 'Starter.js Demo',
    description: 'A modern way of building Web Apps',
    meta: {
      keywords: 'Starter.js, React starter kit, SSR, Starter.js Demo',
    },
  },
});
