const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#ff1744',
      light: '#ffffff',
      dark: '#616161',
    },
    secondary: {
      main: '#dd2c00',
    },
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: '#fff',
        color: '#000',
      },
    },
  },
  props: {
    MuiAppBar: {
      color: 'inherit',
    },
  },
};

export default themeOptions;