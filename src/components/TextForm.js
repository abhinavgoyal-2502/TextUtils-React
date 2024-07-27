import React, { useState } from 'react'

export default function TextForm(props) {
    const handleupclick = () => {
        // console.log("uppercase done successfully");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleloclick = () => {
        // console.log("lowercase done successfully");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const textclear = () => {
        let newText = "";
        setText(newText);
    }
    const handleOnChange = (event) => {
        // console.log("On chnage");
        setText(event.target.value);
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    
    const speakstop = () => {
        window.speechSynthesis.cancel();
    }
    const alternateuppercase = () => {
        let msg = "";
        for (let i = 0; i < text.length; i++) {
            if (i % 2 !== 0) {
                // let t=text[i].toUpperCase();
                msg += text[i].toUpperCase();
            }
            else {
                msg += text[i];
            }

        }
        setText(msg);
    }

    const [text, setText] = useState('');
    // setText("My name is abhinav goyal");
    return (
        <>
            <div className='container' style={{ color: props.mode === 'light' ? '#110735' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'light' ? '#110735' : 'white' }} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleupclick}>Click to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleloclick}>Click to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={alternateuppercase}>Click to Alternate Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={textclear}>Clear text</button>
                <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
                <button type="submit" onClick={speakstop} className="btn btn-warning mx-2 my-2">Stop</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? '#110735' : 'white' }}>
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).length} words and {text.length} characters</p>
                <p> {0.008 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p> {text.length > 0 ? text : "Enter something to preview it here!!"} </p>
            </div>
        </>
    )
}