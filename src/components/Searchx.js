import React,{useState,useContext} from 'react'
import {UserContext} from '../UserContext'
function Searchx() {
    const [name,setName]=useState("");
    const {setUser2}=useContext(UserContext);
    const handleChange=(e)=>{
        setName(e.target.value);
    }
    const handleClick=async e=>{
        e.preventDefault();
        const profile=await fetch(`https://codeforces.com/api/user.info?handles=${name}`);
        const profileJson=await profile.json();
        if(profileJson){
            setUser2(profileJson.result[0])
        }
    }
    return (
        <div style={{paddingLeft:"3rem"}}>
            <div >
            <form onSubmit={handleClick}>
                <div className="ui category search">
                    <div className="ui icon input">
                       <input className="prompt" type="text" value={name} onChange={handleChange} placeholder="Codeforces handle"/>
                       <i class="search icon"></i>
                    </div>
                </div>   
            </form>
       
</div>
</div>
        
        
    )
}

export default Searchx