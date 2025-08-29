import React from 'react'
import { RiSave3Line } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { usenotes } from '../context/Usercontext';
function Noteitem({note}) {
  const {deleteNote,ak,update}=usenotes()

  return (
       <div className='note-card'  >
        <input  name='ak' type="text" className='txt' placeholder='Title' style={{background: note.color}}  value={note.noteTitle} onChange={(e)=> update(note.id,'noteTitle',e.target.value) } readOnly={note.iscompleted}   />
          <textarea name="text"  className="note-text" placeholder=' Description...' style={{background: note.color}}    value={note.noteDis}  onChange={(e)=> update(note.id,'noteDis',e.target.value) } spellCheck={false} readOnly={note.iscompleted} ></textarea>
           
            <div className='note-actions' >
               <button onClick={()=>ak(note.id)} > {!note.iscompleted? <RiSave3Line /> : <MdEdit /> }  </button>
                  <button className="delete-button" aria-label="Delete" onClick={ ()=>deleteNote(note.id) }  >  <MdDelete /> </button>
            </div>
       </div>
  )
}

export default Noteitem
