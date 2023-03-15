import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import "../styles/Note.css";

const Note = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const handleChange = (e) => {
    setNote(e.target.value);
  };
  const changeNotes = (newNotes) =>{
    fetch("http://localhost:5001/api/notes/" + localStorage.getItem("email"), {
      method: "POST",
      body: JSON.stringify({ notes: newNotes }),
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      return response.json();
    }).then((res) => {
      //console.log(res);
      setNotes(newNotes);
    }).catch((err) => {
      console.log(err);
    });
  }

  const handleClick = () => {
    if (note === "") {
      alert("Please enter a note");
      return;
    }
    let newNotes = [...notes, note];
    changeNotes(newNotes);

    setNote("");
  };
  const handleDelete = (index) => {
    if(!window.confirm("Are you sure you want to delete this note?")) return;
    const newNotes = notes.filter((n, i) => i !== index);
    changeNotes(newNotes);
    setNotes(newNotes);
  };
  const handlePreview = (note) => {
    alert(note);
  };
  useEffect(() => {
    fetch("http://localhost:5001/api/notes/" + localStorage.getItem("email"), {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      return response.json();
    }).then((res) => {
      //console.log(res.data[0].note.length);
      if(res.data[0].note.length > 0){
        setNotes(res.data[0].note);
      }
        
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  useEffect(() => {
    if(localStorage.getItem("email") === null){
      window.location.href = "/login";
    }
  },[])
  

  return (
    <>
      <NavBar index="3"/>
      <h1 className="note-pad-title">Notes: </h1>
      <div className="note-pad" >
        {notes.length !== 0 ? (
          <div className="note-list">
            {notes.map((n, index) => (
              <>
                <div key={index} className="note-item">
                  <h6>Note: {index + 1}</h6>
                  <pre style={{  textOverflow: "ellipsis", overflow: "hidden" }}>{n}</pre>
                  <div className="note-btns">
                    <button
                      className="note-btn preview"
                      onClick={() => handlePreview(n)}
                    >
                      View
                    </button>

                    <button
                      className="note-btn delete"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </>
            ))}
          </div>
        ) : (
          <div className="empty" >
            <div className="notes-empty"></div>
            <center style={{"color":"#111", "fontSize":"bold" ,"paddingTop":"24px"}}>Empty Notes! Add Notes to the list.</center>
          </div>
        )}
        <div className="note">
          <textarea
            className="note-textarea"
            placeholder="Write your note here..."
            value={note}
            onChange={handleChange}
          />
          <button className="note-button" onClick={handleClick}>
            Add Note
          </button>
        </div>
      </div>
    </>
  );
};

export default Note;
