import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useLocation, useNavigate } from 'react-router-dom';

function Registeredit() {
    const [array, setArray] = useState([])
    // const navigate = useNavigate();
    const data = useLocation();
    const initialValues = {
        firstName: data.state.a.firstName,
        lastName: data.state.a.lastName,
        email: data.state.a.email,
        mobileNumber:data.state.a.mobileNumber,
        qualification: data.state.a.qualification,
        address: data.state.a.address,
        age: data.state.a.age,
        gender:data.state.a.gender,
        agreecheck:data.state.a.agreecheck
        // agreecheck:data.state.a.true

    };
    const validationSchema = Yup.object({
        firstName: Yup.string().min(3).max(10).required(),
        lastName: Yup.string().min(3).max(10).required(),
        email: Yup.string().email().matches(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm, 'please enter valid email').required(),
        mobileNumber: Yup.number().min(1000000000, 'please 10 digits number').max(9999999999, 'please 10 digits number').required(),
        qualification: Yup.string().required(),
        address: Yup.string().required(),
        age: Yup.number().required(),
        gender: Yup.string().required(),
        agreecheck: Yup.bool().oneOf([true], 'please check confirmation box').required()
    });
    var index= data.state.i
    console.log('index',index)
    const onSubmit = (values) => {
        console.log(values)
        
        let temp =[...array]
        temp[data.state.i]=values;
        let ar =[...temp]
        // const ar =[...array,values]
        setArray(ar)
        console.log('test',ar)
        localStorage.setItem('data',JSON.stringify(ar))
    }
    useEffect(()=>{
        const str =localStorage.getItem('data')
        if(str){
            setArray(JSON.parse(str))
        }
    },[])
   
    return (
        <div className='tabledata'>
            <h1 className='text-primary'>Register Edit Form</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values,{resetForm}) => {
                    onSubmit(values);
                    resetForm();
                }}
            >
                <Form>
                    <div className='container'>
                        <div className='row text-start'>
                            <div className='col-md-6 col-sm-12 mt-4'>
                                <label className='text-balck name' htmlFor='firstName'>FirstName:</label>
                                <Field type="text" name="firstName" className="form-control" placeholder="Enter firstname" />
                                <ErrorMessage name="firstName" />
                            </div>
                            <div className='col-md-6 mt-4'>
                                <label htmlFor='lastName' className='name'>LastName:</label>
                                <Field type="text" name="lastName" className="form-control" placeholder="enter lastname" />
                                <ErrorMessage name="lastName" />
                            </div>
                        </div>
                        <div className='row text-start'>
                            <div className='col-md-6 col-sm-12 mt-4'>
                                <label htmlFor='email' className='name'>Email:</label>
                                <Field type="text" name="email" placeholder="enter mail id" className="form-control" />
                                <ErrorMessage name="email" />
                            </div>
                            <div className='col-md-6 col-sm-12 mt-4'>
                                <label htmlFor='mobileNumber' className='name'>PHN NO:</label>
                                <Field type="number" name="mobileNumber" placeholder="enter phone number" className="form-control" />
                                <ErrorMessage name="mobileNumber" />

                            </div>
                        </div>
                        <div className='row text-start'>
                            <div className='col-md-6 mt-4'>
                                <label htmlFor='qualification' className='name'>Education:</label>
                                <Field as="select" name="qualification" placeholder="choose your education" className="form-control">
                                      <option>...select education....</option>
                                      <option value="SSC">SSC</option>
                                      <option value="INTER">INTER</option>
                                      <option value="BTECH">BTECH</option>
                                      <option value="MTECH">MTECH</option>
                                </Field>
                                <ErrorMessage name="qualification"/>
                            </div>
                            <div className='col-md-6 mt-4'>
                                <label htmlFor='address' className='name'>ADDRESS</label>
                                <Field type="text" name="address" className="form-control" placeholder="Enter Your address"/>
                                <ErrorMessage name="address"/>
                            </div>
                        </div>
                        <div className='row text-start'>
                            <div  className='col-md-6 mt-4'>
                                <label htmlFor='age' className='name'>Age:</label>
                                <Field type="number" name="age" className="form-control" placeholder="Enter your age"/>
                                <ErrorMessage name="age"/>
                            </div>
                            <div className='col-md-6 mt-5'>
                                <label htmlFor='gender' className='name'>Gender:</label>
                                <div>
                                    <label>
                                        <Field type="radio" name="gender" value="male" className="m-3"/>
                                        Male
                                    </label>
                                    <label>
                                        <Field type="radio" name="gender" value="female" className="m-2"/>
                                        Female
                                    </label>
                                </div>
                                <ErrorMessage name="gender"/>
                            </div>
                        </div>
                        <div className='row text-start'>
                            <div className='col-md-12 d-flex mt-4'>
                                <Field type="checkbox" name="agreecheck" className="p-4 m-2 mb-5 " />
                                <p> I have read and agree the terms and conditions</p>
                               
                            </div>
                            <ErrorMessage name="agreecheck"/>
                        </div>
                        <button type="submit" className="btn btn-primary float-center ">Update</button>
                    </div>
                </Form>
            </Formik>
            <div className='tabledata p-2 m-2'>
                <table className='table table-bordered table-responsive'>
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
                                {/* <td colSpan={2}>
                                    <button type="submit" className='btn btn-primary m-2' onClick={()=>{navigate('/Formedit')}}>Edit</button></td>
                                  <td> <button type="submit" className='btn btn-danger m-2' onClick={()=>{Delete(i)}}>Delete</button></td>  */}
                                

                            </tr>
                        })

                        }
                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default Registeredit