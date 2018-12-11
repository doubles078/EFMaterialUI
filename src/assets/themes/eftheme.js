import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

const eftheme = createMuiTheme({
  pallete: {
    primary: red,
  },

  shape: {
    borderRadius: 0,
  },
  overrides: {
    MuiButton: {
      root: {
        boxShadow: 'none',
        borderRadius: '1.875rem',
        backgroundColor: 'black',
        color: 'white',
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

export default eftheme
