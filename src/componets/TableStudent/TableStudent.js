import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { getStudents } from '../../apis/studentApi/studentApi';

export default function TableStudent() {
  const [students, setStudents] = React.useState([]);

  React.useEffect(() => {
    async function fetchStudents() {
      try {
        const studentsData = await getStudents();
        setStudents(studentsData);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    }

    fetchStudents();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650,  }} aria-label="simple table">
        <TableHead style={{fontSize:50}}  >
          <TableRow>
            <TableCell align="left"  sx={{ fontSize: 20, fontWeight: 'bold',paddingLeft: 20,fontFamily: "Poppins, sans-serif" }}>ID</TableCell>
            <TableCell align="left" sx={{ fontSize: 20, fontWeight: 'bold',paddingLeft: 2,fontFamily: "Poppins, sans-serif" }}>Name</TableCell>
            <TableCell align="left" sx={{ fontSize: 20, fontWeight: 'bold',paddingLeft: 2,fontFamily: "Poppins, sans-serif" }}>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (

            <TableRow key={student.id}  sx={{
            
              '&:hover': {
                backgroundColor: '#f5f5f5', 
                    height: '60px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease-in-out',
                    boxShadow: '5px 5px 8px rgba(0, 0, 0, 0.2)',
                    '& .MuiTableCell-root': {
                      color: '#1976d2',
                    },

              },
            }}
            >
              <TableCell align="left" sx={{fontSize: 15, paddingLeft: 20 }}>{student.id}</TableCell>
              <TableCell align="left"  sx={{fontSize: 15, paddingLeft: 2 }}>{student.name}</TableCell>
              <TableCell align="left" sx={{ fontSize: 15,paddingLeft: 2 }}>{student.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
