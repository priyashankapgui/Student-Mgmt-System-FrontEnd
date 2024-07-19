import React, { useState,useEffect } from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Paper, Button, Alert } from "@mui/material";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import LoopRoundedIcon from '@mui/icons-material/LoopRounded';
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';

import {postStudent} from "../../apis/studentApi/studentApi"
import {getStudentById} from '../../apis/studentApi/studentApi';
import { updateStudent } from '../../apis/studentApi/studentApi';
import {deleteStudent} from '../../apis/studentApi/studentApi';

export default function FindForm() {

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const paperStyle = {
    padding: "40px 20px",
    width: 600,
    margin: "20px auto",

  };

  const AlertStyle = {
    margin: "20px auto",
    width: 600,

  }

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess("");
        setError("");
      }, 2000); 
      return () => clearTimeout(timer);
    }
  }, [success, error]);


  const saveClick = async(e) => {
    e.preventDefault();
    const Student = { name, address,id };
    console.log(Student);
    try {
      await postStudent(Student);
      setSuccess("Student added successfully!");
      setError("");
      setName("");  
      setAddress(""); 
      setId("");
    } catch (err) {
      setError("Failed to add student.");
      setSuccess("");
    }
  };

//Find A Student
  const findClick = async(e) => {
    e.preventDefault();
    const Student =  id ;
    console.log(Student);
    try {
      const studentData=await getStudentById(Student);
      setAddress(studentData.address);
      setName(studentData.name);
      setError("");
      setSuccess("Student Found !");
        
    } catch (err) {
    console.log(err);
    setError("Unfind ID !");
    setName("");  
    setAddress(""); 
    setSuccess("");

    }

  };

  //Update a Student
  const updateClick = async(e) => {
    e.preventDefault();
    const Student = { name, address,id };
    console.log(Student);
    try {
      await updateStudent(Student);
      setSuccess("Student updated successfully !");
      setError("");
      setName("");  
      setAddress(""); 
      setId("");
    } catch (err) {
      setError("Failed to update student !");
      setSuccess("");

    }

  };

  //Delete a student
  const deleteClick = async(e) => {
    e.preventDefault();
    const Student =  {id,name,address} ;
    console.log(Student);
    try {
      await deleteStudent(Student);
      setSuccess("Student deleted successfully !");
      setError("");
      setName("");  
      setAddress(""); 
      setId("");
    } catch (err) {
      setError("Failed to delete student.");
      setSuccess("");

    }

  };


  return (
    <Container>
    <Paper elevation={3} style={paperStyle} className="Paper">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },marginBottom:'5vh'
        }}
        noValidate
        autoComplete="off"
      >
        <h1 style={{ color: "#1976d2" }}>Student Form</h1>

        <TextField
          id="outlined-basic"
          label="Student ID"
          variant="outlined"
          fullWidth
          value={id}
          onChange={(e) => setId(e.target.value)}
          autoComplete="id"
        />

        <TextField
          id="outlined-basic"
          label="Student Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
        />

        <TextField
          id="outlined-basic"
          label="Student Address"
          variant="outlined"
          fullWidth
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          autoComplete="address"
        />
      </Box>

      <Button variant="contained" onClick={saveClick} sx={{backgroundColor:'#00853E', '&:hover': { backgroundColor: '#0BDA51', 
    }}}>
      <PersonAddAlt1RoundedIcon sx={{paddingRight:'0.2vw'}}/>
          Add
        </Button>


      <Button variant="contained" onClick={findClick} sx={{marginRight:'2vw',marginLeft:'2vw','&:hover': { backgroundColor: '#0CAFFF', }}}>
      <SearchRoundedIcon sx={{paddingRight:'0.2vw'}}/>
        Search
      </Button>

      <Button variant="contained" onClick={updateClick} sx={{marginRight:'2vw',marginLeft:'2vw',backgroundColor:'#FEBE10', 
      '&:hover': { backgroundColor: '#FFD700', 
    },}}>
      <LoopRoundedIcon sx={{paddingRight:'0.2vw'}}/>
        Update
      </Button>

      <Button variant="contained" onClick={deleteClick} sx={{backgroundColor:'#AB0003','&:hover': { backgroundColor: '#FF0800', 
    }}}>
      <DeleteOutlineRoundedIcon sx={{paddingRight:'0.2vw'}} />
        Delete
      </Button>
    </Paper>

    {success && (
        <Alert variant="outlined" severity="success" style={AlertStyle}>
         {success}
        </Alert>
      )}

      {error && (
        <Alert variant="outlined" severity="error" style={AlertStyle}>
          {error}
        </Alert>
      )}
      
  </Container>
  )
}
