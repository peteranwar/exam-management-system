
const Radio = (theme) => {
  return {
    MuiRadio: {
      styleOverrides: {
        root: {
          marginInline: 2,
          '&.Mui-checked': {
            color: 'white',
          },
          '[data-testid="RadioButtonCheckedIcon"]': {
            borderRadius: '50%',
            border: `6px solid ${theme.palette.primary.main}`,
            backgroundColor: 'white',
          },
          '[data-testid="RadioButtonUncheckedIcon"]': {
            color: theme.palette.darkGrey.main,
          },
          '&.custom-secondary': {
            '&.Mui-checked': {
              color: theme.palette.primary.main,
            },
            '[data-testid="RadioButtonCheckedIcon"]': {
              borderRadius: '50%',
              border: `6px solid white`,
              backgroundColor: theme.palette.primary.main,
            },
            '[data-testid="RadioButtonUncheckedIcon"]': {
              color: 'white',
            },
          },
        },
      },
    },
  };
};
export default Radio;
