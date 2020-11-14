import React from 'react';

import { H3 } from 'starter/ui';
import { CssStylesDemoData } from 'model/pagedata.model';

import common from 'assets/css/common.module.scss';
import styles from './css-styles.module.scss';

class CssStylesDemo extends React.Component<CssStylesDemoProps, CssStylesDemoState> {
  render() {
    const { pageData } = this.props;
    const title = pageData?.title || '';

    return (
      <>
        <H3 className={common.pageTitle}>{title}</H3>
        <div className={styles.demo}>
          <div className={styles.gradientDemo}>linear-gradient (Vendor prefixes)</div>
          <br />
          <div className={styles.modernFont}>font-family: system-ui (Modern font)</div>
          <br />
          <div>
            <a href="//g.co">Hover Me!</a>
          </div>
        </div>
      </>
    );
  }
}

export interface CssStylesDemoProps {
  pageData: CssStylesDemoData | null;
}

export interface CssStylesDemoState {}

export default CssStylesDemo;
