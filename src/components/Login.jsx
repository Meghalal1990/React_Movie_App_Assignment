import React from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const Login = () => {

  return (
    <center>
    <Box
      component="login"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      
      <div>
        <TextField
        
          id="outlined-disabled"
          label="Email"
          defaultValue="Your Email"
         
        />
      </div>
      
      <div>
        <TextField
        
          id="outlined-disabled"
          label="Password"
          defaultValue="Your Password"
        />
      </div>


      <div>
        <Button variant="contained">Login</Button>
      </div>
    </Box>
    </center>
  );
};


export default Login;