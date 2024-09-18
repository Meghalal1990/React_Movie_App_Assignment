import React from 'react';


import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


const Add = () => {
  return (
    <center>
    <Box
    component="addmovie"
    sx={{
      "& .MuiTextField-root": { m: 1, width: "25ch" },
    }}
    noValidate
    autoComplete="off"
  >
         


    <div>
      <TextField
        required
        id="outlined-disabled"
        label="Movie Name"
         defaultValue="Enter Movie Name"
      />
    </div>
    <div>
      <TextField
      required
        id="outlined-required"
        label="Description"
        defaultValue=" Enter Description"
      />
    </div>
    <div>
      <TextField
      required
        id="outlined-disabled"
        label="Rating"
        defaultValue=" Enter Rating"
      />
    </div>


    <div>
      <Button variant="contained">Add</Button>
    </div>
  </Box></center>
  );
};


export default Add;