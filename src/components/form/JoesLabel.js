import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import InputLabel from '@material-ui/core/InputLabel'

const styles = {
  shrink: {
    color: 'blue',
    transform: 'translate(14px, 5px) scale(0.75)',
  },
}

const JoesLabel = ({ classes, children }) => {
  return (
    <InputLabel classes={{ shrink: classes.shrink }}>{children}</InputLabel>
  )
}

export default withStyles(styles)(JoesLabel)
