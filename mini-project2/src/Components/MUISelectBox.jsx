import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export function BasicSelect(props) {


  return (
      <>

      <FormControl sx={{ minWidth: 215}}>
        <InputLabel id="demo-simple-select-label">{props.name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.value}
          label={props.name}
          onChange={props.onChange}
          name={props.name}
        >
        {props.option.map((item => <MenuItem sx={{marginRight: 5}} key={item} value={item}>{item}</MenuItem>))}
         
        </Select>
      </FormControl>
      </>
  );
}