
import { useState } from 'react';
import generateRandomValue from './help.js'
import {Password }from './Password.jsx';
import './Passwordgenerate.css';

export default function PasswordGenerate(){
    let [password,setPassword] = useState([]);
    let [range,setRange]=useState("");
    let [UpperCase,setUpperCase]=useState(false);
    let [LowerCase,setLowerCase]=useState(false);
    let [NumberCase,setNumberCase]=useState(false);
    let [SymbolCase,setSymbolCase]=useState(false);
    let [message,setMessage]=useState("");
    let [messageType,setMessageType]=useState("");

    
    let submit =()=>{
        const options={
            UpperCase,
            LowerCase,
            NumberCase,
            SymbolCase,
        }
        let password=generateRandomValue(range, options);
        setPassword(password);
        
    }

    const showMessage = (msg, type) => {
        setMessage(msg);
        setMessageType(type);

        // Hide the message after 3 seconds
        setTimeout(() => {
            setMessage("");
            setMessageType("");
        }, 3000);
    };

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(Password);
            setMessage("Text copied to clipboard!");
            setTimeout(() => setMessage(""), 2000);
            showMessage("Copied!", "success"); 
        } catch (err) {
            setMessage("Failed to copy text.");
            console.error("Error copying text: ", err);
        }
    };
         
    
    return (
        <div className='outerdiv' >
        <h4><b><i>PASSWORD GENERATOR</i></b></h4>
        <br />
        <div className='input'>
     {<Password password={password}/>}
     </div><br /><br />
     <div className='range'>
        <label htmlFor="passLen"><b>Password Length:</b> {range}</label><br />
        <input type="range" name="passLen" id="passLen" value={range} min={3} max={20} onChange={(e)=>setRange(e.target.value)}/><br />
        </div>
        <div className='clickbox'>
        <b> <h4>Select at least one :</h4> </b>
       <input type="checkbox" onChange={(e)=> setUpperCase((e.target.checked))} checked={UpperCase} />Include Uppercase Letter<br />
       <input type="checkbox"  onChange={(e)=> setLowerCase(e.target.checked)} checked={LowerCase }/>Include Lowercase Letter<br/>
       <input type="checkbox" onChange={(e)=> setNumberCase((e.target.checked))} checked={NumberCase} />Include Numbercase Letter <br />
       <input type="checkbox"  onChange={(e)=> setSymbolCase(e.target.checked)} checked={SymbolCase}  />Include Symbole Letter <br />
       </div><br /><br />
       <div className="btn">
       <button className='btn-submit' onClick={submit}> Generate</button>
       <button className='btn-copy' onClick={copy} > Copy</button>
       {message && (
                <div className={`flash-message ${messageType}`}>
                    {message}
                </div>
            )}
       </div>
         
        </div>
    )
}
