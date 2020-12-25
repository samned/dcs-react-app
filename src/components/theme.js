import { createMuiTheme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
      contrastText: green[800]
    },
    secondary: {
      main: green[800],
      contrastText: "#ffffff"
    }
  },
  shape: {
    borderRadius: 0
  }
});

export default theme;
