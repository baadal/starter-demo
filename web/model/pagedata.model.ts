import { StringIndexable } from './common.model';

export interface HeaderData {
  showHeader: boolean;
}

export interface FooterData {
  showFooter: boolean;
}

export interface SEO {
  siteTitle?: string;
  title: string;
  description?: string;
  meta?: StringIndexable<string>;
}

export interface PageDataRoot {
  title?: string;
  description?: string;
  seo: SEO;
}

export type AboutPageData = PageDataRoot;
export type HomePageData = PageDataRoot;

export interface NotFoundPageData extends PageDataRoot {
  message: string;
}
