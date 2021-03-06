import React from 'react';

import { H3, Link } from 'starter/ui';
import env from 'starter/const/env-values';
import { EsnextDemoData } from 'model/pagedata.model';

import common from 'assets/css/common.module.scss';

// --------------------------------

const Text: React.FC<TextProps> = ({ status, success, error, info, text }) => {
  if (typeof status === 'boolean') {
    if (status) {
      return <span style={{ color: 'green' }}>yes!</span>;
    }
    return <span style={{ color: 'red' }}>NO</span>;
  }
  if (success) {
    return <span style={{ color: 'green' }}>{success}</span>;
  }
  if (error) {
    return <span style={{ color: 'red' }}>{error}</span>;
  }
  if (info) {
    return <span style={{ color: 'teal' }}>{info}</span>;
  }
  if (text) {
    return <span>{text}</span>;
  }
  return <span />;
};

interface TextProps {
  status?: boolean;
  success?: string | number;
  error?: string | number;
  info?: string | number;
  text?: string | number;
}

// --------------------------------

const header = (title: string) => `${'~'.repeat(5)} ${title} ${'~'.repeat(5)}`;

const greet = (name: string) => `Hello ${name}!`;

const includes = (items: number[], t: number) => [...items].includes(t);

const nthItem = (items: number[], i: number) => items?.[i];

const defaultItem = (item: number) => item ?? 'undefined';

class EsnextDemo extends React.Component<EsnextDemoProps, EsnextDemoState> {
  constructor(props: EsnextDemoProps) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.testCollections();
    void this.testPromise();
    void this.testFetch();
    this.testIntersectionObserver();
    this.testPaymentRequest();
  }

  testCollections = () => {
    const map = new Map();
    const set = new Set();
    this.setState({ collections: !!map.has && !!set.has });
  };

  testPromise = async () => {
    const res = await Promise.resolve(true);
    this.setState({ res });
  };

  testFetch = async () => {
    const resp = await fetch(`${env.apiBaseUrl}/api/internal/user-agent`);
    const response = await resp.json();
    const { browser, esmSupported } = response.data;

    let label = '';
    if (browser.label && browser.label.toLowerCase() !== browser.name.toLowerCase()) {
      label = `${browser.label}/`;
    }

    const browserInfo = browser ? `${label}${browser.name} ${browser.major}` : '';
    this.setState({ xhr: browserInfo, esm: esmSupported });
  };

  testIntersectionObserver = () => {
    const observer = new IntersectionObserver(() => {});
    this.setState({ intersection: !!observer.observe });
  };

  testPaymentRequest = () => {
    this.setState({ payment: 'PaymentRequest' in window });
  };

  render() {
    const { pageData } = this.props;
    const title = pageData?.title || '';

    return (
      <>
        <H3 className={common.pageTitle}>{title}</H3>
        <div>
          <div>
            <b>String repeat:</b>{' '}
            <code>
              <Text info={header('ESNext features')} />
            </code>
          </div>
          <div>
            <b>Template string:</b>{' '}
            <code>
              <Text info={greet('world')} />
            </code>
          </div>
          <div>
            <b>
              Array <code>includes</code>:
            </b>{' '}
            [1, 2, 3] includes 2:{' '}
            <code>
              <Text status={includes([1, 2, 3], 2)} />
            </code>
          </div>
          <div>
            <b>Optional chaining:</b> [1, 2, 3] index 1 element:{' '}
            <code>
              <Text info={nthItem([1, 2, 3], 1)} />
            </code>
          </div>
          <div>
            <b>Nullish coalescing operator:</b> [1, 2, 3] index 5 element:{' '}
            <code>
              <Text info={defaultItem(nthItem([1, 2, 3], 5))} />
            </code>
          </div>
          <div>
            <b>Collections - Map &amp; Set:</b>{' '}
            <code>
              <Text status={this.state.collections} text="Loading.." />
            </code>
          </div>
          <div>
            <b>Promise API:</b>{' '}
            <code>
              <Text status={this.state.res} text="Loading.." />
            </code>
          </div>
          <div className={common.vspace} />
          <div>
            <b>
              <code>fetch</code> API:
            </b>{' '}
            User-Agent:{' '}
            <code>
              <Text info={this.state.xhr} text="Loading.." />
            </code>
            <span>&nbsp;</span>
            {this.state.esm && (
              <small>
                <code>
                  <b>esm</b>
                </code>
              </small>
            )}
            <span>&nbsp;&nbsp;</span>
            <small>
              (
              <Link to={`${env.apiBasePublicUrl}/api/internal/user-agent`} internal>
                more..
              </Link>
              )
            </small>
          </div>
          <div>
            <b>IntersectionObserver API:</b>{' '}
            <code>
              <Text status={this.state.intersection} text="Loading.." />
            </code>
          </div>
          <div>
            <b>PaymentRequest API:</b>{' '}
            <code>
              <Text status={this.state.payment} text="Loading.." />
            </code>
          </div>
        </div>
      </>
    );
  }
}

export interface EsnextDemoProps {
  pageData: EsnextDemoData | null;
}

export interface EsnextDemoState {
  xhr?: string;
  esm?: boolean;
  collections?: boolean;
  res?: boolean;
  intersection?: boolean;
  payment?: boolean;
}

export default EsnextDemo;
