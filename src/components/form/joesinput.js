import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
  root: {},
  label: {
    textTransform: 'capitalize',
    color: 'blue',
  },
})

function JoesInput(props) {
  const { classes } = props

  return (
    <TextField
      {...props}
      classes={{
        root: classes.root, // class name, e.g. `classes-nesting-root-x`
        label: classes.label, // class name, e.g. `classes-nesting-label-x`
      }}
    >
      {props.children}
    </TextField>
  )
}

JoesInput.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(JoesInput)
