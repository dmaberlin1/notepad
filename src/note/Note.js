import styles from './Note.module.css'
import {RiCheckFill, RiDeleteBin2Line, RiTodoFill} from "react-icons/ri";


const Note = ({note,deleteNote,toggleNote}) => {

    return(
      <div className={styles.note}>
          <RiTodoFill className={styles.noteIcon}></RiTodoFill>
          <div className={styles.noteText} >{note.text}</div>
          <RiDeleteBin2Line onClick={()=>deleteNote(note.id)} className={styles.deleteIcon}></RiDeleteBin2Line>
          <RiCheckFill onClick={()=>toggleNote(note.id)} className={styles.checkIcon}></RiCheckFill>


      </div>
    )

}

export default Note