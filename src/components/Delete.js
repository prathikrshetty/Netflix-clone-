import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
    position:'absolute',
    top: '50%',
    left:'50%',
    Transform: 'translate(-50%,-50%)',
    width: '400',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: '24',
    p:4,
};
 function Delete({setOpen,selectedUser,data,setData}){
const handleClose = ()=>{
    setOpen(false)
}
const handleDelete = async (id) =>{
    console.log("id :"+id);
    const updateData = data.filter((e) =>e.u_id !==id);
    console.log(updateData);
    setData(updateData);
    localStorage.setItem("User",JSON.stringify(updateData));
    await setOpen(false);
}
    
  return (
    <div>
       <Card sx={{ maxWidth: 345 }}>
     
      <CardContent>
     
        <Typography variant="body2" color="text.secondary">
       are u sure to delete it
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=> handleDelete(selectedUser)} size="small">delete</Button>
        <Button onClick={handleClose} size="small" >cancel</Button>
      </CardActions>
    </Card>
    </div>
  )
}
export default Delete