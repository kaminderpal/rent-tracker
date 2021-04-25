import React from 'react';
import {
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Paper,
} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import PropertyDataTable from '../../Components/PropertyDataTable';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
    paddingTop: 10,
    paddingBottom: 30,
  },
  paper: {
    padding: 10,
    paddingBottom: 20,
    marginTop: 10,
  },
  control: {
    padding: theme.spacing(2),
  },
  formControl: {
    width: '100%',
  },
}));

const Property = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h4" component="h4" gutterBottom>
        Add a New Property
      </Typography>
      <Box mt={4}>
        <Paper className={classes.paper}>
          <Grid container className={classes.container} spacing={4}>
            <Grid item xs={12} md={4}>
              <FormControl className={classes.formControl}>
                <TextField id="propertyName" label="Name" />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value=""
                  onChange={() => {}}
                >
                  <MenuItem value={10}>Condo</MenuItem>
                  <MenuItem value={20}>Single Family</MenuItem>
                  <MenuItem value={30}>Townhouse</MenuItem>
                  <MenuItem value={30}>Apartment Building</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl className={classes.formControl}>
                <TextField id="standard-basic" label="Address" />
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <FormControl className={classes.formControl}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    format="MM/dd/yyyy"
                    id="date-picker-inline"
                    label="Purchase Date"
                    value={new Date('2014-08-18T21:11:54')}
                    onChange={() => {}}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl className={classes.formControl}>
                <TextField id="standard-basic" label="Number of Tenants" />
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Box mt={2}>
                <Button variant="contained" color="primary" size="large">
                  Add Property
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      <Box mt={4}>
        <Typography variant="h5" component="h5" gutterBottom>
          <PropertyDataTable />
        </Typography>
      </Box>
    </Box>
  );
};

export default Property;
