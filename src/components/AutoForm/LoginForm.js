import * as Yup from 'yup';

import { Form, Formik } from 'formik';

import CheckboxForm from './CheckboxForm';
import FileForm from './FileForm';
import InputForm from './InputForm';
import React from 'react';
import SelectionForm from './SelectionForm';
import TextareaForm from './TextareaForm';

const LoginForm = () => {
  const FILE_SIZE = 262144000;
  const SUPPORTED_FORMATS = ['svg', 'csv', 'xlxs', 'docx', 'txt'];
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        selection: '',
        checkbox: false,
        file: null,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        selection: Yup.string().required(
          'Example invalid custom select feedback'
        ),
        file: Yup.mixed()
          .test('fileSize', 'File Size is too large', (value) => {
            return value && value.size <= FILE_SIZE;
          })
          .test(
            'fileType',
            'Unsupported File Format',
            (value) => value && SUPPORTED_FORMATS.includes(value.type)
          )
          .required('A file is required'),
        checkbox: Yup.boolean().oneOf(
          [true],
          'You must agree before submitting.'
        ),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="form-row">
        <InputForm
          label="First Name"
          name="firstName"
          type="text"
          placeholder="Jane"
        />
        <InputForm
          label="Last Name"
          name="lastName"
          type="text"
          placeholder="Doe"
        />
        <InputForm
          label="Email Address"
          name="email"
          type="email"
          placeholder="jane@formik.com"
        />

        <SelectionForm
          label="Selection"
          name="selection"
          type="selection"
          placeholder="Open this select menu"
        />
        <FileForm
          labelSelectFile="Select a file"
          label="Choose file..."
          id="file"
          name="file"
          type="file"
        />
        <CheckboxForm
          label="Agree to terms and conditions"
          id="checkbox"
          name="checkbox"
          type="checkbox"
        />
        <TextareaForm row="3" />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
