import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import InputLabel from '@material-ui/core/InputLabel'

const styles = {
  root: {
    '&$shrink': {
      transform: 'translate(14px, 12px) scale(0.75)',
    },
  },
  shrink: {},
}

const JoesLabel = ({ classes, children }) => {
  return (
    <InputLabel classes={{ root: classes.root, shrink: classes.shrink }}>
      {children}
    </InputLabel>
  )
}

export default withStyles(styles)(JoesLabel)
