import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import FilledInput from '@material-ui/core/FilledInput'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Chip from '@material-ui/core/Chip'
import JoesButton from './JoesButton'
import JoesLabel from './JoesLabel'
import classnames from 'classnames'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    paddingLeft: theme.spacing.unit * 8,
    paddingRight: theme.spacing.unit * 8,
    paddingBottom: theme.spacing.unit * 4,
    boxShadow: '0 1.875rem 3.8125rem rgba(0, 0, 0, 0.14)',
    width: '100%',
    margin: '0 auto',
    maxWidth: '38.75rem',
    minWidth: '16.25rem',
  },
  radio: {
    backgroundColor: '#f5f5f2',
    margin: `${theme.spacing.unit}px 0`,
  },
  textField: {
    width: '100%',
    borderRadius: 0,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  formControl: {
    width: '100%',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  chipper: {
    marginTop: theme.spacing.unit * 2,
  },
  funInput: { padding: '28.5px 14px 11.5px 14px' },
  progress: {
    height: '26px',
    width: '26px',
    color: '#fff',
  },
  checkboxLabel: {
    alignItems: 'flex-start',
  },
  checkbox: {
    padding: '0px 12px 12px 12px',
  },
})

class OutlinedTextFields extends React.Component {
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
    const { classes, theme } = this.props

    return (
      <Paper className={classes.paper}>
        <form className={classes.container} noValidate autoComplete="off">
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Text"
              />
              <FormControlLabel
                className={classes.checkboxLabel}
                control={<Checkbox className={classes.checkbox} />}
                label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit commodi quis perferendis, dicta delectus quod obcaecati tempora maxime fugit incidunt. Repellendus, fuga magni cumque nihil cum ullam quas rem labore?"
              />
              <Chip
                color="secondary"
                label="Custom Label(s)"
                classes={{ root: classes.chipper }}
              />

              <FormControl className={classes.formControl} variant="outlined">
                <JoesLabel htmlFor="default-text">Joes Text</JoesLabel>

                <OutlinedInput
                  id="default-text"
                  classes={{ input: classes.funInput }}
                  margin="normal"
                  variant="outlined"
                />
              </FormControl>
              <FormControl
                className={classes.formControl}
                error
                variant="outlined"
              >
                <JoesLabel htmlFor="outlined-error">Error State</JoesLabel>

                <OutlinedInput
                  error
                  id="outlined-error"
                  classes={{ input: classes.funInput }}
                  margin="normal"
                  variant="outlined"
                />

                <FormHelperText>Oh no!</FormHelperText>
              </FormControl>
              <TextField
                disabled
                id="outlined-disabled"
                label="Disabled Input"
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <RadioGroup
                aria-label="efoptions"
                name="ef options"
                className={classes.group}
                value={this.state.value}
                onChange={this.handleRadioChange}
              >
                <FormControlLabel
                  value="option1"
                  className={classes.radio}
                  control={<Radio color="primary" />}
                  label="This is option 1"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="option2"
                  className={classes.radio}
                  control={<Radio color="primary" />}
                  label="This is option 2"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="option3"
                  className={classes.radio}
                  control={<Radio color="primary" />}
                  label="This is option 3"
                  labelPlacement="end"
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={6}>
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
                  className={classes.radio}
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="option2"
                  className={classes.radio}
                  control={<Radio color="primary" />}
                  label="This is option 2"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="option3"
                  className={classes.radio}
                  control={<Radio color="primary" />}
                  label="This is option 3"
                  labelPlacement="end"
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={12}>
              <RadioGroup
                aria-label="efoptions"
                name="ef options"
                className={classes.group}
                value={this.state.value}
                onChange={this.handleRadioChange}
              >
                <FormControlLabel
                  value="option1"
                  className={classes.radio}
                  control={<Radio color="primary" />}
                  label="This is option 1"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="option2"
                  className={classes.radio}
                  control={<Radio color="primary" />}
                  label="This is option 2"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="option3"
                  className={classes.radio}
                  control={<Radio color="primary" />}
                  label="This is option 3"
                  labelPlacement="end"
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel htmlFor="filled-age-native-simple">Age</InputLabel>
                <Select
                  native
                  value={this.state.age}
                  onChange={this.handleChange('age')}
                  input={
                    <FilledInput name="age" id="filled-age-native-simple" />
                  }
                >
                  <option value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Chip
                color="secondary"
                label="Custom Back and Submit Button"
                className={classes.chipper}
              />
            </Grid>
            <Grid item xs={6}>
              <JoesButton className={classes.button} variant="outlined">
                Go Back
              </JoesButton>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="secondary"
                disabled
                fullWidth={true}
                className={classes.button}
              >
                Disabled
              </Button>
            </Grid>
            <Grid item xs={6}>
              <JoesButton className={classes.button} variant="contained">
                Submit
              </JoesButton>
            </Grid>
            <Grid item xs={6}>
              <JoesButton className={classes.button} variant="contained">
                <CircularProgress
                  classes={{ root: classes.progress }}
                  size={26}
                />
              </JoesButton>
            </Grid>
          </Grid>
        </form>
      </Paper>
    )
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(OutlinedTextFields)
