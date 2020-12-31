import React,{createContext,useState} from 'react'
export const UserContext=createContext();
export const UserContextProvider = (props) => {
    const [user1,setUser1]=useState({});
    const [user2,setUser2]=useState({});
    const [userstatus1,setuserStatus1]=useState({});
    const [userstatus2,setuserStatus2]=useState({});
    const clearInputs=()=>{
        setUser1({});
        setUser2({});
    }
    return (
        <UserContext.Provider value={{user1,user2,setUser1,setUser2,clearInputs,userstatus1,setuserStatus1,userstatus2,setuserStatus2}}>
            {props.children}
        </UserContext.Provider>
    )
}

