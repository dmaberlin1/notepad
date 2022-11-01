
import './App.css';
import uuid from "react-uuid"

import NoteForm from "./components/noteForm/NoteForm";
import {useState} from "react";
import NoteList from "./components/notelist/NoteList";
import NotesActions from "./components/NotesActions/NotesActions";

function id() {
    return uuid()
}




function App() {
    const [notes, setNotes] = useState([]);

    const addNoteHandler=(text)=>{
        const newNote={
            text:text,
            isCompleted:false,
            id:id()
        }
     setNotes([...notes,newNote])
    }

    const deleteNoteHandler = (id) => {
      setNotes(notes.filter((note)=>note.id !==id))
    }

    const resetNotesHandler=()=>{
        setNotes([])
    }


    const toggleNoteHandler = (id) => {
      setNotes(notes.map((note)=>{
          return note.id==id ?
            {...note,isCompleted: !note.isCompleted} :{...note}
      }))
    }

    const deleteCompletedNotesHandler=()=>{
        setNotes(notes.filter((note)=>!note.isCompleted))
    }

    const completedNotesCount=notes.filter((note)=>note.isCompleted).length



  return (
    <div className="App">




        <NoteForm addNote={addNoteHandler}></NoteForm>

        <NotesActions
          resetNotes={resetNotesHandler}
          deleteCompleteNotes={deleteCompletedNotesHandler}
          completedNotesExists={!!completedNotesCount}
        ></NotesActions>
        <NoteList toggleNote={toggleNoteHandler} notes={notes}></NoteList>
    </div>
  );
}

export default App;
