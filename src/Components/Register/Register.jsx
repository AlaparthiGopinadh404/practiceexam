import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
// import {  useNavigate } from 'react-router-dom';

function Register() {
    const [array, setarray] = useState([])
    // const navigate = useNavigate();
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        qualification: "",
        address: "",
        age: "",
        gender: "",
        agreecheck: false

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
    const onSubmit = (values) => {
        console.log(values)
        const res =[...array,values]
        setarray(res)
        console.log('test',res)
        localStorage.setItem('data',JSON.stringify(res))
    }
    useEffect(()=>{
        const test = localStorage.getItem('data')
        if(test){
            setarray(JSON.parse(test))
        }
    },[])
    
    return (
        <div className=''>
            <h1 className='text-primary'> Register Form</h1>
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
                            <div className='col-md-6 col-sm-12 text-danger form-group mt-4'>
                                <label  for='firstName' className='text-black text-start name' >FirstName:</label>
                                <Field type="text" name="firstName" className="form-control  " placeholder="Enter firstname" />
                                <ErrorMessage name="firstName" />
                            </div>
                            <div className='col-md-6 text-danger mt-4'>
                                <label htmlFor='lastName ' className='text-black name'>LastName:</label>
                                <Field type="text" name="lastName" className="form-control" placeholder="Enter lastname" />
                                <ErrorMessage name="lastName" />
                            </div>
                        </div>
                        <div className='row text-start'>
                            <div className='col-md-6 col-sm-12 text-danger mt-4'>
                                <label htmlFor='email' className='text-black name'>Email:</label>
                                <Field type="text" name="email" placeholder="Enter mail id" className="form-control" />
                                <ErrorMessage name="email" />
                            </div>
                            <div className='col-md-6 col-sm-12 text-danger mt-4'>
                                <label htmlFor='mobileNumber ' className='text-black name'>PHN NO:</label>
                                <Field type="number" name="mobileNumber" placeholder="Enter phone number" className="form-control" />
                                <ErrorMessage name="mobileNumber" />

                            </div>
                        </div>
                        <div className='row text-start'>
                            <div className='col-md-6 text-danger mt-4'>
                                <label htmlFor='qualification' className='text-black name'> Education:</label>
                                <Field as="select" name="qualification" placeholder="choose your education" className="form-control">
                                      <option>...select education....</option>
                                      <option value="SSC">SSC</option>
                                      <option value="INTER">INTER</option>
                                      <option value="BTECH">BTECH</option>
                                      <option value="MTECH">MTECH</option>
                                </Field>
                                <ErrorMessage name="qualification"/>
                            </div>
                            <div className='col-md-6 text-danger mt-4'>
                                <label htmlFor='address' className='text-black name'>ADDRESS:</label>
                                <Field type="text" name="address" className="form-control" placeholder="Enter Your address"/>
                                <ErrorMessage name="address"/>
                            </div>
                        </div>
                        <div className='row text-start'>
                            <div  className='col-md-6 text-danger mt-4'>
                                <label htmlFor='age' className='text-black name'>Age:</label>
                                <Field type="number" name="age" className="form-control" placeholder="Enter your age"/>
                                <ErrorMessage name="age"/>
                            </div>
                            <div className='col-md-6 mt-4'>
                                <label htmlFor='gender' className='text-black name'>Gender:</label>
                                <div>
                                    <label>
                                        <Field type="radio" name="gender" value="male" className="m-3"/>
                                        Male
                                    </label>
                                    <label>
                                        <Field type="radio" name="gender" value="female" className="m-3"/>
                                        Female
                                    </label>
                                </div>
                                <ErrorMessage name="gender"/>
                            </div>
                        </div>
                        <div className='row text-start'>
                            <div className='col-md-12 d-flex mt-4' >
                                <Field type="checkbox" name="agreecheck" className="p-4 m-2 mb-5 text-black " />
                                <p> I have read and agree the terms and conditions</p>
                               
                            </div>
                            <ErrorMessage name="agreecheck"/>
                        </div>
                        <button type="submit" className="btn btn-primary float-center">Submit</button>
                    </div>
                </Form>
            </Formik>
         

        </div>
    )
}

export default Register