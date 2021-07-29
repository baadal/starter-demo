import fetch from 'node-fetch';

import { ExternalDataResp } from 'model/pagedata.model';

export const getPageData = async (): Promise<ExternalDataResp> => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=25');
  const json = await resp.json();
  return {
    title: 'Demo: External Data',
    album: json,
    seo: {
      title: 'Demo: External Data (album)',
      description: 'A demonstration for external-source data',
    },
  };
};
