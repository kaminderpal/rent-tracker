import React from 'react';
import {
  Box,
  Typography,
  Paper,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Tooltip,
} from '@material-ui/core';
import { lighten, makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function createData(id, name, type, address, purchaseDate, numberOfTenants) {
  return { id, name, type, address, purchaseDate, numberOfTenants };
}

const rows = [
  createData(
    1,
    'My House',
    'Single Family',
    '221 renfrew St',
    'April 13, 2012',
    10
  ),
  createData(2, 'My Condo', 'Condo', '22 renfrew St', 'April 13, 2018', 10),
  createData(
    3,
    'My Townhouse',
    'Townhouse',
    '222 renfrew St',
    'April 13, 2016',
    10
  ),
];

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Name',
  },
  { id: 'type', numeric: true, disablePadding: false, label: 'Type' },
  { id: 'address', numeric: true, disablePadding: false, label: 'Address' },
  {
    id: 'purchaseDate',
    numeric: true,
    disablePadding: false,
    label: 'Purchase Date',
  },
  {
    id: 'numberOfTenants',
    numeric: true,
    disablePadding: false,
    label: 'Number Of Tenants',
  },
  { id: 'actions', numeric: true, disablePadding: false, label: 'Actions' },
];

function EnhancedTableHead() {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();

  return (
    <Toolbar className={classes.root}>
      <Typography
        className={classes.title}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Property
      </Typography>
    </Toolbar>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function PropertyDataTable() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size="medium"
            aria-label="enhanced table"
          >
            <EnhancedTableHead classes={classes} rowCount={rows.length} />
            <TableBody>
              {rows.map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow tabIndex={-1} key={row.name}>
                    <TableCell component="th" id={labelId} scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.type}</TableCell>
                    <TableCell align="right">{row.address}</TableCell>
                    <TableCell align="right">{row.purchaseDate}</TableCell>
                    <TableCell align="right">{row.numberOfTenants}</TableCell>
                    <TableCell align="right">
                      <Tooltip title="Edit">
                        <IconButton aria-label="edit" size="small" edge="end">
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton aria-label="delete" size="small" edge="end">
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
