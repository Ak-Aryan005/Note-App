import { useContext,createContext } from "react";

export const noteContext=createContext()

export const NoteProvider = noteContext.Provider


export const usenotes=()=>{
    return useContext(noteContext)
}