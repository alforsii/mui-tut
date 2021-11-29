import { DeleteOutline } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import { blue, green, pink, yellow } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";

const useStyles = makeStyles({
  card: {
    // border: ({ note }) => {
    //   if (note.category === "work") {
    //     return "1px solid purple";
    //   } else if (note.category === "todo") {
    //     return "1px solid red";
    //   } else if (note.category === "money") {
    //     return "1px solid green";
    //   } else {
    //     return "1px solid blue";
    //   }
    // },
    maxWidth: "400px",
  },
  deleteIcon: {
    transition: "linear",
    "&:hover": {
      color: "red",
    },
  },
});

export default function NoteCard({ note, deleteNote }) {
  const classes = useStyles({ note });
  const [open, setOpen] = useState(true);
  const bgColors = {
    work: pink[400],
    todo: yellow[500],
    reminders: blue[300],
    money: green[700],
  };
  return (
    <Card className={classes.card} elevation={3}>
      <CardHeader
        title={note.title}
        subheader={note.category}
        action={
          <IconButton onClick={() => deleteNote(note.id)}>
            <DeleteOutline className={classes.deleteIcon} />
          </IconButton>
        }
        avatar={
          <Avatar sx={{ bgcolor: bgColors[note.category] }}>
            {note.title[0].toUpperCase()}
          </Avatar>
        }
      />
      <CardContent>
        <Typography
          onClick={() => setOpen(!open)}
          noWrap={open}
          color="GrayText"
          variant="body2"
        >
          {note.detail}
        </Typography>
      </CardContent>
    </Card>
  );
}
