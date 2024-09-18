import React from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


const Signup = () => {
  return (
   <center> <Box
    component="signup"
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
        label="Name"
        defaultValue="Enter your name"
      />
    </div>
    <div>
      <TextField
        required
        id="outlined-required"
        label="Email"
        defaultValue=" Enter your Email"
      />
    </div>
    <div>
      <TextField
        required
        id="outlined-disabled"
        label="Password"
        defaultValue="Enter Password"
      />
    </div>
    <div>
      <TextField
        required
        id="outlined-disabled"
        label="Phone Number"
        defaultValue="Enter Your Phone Number"
      />
    </div>




    <div>
      <Button variant="contained">Submit</Button>
    </div>
  </Box>
   </center> 
  )
}


export default Signup;