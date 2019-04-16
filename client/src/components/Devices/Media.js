import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ReactDOM from "react-dom";
import DeviceInfo from "./DeviceInfo.js";
import BookDevice from "./BookDevice.js";
import { labeledStatement } from "@babel/types";

const styles = {
  card: {
    maxWidth: 300,
    height: 360,
    marginRight: 20,
    marginBottom: 20
  },
  media: {
    width: 275,
    height: 180
  },
  button: {
    margin: 5,
    padding: 10
  },
};


function createMockOffice(i){
	switch(i){
		default:
		case 1:
			return {
				Id : "497",
				OS : "Android 7.0",
				Location : "Kaunas"
      };
      case 2:
			return {
				Id : "453",
				OS : "Android 7.0",
				Location : "Portland"
			};
	}
}

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <Button onClick={() => (ReactDOM.render(<DeviceInfo />, document.getElementById("root")))}>
      <CardActionArea>
        <CardMedia className={classes.media}
          image={require("../Data/image.jpg")}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Samsung Galaxy
          </Typography>
          <Typography component="p">
            jadajadajada
          </Typography>
        </CardContent>
      </CardActionArea>
      </Button>
      
      <CardActions>
        <Button 
          style={{height: 50, marginRight: 15, marginLeft: 12}} 
          size="large" 
          variant="contained" 
          color="inherit" 
          className={classes.button}>
          Reserve
        </Button>
        <BookDevice/>
      </CardActions>
    </Card>
  );
}



MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
