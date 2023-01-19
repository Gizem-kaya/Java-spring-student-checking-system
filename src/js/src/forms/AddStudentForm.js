import React, { Component } from "react";
import { Formik } from "formik";
import { Input, Button } from "antd";

const inputMarginBottom = {marginBottom: '10px'};

class AddStudentForm extends Component {
    render () {
        return (
            
              
            <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                errors.email = 'Required';
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit}>
                    <Input         
                        style= {inputMarginBottom}  
                        name="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                        placeholder= 'First name. E.g John'
                    />
                    {errors.firstName && touched.firstName && errors.firstName}
                    <Input           
                        style= {inputMarginBottom}
                        name="lastName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                        placeholder= 'Last name. E.g Smith'
                    />
                    {errors.lastName && touched.lastName && errors.lastName}
                    <Input  
                        style= {inputMarginBottom}         
                        name="email"
                        type="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder= 'Email. E.g example@example.com'
                    />
                    {errors.email && touched.email && errors.email}
                    <Input      
                        style= {inputMarginBottom}     
                        name="gender"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.gender}
                        placeholder= 'Gender. E.g Male or Female'
                    />
                    {errors.gender && touched.gender && errors.gender}
                   
                    <Button type="submit" disabled={isSubmitting}>
                        Submit
                    </Button>
                </form>
            )}
            </Formik>
        
        );
    }
}

export default AddStudentForm;