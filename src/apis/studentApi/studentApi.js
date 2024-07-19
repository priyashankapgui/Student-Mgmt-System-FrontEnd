import axios from 'axios';
const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL, 
    headers: {
        'Content-Type': 'application/json'
    }
});

//Create student API
export const postStudent = async (student) => {
    try {
        const response = await api.post('/api/v1/student/saveStudent', student);
        return response.data; 
    } catch (error) {
        if (error.response) {
            
            console.error('Server responded with error:', error.response.data);
            throw new Error('Server responded with error');
        } else if (error.request) {
           
            console.error('Request made but no response received:', error.request);
            throw new Error('No response received from server');
        } else {
            
            console.error('Error setting up request:', error.message);
            throw new Error('Error setting up request');
        }
    }
};

//Read All student API

export const getStudents = async () => {
    try {
        const response = await api.get('/api/v1/student/getStudents');
        console.log(response.data);
        return response.data;
       
    } catch (error) {
        if (error.response) {
            
            console.error('Server responded with error:', error.response.data);
            throw new Error('Server responded with error');
        } else if (error.request) {
            
            console.error('Request made but no response received:', error.request);
            throw new Error('No response received from server');
        } else {
            
            console.error('Error setting up request:', error.message);
            throw new Error('Error setting up request');
        }
    }

   
};


//Find a Student by Id API

export const getStudentById = async (studentId) => {
    try {
        const response = await api.get(`/api/v1/student/getStudentById/${studentId}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error('Server responded with error:', error.response.data);
            throw new Error('Server responded with error');
        } else if (error.request) {
            console.error('Request made but no response received:', error.request);
            throw new Error('No response received from server');
        } else {
            console.error('Error setting up request:', error.message);
            throw new Error('Error setting up request');
        }
    }
};

//Update a Student API'
export const updateStudent = async (updatedStudent) => {
    try {
        const response = await api.put(`/api/v1/student/updateStudent`, updatedStudent);
        console.log(response.data);
        return response.data;
        } catch (error) {
            if (error.response) {
                console.error('Server responded with error:', error.response.data);
                throw new Error('Server responded with error');
            }else if(error.request){
                console.error('Request made but no response received:', error.request);
            }else{
                console.error('Error setting up request:', error.message);
            }
        }
    };

 //Delete a student 
 export const deleteStudent = async (student) => {
    try {
        await api.delete(`/api/v1/student/deleteStudent`,{ data: student });
    }catch(err){
        console.log(err);
    }
 };