import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter } from "react-router-dom";

const Navbar = (props) => {
  const { history } = props;

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      [theme.breakpoints.down("xs")]: {
        flexGrow: 1,
      },
    },
    headerOptions: {
      display: "flex",
      flex: 1,
      justifyContent: "space-evenly",
    },
  }));

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURl) => {
    history.push(pageURl);
    setAnchorEl(null);
  };

  const handleButtonClick = (pageURl) => {
    history.push(pageURl);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            NewsFeed
          </Typography>
          <div>
            {isMobile ? (
              <>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  <MenuItem onClick={() => handleMenuClick("/home")}>
                    Home
                  </MenuItem>
                  <MenuItem onClick={() => handleMenuClick("/post/:id")}>
                    Post Details
                  </MenuItem>
                  <MenuItem onClick={() => handleMenuClick("/notfound")}>
                    About
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <div className={classes.headerOptions}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleButtonClick("/home")}
                >
                  Home
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleButtonClick("/post/:id")}
                >
                  Post Details
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleButtonClick("/notfound")}
                >
                  About
                </Button>
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Navbar);
