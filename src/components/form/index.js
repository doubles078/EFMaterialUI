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
import NativeSelect from '@material-ui/core/NativeSelect'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Button from '@material-ui/core/Button'

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
    color: 'blue',
    '&&:checked': {
      color: 'blue',
    },
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
    console.log(theme)
    return (
      <Paper className={classes.paper}>
        <form className={classes.container} noValidate autoComplete="off">
          <Grid container className={classes.root} spacing={16}>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Text"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit commodi quis perferendis, dicta delectus quod obcaecati tempora maxime fugit incidunt. Repellendus, fuga magni cumque nihil cum ullam quas rem labore?"
              />

              <TextField
                id="outlined-name"
                label="Default Text"
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
              <FormControl className={classes.formControl} error>
                <TextField
                  error
                  id="outlined-error"
                  label="Error State"
                  className={classes.textField}
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
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="option2"
                  control={<Radio className={classes.radio} />}
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
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.formControl}>
                <NativeSelect
                  className={classes.selectEmpty}
                  value={this.state.age}
                  name="age"
                  onChange={this.handleChange('age')}
                >
                  <option value="" disabled>
                    Placeholder
                  </option>
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
                <FormHelperText>Placeholder</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
              >
                Go Back
              </Button>
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
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button color="secondary" className={classes.button}>
                Text Button
              </Button>
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
