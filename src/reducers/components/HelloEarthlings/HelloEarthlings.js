import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import { withTheme, useTheme, makeStyles } from "@material-ui/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

export function HelloEarthlings() {
  const [isDialogOpen, toggleDialog] = useState(false);

  function handleLoginClick() {
    toggleDialog(prevIsDialogOpen => !prevIsDialogOpen);
  }

  const useStylesForApp = makeStyles({
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
    classWrapper: {
      margin: "2rem"
    },
    moreProducts: {
      textAlign: "center",
      marginBottom: "1rem"
    }
  });

  const classes = useStylesForApp();

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
            <span role="img" aria-label="hello">
              👾
            </span>
            Hello, Earthlings{" "}
            <span role="img" aria-label="welcome">
              👽
            </span>
          </Typography>
          <Button color="inherit" onClick={handleLoginClick}>
            Login
          </Button>
        </Toolbar>
      </AppBar>

      <AppHero headline="React-MUI Next Starter" subheadline="Happy Coding!" />

      <main>
        <Grid container spacing={24}>
          <Grid item md={4}>
            <AppMarketingBlurb title="MUI Theme Support and Hooks">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              consectetur odio diam, eleifend condimentum ipsum rutrum at.
              Vestibulum eget ornare lacus. Vivamus varius nulla at purus
              lacinia, in vehicula nibh ultricies. Nam vel mi et nulla posuere
              semper. Suspendisse urna risus, auctor a lectus dapibus,
              condimentum eleifend augue. Cras nec ornare sem. Maecenas
              efficitur purus in faucibus sagittis. Aenean sagittis est odio, at
              maximus nisi volutpat a. Aliquam aliquet aliquet ligula, in
              aliquet mi pulvinar id. Vivamus cursus nunc ut ornare pretium.
              Duis ut ligula purus. Nunc posuere dapibus commodo. Sed felis
              turpis, ornare in feugiat ac, ullamcorper quis nibh.
            </AppMarketingBlurb>
          </Grid>
          <Grid item md={4}>
            <AppMarketingBlurb title="React Hooks (alpha)">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              consectetur odio diam, eleifend condimentum ipsum rutrum at.
              Vestibulum eget ornare lacus. Vivamus varius nulla at purus
              lacinia, in vehicula nibh ultricies. Nam vel mi et nulla posuere
              semper. Suspendisse urna risus, auctor a lectus dapibus,
              condimentum eleifend augue. Cras nec ornare sem. Maecenas
              efficitur purus in faucibus sagittis. Aenean sagittis est odio, at
              maximus nisi volutpat a. Aliquam aliquet aliquet ligula, in
              aliquet mi pulvinar id. Vivamus cursus nunc ut ornare pretium.
              Duis ut ligula purus. Nunc posuere dapibus commodo. Sed felis
              turpis, ornare in feugiat ac, ullamcorper quis nibh. Sed ultrices
              arcu eu risus aliquam rutrum. Nulla ullamcorper, nunc id venenatis
              dapibus, lacus arcu vestibulum mi, ac rhoncus dui nunc sed sapien.
              Maecenas nec leo arcu. Suspendisse non vulputate ante.
            </AppMarketingBlurb>
          </Grid>
          <Grid item md={4}>
            <AppMarketingBlurb title="Redux State Management?">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              consectetur odio diam, eleifend condimentum ipsum rutrum at.
              Vestibulum eget ornare lacus. Vivamus varius nulla at purus
              lacinia, in vehicula nibh ultricies. Nam vel mi et nulla posuere
              semper. Suspendisse urna risus, auctor a lectus dapibus,
              condimentum eleifend augue. Cras nec ornare sem. Maecenas
              efficitur purus in faucibus sagittis. Aenean sagittis est odio, at
              maximus nisi volutpat a.
            </AppMarketingBlurb>
          </Grid>
        </Grid>
      </main>

      <AppCTA />

      <ProductCards />

      <div className={classes.moreProducts}>
        <Button color="secondary" variant="contained" size="large">
          View more Products Here
        </Button>
      </div>

      <AppFooter />

      <LoginDialog
        isDialogOpen={isDialogOpen}
        toggleDialog={handleLoginClick}
      />
    </div>
  );
}

