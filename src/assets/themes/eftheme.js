import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'
import green from '@material-ui/core/colors/green'

const theme = createMuiTheme({
  pallete: {
    primary: red,
    secondary: green,
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
    // Name of the component ⚛️
    MuiButtonBase: {
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
    MuiButton: {
      fullWidth: true,
    },
  },
})

export default theme
