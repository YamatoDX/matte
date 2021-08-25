import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  createTheme,
  ThemeProvider,
  Container,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Checkbox,
  Typography,
  TextField,
  Button,
  Switch as MaterialSwitch,
  Grid,
  Paper,
} from "@material-ui/core";
const useStyles = makeStyles({
  labelStyles: {
    marginBottom: "20",
  },
});

export default function App() {
  const classes = useStyles();
  const defaultState = {
    isDark: false,
    currentName: "",
    currentGender: "",
    isGoku: false,
  };
  const [state, setState] = useState(defaultState);
  const theme = createTheme({
    palette: {
      type: state.isDark ? "dark" : "light",
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <Paper>One</Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper>Two</Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper>Three</Paper>
            </Grid>
          </Grid>
          <MaterialSwitch
            checked={state.isDark}
            color="primary"
            onChange={() =>
              setState({
                ...state,
                isDark: !state.isDark,
              })
            }
          />
          <Typography variant="h3" component="h3">
            Click the above switch to change theme
          </Typography>
          {/*  */}
          <FormControl variant="outlined">
            <FormLabel className={classes.labelStyles}>
              This is the first label people
            </FormLabel>
            <TextField
              type="text"
              onChange={(e) =>
                setState({
                  ...state,
                  currentName: e.target.value,
                })
              }
              label="Current Name"
              required={true}
              helperText="Fill out with your current Name"
              variant="outlined"
            />
            {/* RadioGroup starts here */}
            <RadioGroup
              onChange={(e) =>
                setState({ ...state, currentGender: e.target.value })
              }
            >
              <FormLabel>Select your gender: </FormLabel>
              <FormControlLabel
                control={<Radio color="primary" />}
                value="male"
                label="Male"
              />
              <FormControlLabel
                control={<Radio color="primary" />}
                value="female"
                label="female"
              />
              <FormControlLabel
                control={<Radio color="primary" />}
                value="others"
                label="others"
              />
            </RadioGroup>
            {/* RadioGroup ends here! */}
            <FormLabel>
              Select if you think you are much alike goku himself
            </FormLabel>
            <FormControlLabel
              control={<Checkbox color="secondary" />}
              value={state.isGoku}
              label="Tick if you are goku"
              onChange={() =>
                setState({
                  ...state,
                  isGoku: !state.isGoku,
                })
              }
            />
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => {
                console.log(state);
                setState(defaultState);
              }}
            >
              SUBMIT
            </Button>
          </FormControl>
        </Container>
      </ThemeProvider>
    </>
  );
}
