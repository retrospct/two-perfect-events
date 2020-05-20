/// <reference types="react/index.d.ts"/>
/// <reference types="styled-components/cssprop" />

import 'styled-components'
// import 'gatsby-source-datocms'

// Add support for css prop
declare namespace React {
  interface DOMAttributes<T> {
    css?: any
  }
}

declare module 'styled-components' {
  export interface DefaultTheme {
    [key: string]: any | DefaultTheme
  }
}

// Add support for svg imports
declare module '*.svg' {
  const content: any
  export default content
}

// Add support for Jest configuration
declare global {
  namespace NodeJS {
    export interface Global {
      ___loader: any
    }
  }
}

// declare module 'gatsby-source-datocms' {
//   export interface HelmetDatoCms {
//     [key: string]: any | HelmetDatoCms
//   }
// }
// Add support for DatoCMS

// Reference from this repo
// https://github.com/datocms/react-datocms/tree/master/examples/with-next-typescript
// type GQLIntType = number;
// type GQLItemId = string;
// type GQLFloatType = number;
// type GQLMetaTagAttributes = Record<string, string>;

// export interface seoMetaTagsFragment {
//   __typename: "Tag";
//   attributes: GQLMetaTagAttributes | null;
//   content: string | null;
//   tag: string;
// }
