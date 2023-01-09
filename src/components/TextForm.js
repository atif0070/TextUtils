import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick= ()=>{
  //  console.log("Uppercase was clicked" + text);
    let newText=text.toUpperCase(); 
    setText(newText);
    props.showAlert("Converted to Upper Case","success");
  }
  const handleLoClick= ()=>{
    //  console.log("Uppercase was clicked" + text);
      let newText=text.toLowerCase(); 
      setText(newText);
      props.showAlert("Converted to Lower Case","success");
    }
    const handleClearClick= ()=>{
      //  console.log("Uppercase was clicked" + text);
        let newText=''; 
        setText(newText);
        props.showAlert("Text Cleared","success");
      }
      const handleCopy=()=>{
        console.log("i am copy")
        var text =document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success");

      }
      const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");

      }
  const handleOnChange = (event)=>{
   // console.log("on Change");
    setText(event.target.value)
  }
  const [text, setText] = useState("");
  
  return (
      <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label">Example textarea</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >Conver to UpperCase</button>            
        <button className="btn btn-primary mx-2" onClick={handleLoClick} >Conver to UpperCase</button>            
        <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >Remove spaces</button>

    </div> 
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text Summary</h2>
      <p>{text.split(" ").length} words and {text.length  } characters</p>
      <p>{0.008 *text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