export default withTheme()(HelloEarthlings);

export const AppHero = ({ headline, subheadline }) => {
  const theme = useTheme();

  const useStylesForAppHero = makeStyles({
    paperHero: {
      textAlign: "center",
      padding: theme.spacing.unit * 10,
      backgroundColor: theme.palette.primary.light
    },
    buttonWrapper: {
      marginTop: "2rem"
    }
  });

  const classes = useStylesForAppHero();

  return (
    <Paper className={classes.paperHero}>
      <Typography variant="h3" gutterBottom>
        {headline}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {subheadline} &nbsp;
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
  );
};

export const AppMarketingBlurb = ({ title, children }) => {
  const theme = useTheme();

  const useStylesForAppMarketingBlurb = makeStyles({
    copyContent: {
      marginTop: theme.spacing.unit * 5,
      padding: theme.spacing.unit * 2
    }
  });

  const classes = useStylesForAppMarketingBlurb();

  return (
    <section className={classes.copyContent}>
      <Typography variant="h6" align="center" gutterBottom>
        {title}
      </Typography>
      <Typography paragraph align="center" gutterBottom>
        {children}
      </Typography>
    </section>
  );
};

export const AppCTA = () => {
  const theme = useTheme();

  const useStylesForAppCTA = makeStyles({
    ctaWrapper: {
      textAlign: "center",
      backgroundColor: theme.palette.secondary.main,
      marginTop: theme.spacing.unit * 5,
      padding: theme.spacing.unit * 2
    }
  });

  const classes = useStylesForAppCTA();
  return (
    <Paper className={classes.ctaWrapper}>
      <Typography variant="h5" align="center" paragraph gutterBottom>
        Ready to build something out of this world?
      </Typography>
      <Button variant="contained" color="primary" size="large">
        Get Started
      </Button>
    </Paper>
  );
};

export const ProductCards = () => {
  const products = [
    {
      title: "Product A",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur odio diam, eleifend condimentum ipsum rutrum at. Vestibulum eget ornare lacus."
    },
    {
      title: "Product XYZ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur odio diam, eleifend condimentum ipsum rutrum at. Vestibulum eget ornare lacus."
    },
    {
      title: "Product -99",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur odio diam, eleifend condimentum ipsum rutrum at. Vestibulum eget ornare lacus."
    }
  ];

  const useStylesForProductCards = makeStyles({
    card: {
      maxWidth: 345,
      display: "inline-block",
      margin: "2rem .5rem"
    }
  });

  const classes = useStylesForProductCards();

  return products.map(product => {
    return (
      <Card key={product.title} className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.title}
            </Typography>
            <Typography component="p">{product.description}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  });
};

export const AppFooter = () => {
  const theme = useTheme();

  const useStylesForAppFooter = makeStyles({
    footer: {
      backgroundColor: theme.palette.primary.light,
      minHeight: "120px"
    },
    dark: {
      backgroundColor: theme.palette.primary.main,
      minHeight: "40px"
    }
  });

  const classes = useStylesForAppFooter();

  return (
    <section>
      <Paper className={classes.footer} />
      <Paper className={classes.dark}>
        <Typography align="center" paragraph gutterBottom>
          <span role="img" aria-label="party like its 2019">
            🎉
          </span>
          2019
        </Typography>
      </Paper>
    </section>
  );
};

export const LoginDialog = ({ isDialogOpen, toggleDialog }) => {
  return (
    <Dialog disableBackdropClick open={isDialogOpen} onClose={toggleDialog}>
      <DialogTitle>Login for awesomeness</DialogTitle>
      <DialogContent>
        <DialogContentText>Coming soon</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleDialog}>OK</Button>
      </DialogActions>
    </Dialog>
  );
};
