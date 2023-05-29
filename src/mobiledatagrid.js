import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';


const useStyles = makeStyles({
  stripedRow: {
    '&:nth-of-type(even)': {
      backgroundColor: '#f5f5f5',
    },
  },
  header: {
    backgroundColor: '#gray',
    color: '#333333',
  },
});
const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
  { field: 'brand', headerName: 'Brand', width: 120 },
  { field: 'model', headerName: 'Model', width: 150 },
  { field: 'price', headerName: 'Price', width: 120 },
];

const rows = [
  { id: 1, brand: 'Apple', model: 'iPhone 12', price: '$799' },
  { id: 2, brand: 'Samsung', model: 'Galaxy S21', price: '$999' },
  { id: 3, brand: 'Google', model: 'Pixel 5', price: '$699' },
  { id: 4, brand: 'Apple', model: 'iPhone 12', price: '$799' },
  { id: 5, brand: 'Samsung', model: 'Galaxy S21', price: '$999' },
  { id: 6, brand: 'Google', model: 'Pixel 5', price: '$699' },
  { id: 7, brand: 'Apple', model: 'iPhone 12', price: '$799' },
  { id: 8, brand: 'Samsung', model: 'Galaxy S21', price: '$999' },
  { id: 9, brand: 'Google', model: 'Pixel 5', price: '$699' },
  { id: 10, brand: 'Apple', model: 'iPhone 12', price: '$799' },
  { id: 11, brand: 'Samsung', model: 'Galaxy S21', price: '$999' },
  { id: 12, brand: 'Google', model: 'Pixel 5', price: '$699' },
  { id: 13, brand: 'Apple', model: 'iPhone 12', price: '$799' },
  { id: 14, brand: 'Samsung', model: 'Galaxy S21', price: '$999' },
  { id: 15, brand: 'Google', model: 'Pixel 5', price: '$699' },
  // Add more rows with mobile phone data as needed
];

const MobilePhonesGrid = () => {
  const classes = useStyles();

  const getRowClassName = (params) => {
    return classes.stripedRow;
  };
  return (
    <div style={{ height: 400, width: '100%' }}>
      <Typography variant='h5'>Latest Mobile Phones (2023)</Typography>
      <br></br>
      <DataGrid
        rows={rows}
        columns={columns}
        //pageSize={5}
        //checkboxSelection
        getRowClassName={getRowClassName}
        headerClassName={classes.header}
        hideFooter
      />
    </div>
  );
};

export default MobilePhonesGrid;
