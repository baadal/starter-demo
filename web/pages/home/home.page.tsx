import React from 'react';

import { Link } from 'starter/ui';
import { PropsRoot } from 'model/common.model';
import { HomePageData } from 'model/pagedata.model';

import common from 'assets/css/common.module.scss';
import styles from './home.module.scss';

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    const { pageData } = this.props;
    const title = pageData?.title || '';
    const description = pageData?.description || '';

    return (
      <>
        <div className={styles.heroBanner}>
          <div className={styles.heroText}>{title}</div>
        </div>
        <div className={styles.punchline}>{description}</div>
        <ul className={`${common.ulist} ${styles.ulist}`}>
          <li>
            <Link to="/demo/css-styles">Demo: CSS Styles</Link>
          </li>
          <li>
            <Link to="/demo/css-in-js">Demo: CSS-in-JS (emotion)</Link>
          </li>
          <li>
            <Link to="/demo/state-store">Demo: State Store</Link>
          </li>
          <li>
            <Link to="/demo/fibonacci/10">Demo: Parameterized Routing</Link>
          </li>
          <li>
            <Link to="/demo/esnext">Demo: ES6+ Features &amp; Web APIs</Link>
          </li>
          <li>
            <Link to="/demo/external-data">Demo: External Data</Link>
          </li>
          <li>
            <Link to="/demo/broken-link">Demo: Broken Link</Link>
          </li>
        </ul>
        <div className={common.vspace} />
        <div className={styles.punchline}>Performance</div>
        <ul className={`${common.ulist} ${styles.ulist}`}>
          <li>
            <Link to="https://web.dev/measure/">Lighthouse</Link>
          </li>
          <li>
            <Link to="https://gtmetrix.com/">GTmetrix</Link>
          </li>
        </ul>
      </>
    );
  }
}

export default Home;

export interface HomeProps extends PropsRoot {
  pageData?: HomePageData | null;
}

export interface HomeState {}
