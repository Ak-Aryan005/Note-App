import React, { useState } from 'react'
import { usenotes } from '../context/Usercontext'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
function Search() {
  const {search,setsearch,thememode,mode} = usenotes()
  
  return (
    <div className="search-box" >
      <input type="text" name="search" id=""  placeholder="Search note" value={search} onChange={(e)=> setsearch(e.target.value)} />
          <button id='mode' onClick={thememode}  > { mode? <MdOutlineDarkMode /> : <MdOutlineLightMode />} </button>
    </div>
  )
}

export default Search
