import React from "react";
import "./index.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ShareIcon from '@material-ui/icons/Share';
const useStyles = makeStyles({
    root: {
      maxWidth: 300,minHeight:450,marginTop:40,marginLeft:20
      
    }
  });

const Se=(props)=>{
    
    const classes = useStyles();

    return (
        <div className="ShoulderCard">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="200"
            image={props.img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {props.data}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <a href="https://api.whatsapp.com/send?phone=&text=https://jemish1331.github.io/mahadevay" >
        <Button size="small" color="primary">
            <ShareIcon className="sharebutton" /> (Share) 
          </Button>
        </a>
          
          <Button size="small" color="primary">
            Best Wishes
          </Button>
        </CardActions>
      </Card>
      </div>
    );
};
export default Se;
