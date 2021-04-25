import React from 'react';
import {
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Paper,
  FormHelperText,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import PropertyDataTable from '../../Components/PropertyDataTable';
import { useForm, Controller } from 'react-hook-form';

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
    padding: 20,
    marginTop: 10,
    paddingBottom: 30,
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

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => console.log(data, e);

  return (
    <Box className={classes.root}>
      <Box mt={4}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h5" gutterBottom>
              Add a New Property
            </Typography>
            <Grid container className={classes.container} spacing={4}>
              <Grid item xs={12} md={4}>
                <FormControl className={classes.formControl}>
                  <Controller
                    name="propertyName"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: 'This field is required.',
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        id="propertyName"
                        label="Name"
                        error={!!errors.propertyName}
                        helperText={errors.propertyName?.message}
                      />
                    )}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl
                  className={classes.formControl}
                  error={!!errors.propertyType}
                >
                  <Controller
                    name="propertyType"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: 'This field is required.',
                      },
                    }}
                    render={({ field }) => (
                      <>
                        <InputLabel id="propertyTypeLabel">Type</InputLabel>
                        <Select
                          {...field}
                          labelId="propertyTypeLabel"
                          id="propertyType"
                          error={!!errors.propertyType}
                        >
                          <MenuItem value="condo">Condo</MenuItem>
                          <MenuItem value="singleFamily">
                            Single Family
                          </MenuItem>
                          <MenuItem value="townhouse">Townhouse</MenuItem>
                          <MenuItem value="apartment">
                            Apartment Building
                          </MenuItem>
                        </Select>
                        {errors.propertyType && (
                          <FormHelperText>
                            {errors.propertyType?.message}
                          </FormHelperText>
                        )}
                      </>
                    )}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl className={classes.formControl}>
                  <Controller
                    name="propertyAddress"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: 'This field is required',
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        id="propertyAddress"
                        label="Address"
                        error={!!errors.propertyAddress}
                        helperText={errors.propertyAddress?.message}
                      />
                    )}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <FormControl className={classes.formControl}>
                  <Controller
                    name="propertyPurchaseDate"
                    control={control}
                    defaultValue={new Date()}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                          {...field}
                          disableToolbar
                          format="MM/dd/yyyy"
                          id="propertyPurchaseDate"
                          label="Purchase Date"
                          KeyboardButtonProps={{
                            'aria-label': 'change purchase date',
                          }}
                        />
                      </MuiPickersUtilsProvider>
                    )}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl className={classes.formControl}>
                  <Controller
                    name="propertyNumberOfTenants"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: 'This field is required.',
                      },
                      pattern: {
                        value: /\d+/,
                        message: 'Please enter numeric value.',
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        id="propertyNumberOfTenants"
                        label="Number of Tenants"
                        error={!!errors.propertyNumberOfTenants}
                        helperText={errors.propertyNumberOfTenants?.message}
                      />
                    )}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Box mt={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                  >
                    Add Property
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </form>
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
