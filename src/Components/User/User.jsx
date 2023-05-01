import React, { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';


function User() {
    const [array,setarray]=useState([])
    const navigate=useNavigate();
    // const data=useLocation();
   
    useEffect(()=>{
        const test = localStorage.getItem('data');
        console.log('tesr',test);
        if(test){
            setarray(JSON.parse(test))
        }
    },[])
    const Delete = (i)=>{
       var temp =[...array]
       temp.splice(i,1)
        const ar=[...temp]
       setarray(ar)

    }
  return (
    <div>
       <h1 className='text-primary'>User Details</h1>
        <div className='tabledata'>
                <table className='table table-bordered table-responsive table-hover'>
                    <thead>
                        <tr>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>PHNNO</th>
                            <th>Education</th>
                            <th>Address</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {array && array.map((a,i)=>{
                            return<tr key={i}>
                                <td>{a?.firstName}</td>
                                <td>{a?.lastName}</td>
                                <td>{a?.email}</td>
                                <td>{a?.mobileNumber}</td>
                                <td>{a?.qualification}</td>
                                <td>{a?.address}</td>
                                <td>{a?.gender}</td>
                                <td>{a?.age}</td>
                                <td colSpan={2}>
                                    <button type="submit" className='btn btn-primary m-2'  onClick={()=>{navigate('/Registeredit',{state:{a,i}})}} >Edit</button></td>
                                  <td> <button type="submit" className='btn btn-danger m-2' onClick={()=>{Delete(i)}} >Delete</button></td> 
                                

                            </tr>
                        })

                        }
                    </tbody>

                </table>
            </div>
    </div>
  )
}

export default User