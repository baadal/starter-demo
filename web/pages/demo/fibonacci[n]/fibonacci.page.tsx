import React from 'react';

import { H3, Link } from 'starter/ui';
import { PropsRoot } from 'model/common.model';
import { FibonacciNumData } from 'model/pagedata.model';

import common from 'assets/css/common.module.scss';

class Fibonacci extends React.Component<FibonacciProps, FibonacciState> {
  render() {
    const { pageData, match } = this.props;
    const title = pageData?.title || '';
    const num = match.params.n || '';
    const fibonacciNum = (num === pageData?.n ? pageData?.fn : '') || '';

    const n = parseInt(num, 10);
    const nPrev = n - 1;
    const nNext = n + 1;
    const npVisible = nPrev >= 0 ? 'visible' : 'hidden';
    const nnVisible = nNext <= 20 ? 'visible' : 'hidden';

    return (
      <div>
        <H3 className={common.pageTitle}>{title}</H3>
        <span>Input Number: {num}</span>
        <br />
        <span>
          Fibonacci Number (F<sub>{num}</sub>): {fibonacciNum}
        </span>
        <div style={{ height: '4px' }}>&nbsp;</div>
        <div>
          <span style={{ visibility: npVisible }}>
            <span>&laquo;&nbsp;</span>
            <Link to={`./${nPrev}`}>Prev</Link>
          </span>
          <span style={{ display: 'inline-block', width: '25px' }}>&nbsp;</span>
          <span style={{ visibility: nnVisible }}>
            <Link to={`./${nNext}`}>Next</Link>
            <span>&nbsp;&raquo;</span>
          </span>
        </div>
      </div>
    );
  }
}

export interface FibonacciProps extends PropsRoot {
  pageData: FibonacciNumData | null;
}

export interface FibonacciState {}

export default Fibonacci;
