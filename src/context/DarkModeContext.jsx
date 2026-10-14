/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

function DarkModeProvider({children}){
    const [isDarkMode,setIsDarkMode] = useLocalStorageState(false,'isDark')

    useEffect(function(){
        if(isDarkMode){
            document.documentElement.classList.add('dark-mode')
            document.documentElement.classList.remove('light-mode')
        }
        else {
            document.documentElement.classList.add('light-mode')
            document.documentElement.classList.remove('dark-mode')
        }
    },[isDarkMode])


    function toggleDarkMode() {
        setIsDarkMode(x => !x);
    }


    return(
        <DarkModeContext.Provider value={{isDarkMode,toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}

function useDarkMode(){
    const context = useContext(DarkModeContext);

    if(context === undefined) throw new Error("darkmode used outside darkmode provider")

        return context;
}


export {DarkModeProvider,useDarkMode}


// const darkModeContext = createContext()

// function DarkModeProvider({children}){
//     const [value,setValue] = useLocalStorageState(false,'isDark')

//     useEffect(()=>{
//         if(value){
//             document.documentElement.classList.add('dark-mode');
//             document.documentElement.classList.remove('light-mode');
//         }
//         else{
            
//             document.documentElement.classList.add('light-mode');
//             document.documentElement.classList.remove('dark-mode');
//         }
//     },[value])

//     function toggleDarkMode(){
//         setValue(x => !x)
//     }
//     return(
//         <darkModeContext.Provider value={{toggleDarkMode,value}}>
//             {children}
//         </darkModeContext.Provider>
//     )
// }

// function useDarkMode(){
//     const context = useContext(darkModeContext);

//     if(!context) throw new Error('context used outside boundry')

//         return context;
// }

// export {useDarkMode,DarkModeProvider}


