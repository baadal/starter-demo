import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { H3 } from 'starter/ui';
import { CssInJsDemoData } from 'model/pagedata.model';

import common from 'assets/css/common.module.scss';

const StyledDiv = styled.div<any>`
  color: ${props => (props.primary ? 'darkorchid' : 'green')};
  &:hover {
    color: hotpink;
  }
`;

const StyledDiv2 = styled.div<any>`
  ${props => css`
    color: ${props.primary ? 'darkorchid' : 'green'};
    &:hover {
      color: hotpink;
    }
  `}
`;

const StyledDiv3 = styled.div<any>(
  `
  &:hover {
    color: hotpink;
  }
`,
  props => ({
    color: props.primary ? 'darkorchid' : 'green',
  })
);

const StyledDiv4 = styled.div<any>(
  {
    '&:hover': {
      color: 'hotpink',
    },
  },
  props => ({
    color: props.primary ? 'darkorchid' : 'green',
  })
);

const StyledComponent = styled(StyledDiv)`
  display: inline-block;
  &:hover {
    background: linear-gradient(90deg, #ff8a00, #e52e71);
    background-clip: text;
    color: transparent;
  }
`;

class CssInJsDemo extends React.Component<CssInJsDemoProps, CssInJsDemoState> {
  render() {
    const { pageData } = this.props;
    const title = pageData?.title || '';

    return (
      <>
        <H3 className={common.pageTitle}>{title}</H3>
        <div css={{ color: 'darkorchid' }}>Object Style</div>
        <div className={common.vspace2} />
        <div css={css({ color: 'darkorchid' })}>
          Object Style (with <code>css</code> method)
        </div>
        <div className={common.vspace2} />
        <div css={css`color: darkorchid;`}> {/* eslint-disable-line */}
          Template String Style
        </div>
        <div className={common.vspace2} />
        <div
          css={[
            css`color: green;`, // eslint-disable-line
            { '&:hover': { color: 'hotpink' } },
          ]}
        >
          Array Style
        </div>
        <div className={common.vspace2} />
        <StyledDiv primary>Styled Div 1 (awesome)</StyledDiv>
        <div className={common.vspace2} />
        <StyledDiv2>Styled Div 2</StyledDiv2>
        <div className={common.vspace2} />
        <StyledDiv3>Styled Div 3</StyledDiv3>
        <div className={common.vspace2} />
        <StyledDiv4 primary>Styled Div 4 (really awesome!)</StyledDiv4>
        <div className={common.vspace2} />
        <StyledComponent>Styled Component</StyledComponent>
        <div className={common.vspace2} />
      </>
    );
  }
}

export interface CssInJsDemoProps {
  pageData: CssInJsDemoData | null;
}

export interface CssInJsDemoState {}

export default CssInJsDemo;
