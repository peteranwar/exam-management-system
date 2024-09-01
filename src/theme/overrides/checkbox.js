const checkbox = (theme) => {
  return {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '& .MuiFormControlLabel-label':{
            color: theme.palette.text.secondary ,
            fontWeight: 400,
          },
          '& .MuiSvgIcon-root': {
            borderRadius: 20,
            width: '29px',
            height: '29px',
          },

          '& .MuiSvgIcon-root[data-testid="CheckBoxOutlineBlankIcon"]': {
            color: '#F8F8F8',
            '& path': {
              fill: '#E8E9F3'
            }
          },
        },
      },
    },
  };
};

export default checkbox;
