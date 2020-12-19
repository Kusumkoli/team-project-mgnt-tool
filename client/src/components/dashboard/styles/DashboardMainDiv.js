import { makeStyles } from "@material-ui/styles";
import tinycolor from "tinycolor2";

export default makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    padding: theme.spacing(0),
    margin: theme.spacing(0),
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  listItem: {
  padding: theme.spacing(0),
  margin: theme.spacing(0),
  },
  layoutContainer: {
    height: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing(2),
    border: "1px dashed",
    borderColor: theme.palette.primary.main,
    position: "relative",
  },
  layoutText: {
    color: tinycolor(theme.palette.background.light)
      .darken()
      .toHexString(),
  },
  layoutButtonsRow: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  layoutButton: {
    backgroundColor: theme.palette.background.light,
    width: 125,
    height: 50,
    outline: "none",
    border: "none",
  },
  layoutButtonActive: {
    backgroundColor: tinycolor(theme.palette.background.light)
      .darken()
      .toHexString(),
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: theme.spacing(2),
  },
  notificationCallButton: {
    color: "white",
    marginBottom: theme.spacing(1),
    textTransform: "none",
  },
  codeContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(2),
  },
  codeComponent: {
    flexGrow: 1,
  },
  notificationItem: {
    marginTop: theme.spacing(2),
  },
  notificationCloseButton: {
    position: "absolute",
    right: theme.spacing(2),
  },
  toastsContainer: {
    width: 400,
    marginTop: theme.spacing(6),
    right: 0,
  },
  progress: {
    visibility: "hidden",
  },
  notification: {
    display: "flex",
    alignItems: "center",
    background: "transparent",
    boxShadow: "none",
    overflow: "visible",
  },
  notificationComponent: {
    paddingRight: theme.spacing(4),
  },
  buttonStyle: {
    marginTop: theme.spacing(1),
    height: '50px',
    position: 'relative',
  },
  textType: {
    textAlign:'left',
    fontSize: 15,
    fontWeight: 400,
    textTransform: 'none',
    paddingLeft: theme.spacing(1),
  },
  float: {
    position: 'absolute',
    right: 0,
    marginRight: theme.spacing(1),
  },
  listItem: {
    paddingLeft: 'none',
    paddingRight: 'none',
  },
  rightSidebar: {
    width: '70px',
    padding: theme.spacing(2),
    boxShadow: "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A", 
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  rightSidebarOpen: {
    width: '300px',
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  outerDiv: {
    display: 'flex',
    overflow: 'hidden',
  },
  mainContent: {
    padding: theme.spacing(4),
    width: '100%',
    backgroundImage: '-webkit-linear-gradient(-90deg, #e0eafb 0%, #e0eafb 0%, #f4f8f9 30%, #f4f8f9 100% )',
  },
  displayFlex: {
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
  },
  topGridItem: {
    color: 'white',
    backgroundColor: '#4e9ffa',
    display: 'flex',
    borderRadius: theme.spacing(1),
    marginTop: theme.spacing(2),
    marginRIght: theme.spacing(4),
    marginBottom: theme.spacing(2),
    "&:hover": {
      cursor: 'pointer',
      borderBottom: "5px solid #4e9ffa",
    }
  }, 
  topGridItem2: {
    color: 'white',
    backgroundColor: '#4e9ffa',
    display: 'flex',
    borderRadius: theme.spacing(1),
    marginTop: theme.spacing(2),
    marginRIght: theme.spacing(4),
    marginBottom: theme.spacing(2),
  }, 
  hover1: {
    "&:hover": {
      cursor: 'pointer',
      borderBottom: "5px solid white",
    }
  }

}));