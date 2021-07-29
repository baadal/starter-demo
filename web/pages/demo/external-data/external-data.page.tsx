import React, { Component } from 'react';
import styled from '@emotion/styled';

import { H3 } from 'starter/ui';
import { ExternalDataResp } from 'model/pagedata.model';

import common from 'assets/css/common.module.scss';

const Image = styled.div({
  display: 'flex',
  padding: '3px 5px',
  marginTop: '15px',
  border: '1px solid gainsboro',
  borderRadius: '4px',
  backgroundColor: '#f5f5f5',
});

const ImageItem = styled.div({
  border: '1px solid pink',
});

const ImageDesc = styled.div({
  padding: '2px 8px',
});

class ExternalData extends Component<ExternalDataProps, ExternalDataState> {
  render() {
    const { pageData } = this.props;
    const title = pageData?.title || '';
    const photos = pageData.album || [];

    return (
      <>
        <H3 className={common.pageTitle}>{title}</H3>
        {photos.map(photo => (
          <Image key={photo.id}>
            <ImageItem>
              <img src={photo.thumbnailUrl} loading="lazy" alt="thumbnail" width="100" height="100" />
            </ImageItem>
            <ImageDesc>
              <small>
                <strong>
                  # {photo.id} (Album {photo.albumId})
                </strong>
              </small>
              <div className={common.vspace} />
              <span>{photo.title[0].toUpperCase() + photo.title.substring(1)}.</span>
            </ImageDesc>
          </Image>
        ))}
      </>
    );
  }
}

export interface ExternalDataProps {
  pageData: ExternalDataResp;
}

export interface ExternalDataState {}

export default ExternalData;
