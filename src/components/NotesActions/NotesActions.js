
import {RiDeleteBin2Line,RiRefreshLine} from "react-icons/ri";
import styles from './NotesActions.module.css'
import Button from "../UI/Button";

const NotesActions=({resetNotes,deleteCompletedNotes,completedNotesExists})=>{
    return (
      <div className={styles.notesActionsContainer}>
          <Button title={'Reset Notes'} onClick={resetNotes}><RiRefreshLine></RiRefreshLine></Button>
          <Button title={'Clear Completed Todos'} onClick={deleteCompletedNotes} disabled={!completedNotesExists}><RiDeleteBin2Line></RiDeleteBin2Line></Button>

      </div>
    )

}
export default NotesActions