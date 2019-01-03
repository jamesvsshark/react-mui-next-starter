import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export class App extends React.Component {
  handleClose = () => {
    this.props.toggleDialogue();
  };

  handleClick = () => {
    this.props.toggleDialogue();
  };

  render() {
    const { classes, sample: state } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              React-Redux-MUI-Starter
            </Typography>
            <Button color="inherit" onClick={this.handleClick}>
              Login
            </Button>
          </Toolbar>
        </AppBar>

        <Paper className={classes.paperHero}>
          <Typography variant="h3" gutterBottom>
            React-Redux-MUI-Starter
          </Typography>
          <Typography variant="h5" gutterBottom>
            Happy coding &nbsp;
            <span role="img" aria-label="party like its 2019">
              🎉
            </span>
          </Typography>

          <div className={classes.buttonWrapper}>
            <Button variant="contained" color="secondary" size="large">
              Get Started
            </Button>

            <Button color="secondary" size="large">
              Learn More
            </Button>
          </div>
        </Paper>

        <div className={classes.copyContent}>
          <Grid container spacing={24}>
            <Grid item md={4}>
              <Typography variant="h6" gutterBottom>
                Theme Support
              </Typography>
              <Typography paragraph gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                consectetur odio diam, eleifend condimentum ipsum rutrum at.
                Vestibulum eget ornare lacus. Vivamus varius nulla at purus
                lacinia, in vehicula nibh ultricies. Nam vel mi et nulla posuere
                semper. Suspendisse urna risus, auctor a lectus dapibus,
                condimentum eleifend augue. Cras nec ornare sem. Maecenas
                efficitur purus in faucibus sagittis. Aenean sagittis est odio,
                at maximus nisi volutpat a. Aliquam aliquet aliquet ligula, in
                aliquet mi pulvinar id. Vivamus cursus nunc ut ornare pretium.
                Duis ut ligula purus. Nunc posuere dapibus commodo. Sed felis
                turpis, ornare in feugiat ac, ullamcorper quis nibh. Sed
                ultrices arcu eu risus aliquam rutrum. Nulla ullamcorper, nunc
                id venenatis dapibus, lacus arcu vestibulum mi, ac rhoncus dui
                nunc sed sapien. Maecenas nec leo arcu. Suspendisse non
                vulputate ante.
              </Typography>
            </Grid>
            <Grid item md={4}>
              <Typography variant="h6" gutterBottom>
                React Hooks (alpha)
              </Typography>
              <Typography paragraph gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                consectetur odio diam, eleifend condimentum ipsum rutrum at.
                Vestibulum eget ornare lacus. Vivamus varius nulla at purus
                lacinia, in vehicula nibh ultricies. Nam vel mi et nulla posuere
                semper. Suspendisse urna risus, auctor a lectus dapibus,
                condimentum eleifend augue. Cras nec ornare sem. Maecenas
                efficitur purus in faucibus sagittis. Aenean sagittis est odio,
                at maximus nisi volutpat a. Aliquam aliquet aliquet ligula, in
                aliquet mi pulvinar id. Vivamus cursus nunc ut ornare pretium.
                Duis ut ligula purus. Nunc posuere dapibus commodo. Sed felis
                turpis, ornare in feugiat ac, ullamcorper quis nibh. Sed
                ultrices arcu eu risus aliquam rutrum. Nulla ullamcorper, nunc
                id venenatis dapibus, lacus arcu vestibulum mi, ac rhoncus dui
                nunc sed sapien. Maecenas nec leo arcu. Suspendisse non
                vulputate ante.
              </Typography>
            </Grid>
            <Grid item md={4}>
              <Typography variant="h6" gutterBottom>
                Redux State Management
              </Typography>
              <Typography paragraph gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                consectetur odio diam, eleifend condimentum ipsum rutrum at.
                Vestibulum eget ornare lacus. Vivamus varius nulla at purus
                lacinia, in vehicula nibh ultricies. Nam vel mi et nulla posuere
                semper. Suspendisse urna risus, auctor a lectus dapibus,
                condimentum eleifend augue. Cras nec ornare sem. Maecenas
                efficitur purus in faucibus sagittis. Aenean sagittis est odio,
                at maximus nisi volutpat a.
              </Typography>
              <Typography paragraph gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                consectetur odio diam, eleifend condimentum ipsum rutrum at.
                Vestibulum eget ornare lacus. Vivamus varius nulla at purus
                lacinia, in vehicula nibh ultricies. Nam vel mi et nulla posuere
                semper. Suspendisse urna risus, auctor a lectus dapibus,
                condimentum eleifend augue.
              </Typography>
            </Grid>
          </Grid>
        </div>

        <Dialog open={state.openDialogue} onClose={this.handleClose}>
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>1-2-3-4-5</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>OK</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  sample: PropTypes.object,
  toggleDialogue: PropTypes.func
};

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  paperHero: {
    textAlign: "center",
    padding: theme.spacing.unit * 10,
    backgroundColor: theme.palette.primary.light
  },
  buttonWrapper: {
    marginTop: "2rem"
  },
  copyContent: {
    textAlign: "center",
    marginTop: theme.spacing.unit * 5,
    padding: theme.spacing.unit * 2
  }
});

const mapStateToProps = state => ({
  sample: state.sample
});

const mapDispatchToProps = dispatch => ({
  toggleDialogue: todo => {
    dispatch({ type: "TOGGLE_DIALOGUE" });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(App));
