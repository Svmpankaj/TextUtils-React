import React, { useState } from 'react'


export default function TextFrom(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLowerClick = () => {
        // console.log("handle lower case");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }
    const handleClear = () => {
        console.log("Clear text");
        let newText = '';
        setText(newText);
        props.showAlert("Clear text", "success");

    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    const handleCopy = () => {
        console.log("I am a copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copy text here","success");

    }
    
    const handleExtraSpace = () => {
            console.log("Extra space");
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
        props.showAlert("Remove Extra spaces", "success");
    }
    


    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
            <div className='contaniner'style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'light', color:  props.mode==='dark'?'white':'#042743'}} id='myBox' rows='8'></textarea>
                    <button disabled={text.length ===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
                    <button disabled={text.length ===0} className="btn btn-primary mx-2 my-2" onClick={handleLowerClick}>Convert to LowerCase</button>
                    <button disabled={text.length ===0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear text</button>
                    <button disabled={text.length ===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
                    <button disabled={text.length ===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
                </div>
                <div className="container my-2" style= {{color: props.mode==='dark'?'white':'#042743'}}>
                    <h2>Your text summary</h2>
                    <p>{text.split(" ").filter((element) => {return element.length !==0}).length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").length} Minutes read</p>
                    <h3>Preview</h3>
                    <p>{text.length > 0? text : "Nothing to preview"}</p>
                </div>
            </div>
        </>
    )
}
