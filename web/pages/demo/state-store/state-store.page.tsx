import React from 'react';
import { Subscription } from 'rxjs';

import { H3, Button } from 'starter/ui';
import StateStore from 'web/utils/state-store';
import { StateStoreDemoData } from 'model/pagedata.model';

import common from 'assets/css/common.module.scss';

function getTimeString(timestamp?: string) {
  const dateObj = new Date(timestamp || new Date().toISOString());
  return dateObj.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
}

class StateStoreDemo extends React.Component<StateStoreDemoProps, StateStoreDemoState> {
  private subscription = new Subscription();

  constructor(props: StateStoreDemoProps) {
    super(props);

    this.state = {
      time: getTimeString(props.pageData?.timestamp),
      counter: 0,
    };
  }

  componentDidMount() {
    this.subscription.add(
      StateStore.timer$.subscribe(() => {
        const time = getTimeString();
        this.setState({ time });
      })
    );

    this.subscription.add(
      StateStore.clickCounter$.subscribe(counter => {
        this.setState({ counter });
      })
    );
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    const { pageData } = this.props;
    const title = pageData?.title || '';

    return (
      <div>
        <H3 className={common.pageTitle} dangerouslySetInnerHTML={{ __html: title }} />
        <div>
          <span>Counter: {this.state.counter}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <strong>{this.state.time}</strong>&nbsp;&nbsp;&nbsp;
        </div>
        <br />
        <div>
          <span>Update Counter:</span>&nbsp;&nbsp;
          <Button
            variant="outline"
            colorScheme="teal"
            size="sm"
            style={{ fontSize: '18px', padding: 0 }}
            onClick={() => StateStore.clickEvent$.next(-1)}
          >
            <strong>&#8210;</strong>
          </Button>
          &nbsp;&nbsp;
          <Button
            variant="outline"
            colorScheme="teal"
            size="sm"
            style={{ fontSize: '18px', padding: 0 }}
            onClick={() => StateStore.clickEvent$.next(1)}
          >
            <strong>+</strong>
          </Button>
          &nbsp;&nbsp;
        </div>
      </div>
    );
  }
}

export default StateStoreDemo;

export interface StateStoreDemoProps {
  pageData: StateStoreDemoData | null;
}

export interface StateStoreDemoState {
  time: string;
  counter: number;
}
