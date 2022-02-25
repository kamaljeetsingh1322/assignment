import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import WorkIcon from "@mui/icons-material/Work";
import HomeIcon from "@mui/icons-material/Home";
import QuizIcon from "@mui/icons-material/Quiz";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@mui/material";
import CheckCircle from "@mui/icons-material/CheckCircle";
import { useRouter } from "next/router";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const router = useRouter();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <h1 style={{ marginLeft: "70vh" }}>Assignment</h1>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <h2 style={{ marginRight: "80px", marginTop: "20px" }}>Turing</h2>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List>
          <ListItem>
            <ListItemIcon>
              <Button style={{ color: "inherit", marginLeft: "0px" }}>
                <WorkIcon />
                <span style={{ marginLeft: "24px" }}>Available for Jobs</span>
              </Button>
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Button style={{ color: "inherit", marginLeft: "0px" }}>
                <HomeIcon />
                <span style={{ marginLeft: "24px" }}>Home</span>
              </Button>
            </ListItemIcon>
          </ListItem>
        </List>

        <Divider />
        <List>
          <ListItem>
            <ListItemIcon>
              <Button
                onClick={() => {
                  router.push("/ProfilePage");
                }}
                style={{ color: "inherit", marginLeft: "0px" }}
              >
                <CheckCircle />
                <span style={{ marginLeft: "24px" }}>Profile</span>
              </Button>
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Button
                onClick={() => {
                  router.push("/TuringTest");
                }}
                style={{ color: "inherit", marginLeft: "0px" }}
              >
                <QuizIcon />
                <span style={{ marginLeft: "24px" }}>Turing Test</span>
              </Button>
            </ListItemIcon>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <ListItemIcon>
              <Button style={{ color: "inherit", marginLeft: "0px" }}>
                <WorkOutlineIcon />
                <span style={{ marginLeft: "24px" }}>Jobs</span>
              </Button>
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Button style={{ color: "inherit", marginLeft: "0px" }}>
                <SettingsIcon />
                <span style={{ marginLeft: "24px" }}>Settings</span>
              </Button>
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
