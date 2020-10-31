import { StateStoreDemoData } from 'model/pagedata.model';

export const getPageData = (): StateStoreDemoData => ({
  title: '<i>Demo:</i> State Store',
  timestamp: new Date().toISOString(),
  seo: {
    title: 'Demo: State Store',
    description: 'A demonstration for using state store',
  },
});
