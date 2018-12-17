import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
})

class JoesRadioGroup extends React.Component {
  state = {
    value: 'option1',
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  handleRadioChange = e => {
    this.setState({
      value: e.target.value,
    })
  }

  render() {
    const { classes } = this.props

    return (
      <RadioGroup
        aria-label="efoptions"
        name="ef options"
        className={classes.group}
        value={this.state.value}
        onChange={this.handleRadioChange}
      >
        <FormControlLabel
          value="option1"
          control={<Radio color="primary" />}
          label="This is option 1"
          labelPlacement="end"
        />
        <FormControlLabel
          value="option2"
          control={<Radio color="primary" />}
          label="This is option 2"
          labelPlacement="end"
        />
        <FormControlLabel
          value="option3"
          control={<Radio color="primary" />}
          label="This is option 3"
          labelPlacement="end"
        />
      </RadioGroup>
    )
  }
}

JoesRadioGroup.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(JoesRadioGroup)
