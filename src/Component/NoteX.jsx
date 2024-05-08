import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Navbar from '../Component/SubComponent/Navbar'

import '../Assests/css/NoteX.css'
import '../Assests/css/colors.css'

axios.defaults.withCredentials = true

const NoteX = () => {

  const [showPopup, setShowPopup] = useState(false);

  const [heading, setHeading] = useState()
  const [note, setNote] = useState()

  const [mynotes, setMynotes] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const handleAddNotes = () => {
    setShowPopup(true);
    setSelectedNoteId(null);
    setIsUpdate(false);
  }

  const handleCloseAddNotes = () => {
    setShowPopup(false);
    setHeading("");
    setNote("");
  }

  const submitNote = (e) => {
    e.preventDefault();
    if (isUpdate) {
      const backendUrl = process.env.REACT_APP_BACKEND_URL;
      axios.put(`${backendUrl}api/notes/updateNote/${selectedNoteId}`, { heading, note }, { withCredentials: true })
        .then(
          result => {
            setShowPopup(false);
            setSelectedNoteId(selectedNoteId);
            setIsUpdate(true);
            fetchNotes();
            setNote("")
            setHeading("")
          })
        .catch(err => console.log(err))
    }
    else {
      const backendUrl = process.env.REACT_APP_BACKEND_URL;
      axios.post(`${backendUrl}api/notes/createNotes`, { heading, note }, { withCredentials: true })
        .then(
          result => {
            // console.log(result)
            setNote("")
            setHeading("")
            fetchNotes();
          })
        .catch(err => console.log(err))
    }
  }

  const fetchNotes = () => {
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    axios.get(`${backendUrl}api/notes/getNotes`, { withCredentials: true })
      .then(result => {
        setMynotes(result.data);
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  const updateNotes = (noteId) => {
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    axios.get(`${backendUrl}api/notes/getNote/${noteId}`, { withCredentials: true })
      .then(result => {
        setIsUpdate(true);
        setShowPopup(true);
        setSelectedNoteId(noteId);
        setHeading(result.data.heading);
        setNote(result.data.note);
        // console.log(result.data);
      })
      .catch(err => console.log(err))
  }

  const deleteNotes = (noteId) => {
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    axios.delete(`${backendUrl}api/notes/deleteNote/${noteId}`, { withCredentials: true })
      .then(result => fetchNotes())
      .catch(err => console.log(err))
  }

  const filteredNotes = mynotes.filter((note) => {
    return (
      note.heading.toLowerCase().includes(searchInput.toLowerCase()) ||
      note.note.toLowerCase().includes(searchInput.toLowerCase())
    );
  });

  const shareNote =(noteId,noteheading,noteContent)=>{
    const subject = encodeURIComponent(noteheading);
    const body = encodeURIComponent(noteContent);
    window.location.href = `mailTo:?subject=${subject}&body=${body}`;
  }

  return (
    <div>
      <Navbar />
      <div className="notex-overall-container">


      <div className="notex-container">
        <div className="search">
          <input type="search" placeholder="Search.." value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
        </div>

        <div className="add-notes-button-container">
          <button className='add-notes-button' onClick={handleAddNotes}>Add notes</button>
        </div>
      </div>

      {
        showPopup && (
          <div className="add-notes-popup">
            <div className="add-notes-popup-content">
              <span className="close-add-notes" onClick={handleCloseAddNotes}>&times;</span>
              <h2>{isUpdate ? 'Edit Note' : 'Add Note'}</h2>
              <input type="text" placeholder='Notes heading..' name='heading' value={heading} onChange={(e) => setHeading(e.target.value)} />
              <textarea type="text" placeholder='Add a note..' name='note' value={note} onChange={(e) => setNote(e.target.value)} />
              <button onClick={submitNote}>{isUpdate ? 'Update Note' : 'Add Note'}</button>
            </div>
          </div>
        )
      }

      <div className='view-notes-container'>
        {
          filteredNotes.map((note, index) => {
            return <div key={index} className="view-notes">
              <h3>{note.heading}</h3>
              <p>{note.note}</p>
              <button onClick={() => updateNotes(note._id)}>Update note</button>
              <button onClick={() => deleteNotes(note._id)}>Delete</button>
              <button onClick={()=>shareNote(note._id, note.heading, note.note)}>Share Note</button>
              <p style={{marginTop:"15px"}}>{note.created_at}</p>
            </div>
          })
        }
      </div>
      </div>
    </div>
  )
}

export default NoteX