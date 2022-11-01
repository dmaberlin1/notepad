import styles from "./NoteForm.module.css"
import {useState} from "react";


const NoteForm = ({addNote}) => {

    const [text, setText] = useState('');

    const onSubmitHandler=(event)=>{
        event.preventDefault()
        addNote(text)
        setText('')
    }

    return(
    <>
      <div className={styles.NoteFormContainer}>
        <form action="" className={styles.form} onSubmit={onSubmitHandler}>
            <textarea
              value={text} onChange={(e)=>setText(e.target.value)}
              name=""
              className={styles.inputForm} id="textarea" cols="30" rows="10"
              placeholder={'Enter New Note'}
            >

            </textarea>
            <button type={"submit"} title='Submit' className={styles.button}>Submit</button>
        </form>
      </div>
    </>
  )
}

export default NoteForm