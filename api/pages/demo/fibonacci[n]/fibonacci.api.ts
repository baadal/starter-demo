import logger from 'starter/utils/logger';
import { FibonacciNumData } from 'model/pagedata.model';

export const getPageData = (params: any): FibonacciNumData => {
  const { n } = params;
  const num = parseInt(n || '', 10);

  let fibonacciNum = '';
  if (!Number.isNaN(num)) {
    if (num === 0 || num === 1) {
      fibonacciNum = `${num}`;
    } else if (num > 1) {
      let fx = 0;
      let fn = 1;
      for (let i = 2; i <= num; i += 1) {
        const next = fx + fn;
        fx = fn;
        fn = next;
      }
      fibonacciNum = `${fn}`;
    }
  } else if (n.length > 0) {
    logger.error(`Invalid argument [n]: ${n}`);
  }

  return {
    title: 'Demo: Fibonacci Numbers',
    n: `${num}`,
    fn: fibonacciNum,
    seo: {
      title: 'Demo: Fibonacci Numbers',
      description: 'A demonstration for fibonacci numbers',
    },
  };
};
