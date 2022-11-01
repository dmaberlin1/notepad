import styles from './NoteList.module.css'
import Note from "../../note/Note";


const NoteList = ({notes,deleteNote,toggleNote}) => {

    return(
      <div className={styles.NoteListContainer}>

          {notes.map((note)=>
          <Note toggleNote={toggleNote} key={note.id} deleteNote={deleteNote} note={note}></Note>
          )}


      </div>
    )

}
export default NoteList