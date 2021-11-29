import React, { useEffect, useState } from "react";
import { Container, Divider, Grid, Typography } from "@mui/material";
import NoteCard from "../components/NoteCard";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles((theme) => ({
//   gridMenu: {
//     overflow: "scroll",
//     height: "100%",
//   },
// }));

export default function Notes(props) {
  const [notes, setNotes] = useState([]);
  // const classes = useStyles();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("http://localhost:8080/notes")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);// notes
        return setNotes(data);
      });
  };

  const handleDeleteNote = (id) => {
    fetch("http://localhost:8080/notes/" + id, {
      method: "DELETE",
    })
      .then(() => {
        // 1. getData() or
        // 2. filter out existing notes
        setNotes(notes.filter((note) => note.id !== id));
      })
      .catch((err) => console.log(err));
  };
  return (
    <Container>
      <Typography variant="h6">My Notes</Typography>
      <Divider style={{ marginBottom: 3 }} />
      <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid item key={note.id} xs={12} md={6} lg={4}>
            <NoteCard note={note} deleteNote={handleDeleteNote} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
