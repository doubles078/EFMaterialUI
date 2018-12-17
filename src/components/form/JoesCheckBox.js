import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
const styles = theme => ({})

class JoesCheckbox extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <FormControl variant="checkbox">
        <Checkbox />
        <InputLabel htmlFor="default-text">
          i tempora maxime fugit incidunt. Repellendus, fuga magni cumque nihil
          cum ullam quas rem labore?
        </InputLabel>
      </FormControl>
    )
  }
}

JoesCheckbox.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(JoesCheckbox)
