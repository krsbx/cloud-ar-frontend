import React from 'react';

declare global {
  type FunctionComponent<Props extends {} = {}> = React.FC<
    Props & {
      children?: React.ReactNode;
    }
  >;
}
