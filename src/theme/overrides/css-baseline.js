export const cssBaseline = (theme) => ({
  MuiCssBaseline: {
    styleOverrides: {
      '@font-face': {
        fontFamily: 'co-head-line-corp-regular',
        fontDisplay: 'swap',
        fontStyle: 'normal',
        src: `local('co-head-line-corp-regular'),
            url( '/fonts/co-head-line-trial-regular.ttf') format('truetype')`,
      },
      fallbacks: [
        {
          '@font-face': {
            fontFamily: 'co-head-line-corp-Light',
            fontDisplay: 'swap',
            fontStyle: 'normal',
            src: `local('co-head-line-corp-Light'),
          url( '/fonts/co-head-line-corp-light.ttf') format('truetype')`,
          },
        },
        {
          '@font-face': {
            fontFamily: 'co-head-line-corp-bold',
            fontDisplay: 'swap',
            fontStyle: 'normal',
            src: `local('co-head-line-corp-bold'),
          url( '/fonts/co-head-line-trial-bold.ttf') format('truetype')`,
          },
        },
      ],
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
 
      html: {
        width: '100%',
        height: '100%',
        // fontSize: '14px',
        // [theme.breakpoints.up('md')]: {
        //   fontSize: '12px',
        // },
        // [theme.breakpoints.up('lg')]: {
        //   fontSize: '13px',
        // },
        // [theme.breakpoints.up('xl')]: {
        //   fontSize: '16px',
        // },
      },
      body: {
        width: '100%',
        height: '100%',
      },
      '#root': {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        caretColor: theme.palette.primary.main,
      },
      input: {
        '&[type=number]': {
          MozAppearance: 'textfield',
          '&::-webkit-outer-spin-button': {
            margin: 0,
            WebkitAppearance: 'none',
          },
          '&::-webkit-inner-spin-button': {
            margin: 0,
            WebkitAppearance: 'none',
          },
        },
      },
      textarea: {
        '&::-webkit-input-placeholder': {
          color: theme.palette.text.disabled,
        },
        '&::-moz-placeholder': {
          opacity: 1,
          color: theme.palette.text.disabled,
        },
        '&:-ms-input-placeholder': {
          color: theme.palette.text.disabled,
        },
        '&::placeholder': {
          color: theme.palette.text.disabled,
        },
      },
      //linear NProgress
      '#nprogress': {
        /* Make clicks pass-through */
        pointerEvents: 'none',
        '& .bar': {
          background: theme.palette.secondary.main,
          position: 'fixed',
          zIndex: 1502,
          top: 0,
          left: 0,
          width: '100%',
          height: '2px',
        },
        /* Fancy blur effect */
        '& .peg': {
          display: 'block',
          position: 'absolute',
          right: 0,
          width: '100px',
          height: '100%',
          opacity: 1,
          WebkitTransform: 'rotate(3deg) translate(0px, -4px)',
          msTransform: 'rotate(3deg) translate(0px, -4px)',
          transform: 'rotate(3deg) translate(0px, -4px)',
        },
        /* Remove these to get rid of the spinner */
        '& .spinner': {
          display: 'block',
          position: 'fixed',
          zIndex: 1101,
          top: '15px',
          right: '15px',
        },
        '&. spinner-icon': {
          width: '18px',
          height: '18px',
          boxSizing: 'border-box',
          border: 'solid 2px transparent',
          borderTopColor: theme.palette.secondary.main,
          borderLeftColor: theme.palette.secondary.main,
          borderRadius: '50%',
          WebkitAnimation: 'nprogress-spinner 400ms linear infinite',
          animation: 'nprogress-spinner 400ms linear infinite',
        },
      },
      '& .nprogress-custom-parent': {
        overflow: 'hidden',
        position: 'relative',
        '#nprogress': {
          '& .spinner': {
            position: 'absolute',
          },
          '& .bar': {
            position: 'absolute',
          },
        },
      },
      '@media (min-width: 640px)': {
        '#nprogress': {
          '& .bar': {
            height: '0.25rem',
          },
        },
      },
      '@-webkit-keyframes nprogress-spinner': {
        '0%': {
          WebkitTransform: 'rotate(0deg)',
        },
        '100%': {
          WebkitTransform: 'rotate(360deg)',
        },
      },
      '@keyframes nprogress-spinner': {
        '0%': {
          transform: 'rotate(0deg)',
        },
        '100%': {
          transform: 'rotate(360deg)',
        },
      },
    },
  },
});
