import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect,useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';

    const style ={
    position:'absolute',
    top: '50%',
    left:'50%',
    Transform: 'translate(-50%,-50%)',
    width: '400',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: '24',
    p:4,
    }

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({selectedUser,data,setOpen2}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [aaa,setAaa]=useState(selectedUser)
console.log(aaa,"aaaaaaaaaaaaa")
  const[View,setView]= useState([]);
  var b
  useEffect(() =>{
     b= data.filter((e)=> e.u_id === selectedUser);
  setView(b);
  },[] );
  console.log(View)

  const handleClose =()=>{
    setOpen2(false)
  }

  return (
    <Card sx={ style}>
      {View.map((value,index)=>{
        return(
      <>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title={
          <p style={{fontWeight:'bolder', fontSize:'20px'}}>{value.userName}</p>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        // title="Shrimp and Chorizo Paella"
        // subheader="September 14, 2016"
      />

      {value.Email}


      <CardMedia
        component="img"
        height="0"
        
        // image="/static/images/cards/paella.jpg"
        // alt="Paella dish"
      />
         <img
                className="row__poster row__posterLarge"
                src={value.Image} style={{width:'400px',height:'400px'}}
                alt=""
               
              />
      <CardContent>
        {/* <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography> */}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph></Typography>
          <Button onclick={handleClose} >BACK</Button>
     
          
        </CardContent>
      </Collapse>
      </>
      );
      })};
    </Card>
  );
    };