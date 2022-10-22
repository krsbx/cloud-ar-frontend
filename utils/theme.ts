import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
});

export const chakraColor = (color: string, variant?: string) => {
  return `var(--chakra-colors-${color}${variant ? `-${variant}` : ''})`;
};

export default theme;
