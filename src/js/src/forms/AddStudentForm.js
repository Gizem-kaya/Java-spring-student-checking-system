import React, { Component } from "react";
import { Formik } from "formik";
import { Input, Button, Tag } from "antd";

const inputMarginBottom = {marginBottom: '10px'};
const tagStyle = {backgroundColor: '#f50', color: 'white', ...inputMarginBottom};

class AddStudentForm extends Component {
    render () {
        return (
            
              
            <Formik
            initialValues={{ firstName: '', lastName: '', email: '', gender: '' }}
            validate={values => {
                const errors = {};

                if (!values.firstName) {
                    errors.firstName = 'First name required';
                }

                if (!values.lastName) {
                    errors.lastName = 'Last name required';
                }

                if (!values.email) {
                    errors.email = 'Email required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }

                if (!values.gender) {
                    errors.gender = 'Gender required';
                } else if (!['Male', 'MALE', 'Female', 'FEMALE'].includes(values.gender)){
                    errors.gender = 'Gender must be MALE, male, FEMALE or female.';
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
                    {errors.firstName && touched.firstName && <Tag style={tagStyle}>{errors.firstName}</Tag>}
                    <Input           
                        style= {inputMarginBottom}
                        name="lastName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                        placeholder= 'Last name. E.g Smith'
                    />
                    {errors.lastName && touched.lastName && <Tag style={tagStyle}>{errors.lastName}</Tag>}
                    <Input  
                        style= {inputMarginBottom}         
                        name="email"
                        type="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder= 'Email. E.g example@example.com'
                    />
                    {errors.email && touched.email && <Tag style={tagStyle}>{errors.email}</Tag>}
                    <Input      
                        style= {inputMarginBottom}     
                        name="gender"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.gender}
                        placeholder= 'Gender. E.g Male or Female'
                    />
                    {errors.gender && touched.gender && <Tag style={tagStyle}>{errors.gender}</Tag>}
                   
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