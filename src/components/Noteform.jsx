import React, { useState } from 'react'
import { RiSave3Line } from "react-icons/ri";
import { usenotes } from '../context/Usercontext';

{/* <MdEdit /> */}

function Noteform() {
const {add,val,setval,setdis,dis}= usenotes()

  return (
    <div className='note-card' >
        <input name='ak' type="text" className='txt' placeholder='Title' value={val}  onChange={(e)=>setval(e.target.value)}  />
       <textarea name="text"  className="note-text" placeholder=' Description...' value={dis}  onChange={(e)=>setdis(e.target.value)}  spellCheck={false} ></textarea>
         <div className='note-actions' >
            <button  onClick={()=> val.trim()?  add(val,dis) : "" } > <RiSave3Line /> </button>
               {/* <button className="delete-button" aria-label="Delete"  >  <MdDelete /> </button> */}
         </div>
    </div>
  )
}

export default Noteform
