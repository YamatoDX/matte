import React, { useState } from "react";
import { createTheme, ThemeProvider, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Checkbox,
  Typography,
  TextField,
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
          <Switch
            checked={state.isDark}
            color="primary"
            onChange={() =>
              setState({
                ...state,
                isDark: !state.isDark,
              })
            }
          />
          <Typography>Click the above switch to change theme</Typography>
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
            {/*  */}
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
            {/*  */}
            <FormLabel>
              Select if you think you are much alike goku himself
            </FormLabel>
            <FormControlLabel
              control={<Checkbox color="secondary" />}
              value={state.isGoku}
              label="Tick if you are goku"
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
