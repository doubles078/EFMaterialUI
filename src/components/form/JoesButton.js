import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  root: {
    background: theme.palette.text.primary,
    color: 'white',
    boxShadow: '0',
    '&:hover': {
      background: theme.palette.primary.main,
    },
  },
  outlined: {
    border: `1px solid ${theme.palette.text.primary}`,
    color: theme.palette.text.primary,
    boxShadow: '0',
    '&:hover': {
      border: `1px solid ${theme.palette.primary.main}`,
      background: 'transparent',
      color: theme.palette.primary.main,
    },
  },
  label: {
    textTransform: 'capitalize',
  },
})

function JoesButton(props) {
  const { classes } = props

  let dansclass

  switch (props.variant) {
    case 'outlined':
      dansclass = classes.outlined
      break
    default:
      dansclass = classes.root
  }

  return (
    <Button
      {...props}
      classes={{
        root: dansclass, // class name, e.g. `classes-nesting-root-x`
        label: classes.label, // class name, e.g. `classes-nesting-label-x`
      }}
    >
      {props.children}
    </Button>
  )
}

JoesButton.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(JoesButton)
