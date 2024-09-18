import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';




const Home = () => {
    const [data,setdata]=useState([]);
    useEffect(()=>{
        axios.get("https://dummyapi.online/api/movies").then((res)=>{
            setdata(res.data);
        })
    })
    
   return (
    


    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}> 
      {data.map((item)=>(<Grid item xs={4} >
      <Card sx={{ minWidth: 275 }} >
      <CardContent >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom align='center' >
        {item.id}
        </Typography>
        <Typography variant="h5" component="div" color='purple' align='center'>
          {item.movie}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="red" align='center' >
         <b>{item.rating}</b> 
        </Typography>
        
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
    </Grid>
      ))}
    </Grid>
  </Box>
  )
}


export default Home;