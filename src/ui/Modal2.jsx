import { createContext, useState } from "react"


const ModalContext = createContext();

export default function Modal2({children}) {
    const [openName,setOpenName] = useState("");
    const close = () => setOpenName("")
  return (
    <ModalContext.Provider value={{openName,close}}>
        {children}
    </ModalContext.Provider>
  )
}

Modal2.Open()