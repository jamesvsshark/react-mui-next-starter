import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

class App extends React.Component {
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
        <Typography variant="display1" gutterBottom>
          React-Redux-MUI-Starter
        </Typography>
        <Typography variant="subheading" gutterBottom>
          Happy coding
        </Typography>
        <br />
        <Dialog open={state.openDialogue} onClose={this.handleClose}>
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>1-2-3-4-5</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>

        <Button variant="raised" color="secondary" onClick={this.handleClick}>
          Super Secret Password
        </Button>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  todos: PropTypes.array,
  toggleTodo: PropTypes.func
};

const styles = theme => ({
  root: {
    textAlign: "center",
    padding: theme.spacing.unit * 10
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

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(App)
);
