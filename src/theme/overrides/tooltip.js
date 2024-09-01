
const Tooltip = (theme) => {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.darkGrey.main,
        },
        arrow: {
          color: theme.palette.darkGrey.main,
        },
      },
    },
  };
};
export default Tooltip;
