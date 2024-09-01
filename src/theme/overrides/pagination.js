import { lighten } from '@mui/material';

const pagination = (theme) => {
  return {
    MuiPagination: {
      styleOverrides: {
        root: {
          '& .MuiPaginationItem-root':{
            borderRadius: '6px',
            color: '#D9D9D9' ,
            fontWeight: 600,
            borderColor: '#D9D9D9'
          },
          '& .MuiPaginationItem-root[aria-current="true"]':{
            color: theme.palette.primary.main,
            borderColor: theme.palette.primary.main,
            background: 'transparent'
          },
          '& .MuiPaginationItem-previousNext':{
            color: '#fff' ,
            borderColor: theme.palette.primary.main,
            background: theme.palette.primary.main,
            '&:hover':{
              background: lighten(theme.palette.primary.main, 5),
            }
          },
          '& .Mui-disabled':{
            color: theme.palette.text.primary ,
            borderColor: '#F6F3F3',
            background: '#F6F3F3'
          },
        },
      },
    },
  };
};

export default pagination;
