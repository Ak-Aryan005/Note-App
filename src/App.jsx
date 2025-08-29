import { useEffect, useState } from 'react'
// import './App.css'
import { noteContext, NoteProvider } from './context/Usercontext'
import Noteform from './components/Noteform'
import Noteitem from './components/Noteitem'
import Search from './components/Search'


function App() {
  const [search, setsearch] = useState("")
const [notes,setnotes]=useState([])
const [val,setval]=useState("")
const [dis,setdis] = useState("")
  const [mode,setmode] = useState(false)

const add=(note,dis)=>{
  
  setnotes((prev)=> [...prev, {noteTitle: note,noteDis: dis ,id:Date.now(),color: colorChanger() ,iscompleted:true}])
  setval("")
  setdis("")
}

const deleteNote=(id)=>{
  setnotes(prev=> prev.filter((note)=>(note.id!==id)))
}

  const ak=(id)=>{
        setnotes(prev=> prev.map((notes)=> notes.id===id? {...notes, iscompleted: !notes.iscompleted  } : notes ) )
        console.log(notes)
  }

const update=(id,name,value)=>{
 
    setnotes(prev=> prev.map((notes)=> notes.id===id? {...notes, [name]: value } : notes ) )
  
}

const colorChanger=()=>{
  let colors=[ "#FFF176","#FFB74D","#F48FB1","#A5D6A7","#81D4FA","#CE93D8","#E0E0E0"]
  let random=Math.floor(Math.random() * colors.length)
  let ak=colors[random]
  return ak
}

const thememode=()=>{
   document.body.classList.toggle("darkmode");
   setmode(!mode)
}

useEffect(()=>{
const get= JSON.parse(localStorage.getItem("note"))
if(get && get.length>0){
  setnotes(get)
}
},[])

useEffect(()=>{
  localStorage.setItem("note",JSON.stringify(notes))
},[notes])


  return (
    <NoteProvider value={{add,deleteNote,val,setval,dis,setdis,ak,update,search,setsearch,thememode,mode}}>
     
       <Search />
         
   <h1 id='heading' > My Notes </h1>
  <div id='main'>
     <Noteform />
   
 {
 notes.filter((note)=>(note.noteTitle.toLowerCase().includes(search.toLowerCase().trim())
 )).map((note)=>(
     <Noteitem key={note.id} note={note}  />
    ))
   }

  </div>
   </NoteProvider>
  )
}

export default App
