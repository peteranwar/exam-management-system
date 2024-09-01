const CUBIC_BEZIER_TRANSITION = '1.000, 0.000, 0.000, 1.000';
const Button = (theme) => {
  return {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      variants: [
        {
          props: {
            variant: 'secondary',
          },
          style: {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.common.white,
            '&:hover': {
              backgroundColor: theme.palette.secondary.main,
              filter: 'brightness(0.85)',
            },
          },
        },
        {
          props: {
            variant: 'darkGrey',
          },
          style: {
            backgroundColor: theme.palette.darkGrey.main,
            color: theme.palette.darkGrey.main,
            '&:hover': {
              backgroundColor: theme.palette.darkGrey.main,
              filter: 'brightness(0.85)',
            },
          },
        },
        {
          props: {
            variant: 'lightGrey',
          },
          style: {
            backgroundColor: theme.palette.lightGrey.main,
            color: theme.palette.darkGrey.main,
            '&:hover': {
              backgroundColor: theme.palette.lightGrey.main,
              filter: 'brightness(0.85)',
            },
          },
        },
        {
          props: {
            variant: 'outlined',
          },
          style: {
            fontFamily: theme.palette.typography.font.bold,
            position: 'relative',
            overflow: 'hidden',
            zIndex: '20',
            transition: `all 0.4s ease`,
            borderRadius: '5px',
            minHeight: '40px',
            border: '1px solid #212832',
            color: theme.palette.text.primary,
            [theme.breakpoints.down('sm')]: {
              minHeight: '38px',
            },
            ':hover': {
              backgroundColor: '#E2E8F0',
              color: theme.palette.text.primary,
              borderColor: '#E2E8F0',
            },
            '&:active': {
              backgroundColor: theme.palette.action.active,
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          // paddingTop: '4px',
          // paddingBottom: '4px',

          '&:hover': {
            boxShadow: 'none',
          },
          '&.MuiSwitch-switchBase': {
            backgroundColor: 'red',
            color: 'blue',
          },
          '.MuiSwitch-switchBase': {
            backgroundColor: 'red',
            color: 'blue',
          },
          '&.MuiSwitch-track': {
            backgroundColor: 'red',
            color: 'blue',
          },
          '.MuiSwitch-track': {
            backgroundColor: 'red',
            color: 'blue',
          },
        },
        contained: {
          fontFamily: theme.palette.typography.font.bold,
          borderRadius: '9px',
          minHeight: '40px',
          [theme.breakpoints.down('sm')]: {
            minHeight: '44px',
          },
          '&.Mui-disabled': {
            color: theme.palette.common.white,
          },
          ':hover': {
            backgroundColor: theme.palette.text.primary,
          },
          ':active': {
            backgroundColor: theme.palette.buttonAction.active,
          },
        },
        text: {
          padding: 0,
          color: theme.palette.common.black,
          '&:hover': {
            backgroundColor: 'transparent',
            color: theme.palette.buttonAction.hover,
          },
          ':active': {
            backgroundColor: 'transparent',
            color: theme.palette.buttonAction.active,
          },
        },
      },
    },
  };
};
export default Button;
