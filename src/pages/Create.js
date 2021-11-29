import React, { useState } from "react";
import {
  Button,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },

  title: {
    margin: 2,
  },
  detail: {
    margin: 2,
  },
}));

function CreateNote(props) {
  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [category, setCategory] = useState("work");
  const [error, setError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setError(false);
    if (title && detail) {
      fetch("http://localhost:8080/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, detail, category }),
      })
        .then(() => props.history.push("/"))
        .catch((err) => console.log(err));
    } else {
      setError(true);
    }
  };
  return (
    <Container className={classes.root}>
      <Typography variant="h6">Create a Note</Typography>
      <Divider />
      <form onSubmit={onSubmit} noValidate autoComplete="off">
        <div className={classes.title}>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            label="Title"
            fullWidth
            error={!error || title ? false : true}
          />
        </div>
        <div className={classes.detail}>
          <TextField
            onChange={(e) => setDetail(e.target.value)}
            label="Detail"
            fullWidth
            multiline
            rows={4}
            error={!error || detail ? false : true}
          />
        </div>
        <FormControl fullWidth>
          <FormLabel>Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ display: "block" }}
          >
            <FormControlLabel control={<Radio />} label="Todo" value="todo" />
            <FormControlLabel control={<Radio />} label="Work" value="work" />
            <FormControlLabel control={<Radio />} label="Money" value="money" />
            <FormControlLabel
              control={<Radio />}
              label="Reminders"
              value="reminders"
            />
          </RadioGroup>
        </FormControl>
        <Button type="submit" variant="contained" color="secondary">
          Submit
        </Button>
      </form>
    </Container>
  );
}
// export default withStyles(styles)(CreateNote);
export default CreateNote;
