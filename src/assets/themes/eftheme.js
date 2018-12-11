import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

const eftheme = createMuiTheme({
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    background: {
      paper: '#fff',
      default: '#fafafa',
    },
    primary: {
      light: 'rgba(77, 207, 255, 1)',
      main: 'rgba(0, 185, 255, 1)',
      dark: 'rgba(0, 131, 179, 1)',
      contrastText: '#fff',
    },
    secondary: {
      light: 'rgba(255, 102, 181, 1)',
      main: 'rgba(255, 50, 155, 1)',
      dark: 'rgba(230, 0, 119, 1)',
      contrastText: '#fff',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    text: {
      primary: 'rgba(25, 25, 25, 1)',
      secondary: 'rgba(34, 34, 34, 1)',
      disabled: 'rgba(85, 85, 85, 1)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
  },

  shape: {
    borderRadius: 0,
  },
  overrides: {
    MuiButton: {
      root: {
        boxShadow: 'none',
        borderRadius: '1.875rem',
      },
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiButton: {
      fullWidth: true,
    },
  },
})

export default eftheme
