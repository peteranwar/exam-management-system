import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useMemo } from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { useRouter } from 'next/router';
import { breakpoints } from './breakpoints';
import componentsOverride from './overrides';
import { paletteGenerator } from './palette';
import { shape } from './shape';
import { typography } from './typography';


const ThemeConfig = ({ children }) => {
  const { locale } = useRouter();
  // const direction = locale === 'en' ? 'ltr' : 'rtl';
  const direction = 'ltr';

  const themeOptions = useMemo(
    () => ({
      palette: paletteGenerator('light'),
      shape,
      typography,
      direction,
      breakpoints,
    }),
    [direction, locale]
  );

  const theme = createTheme(themeOptions);

  theme.components = componentsOverride(theme);



  return (
    <ThemeProvider theme={theme}>
      {/* <CacheProvider> */}
        <CssBaseline />
        <Box
          sx={{
            height: '100%',
          }}
        >
          {children}
        </Box>
      {/* </CacheProvider> */}
    </ThemeProvider>
  );
};

export default ThemeConfig;
