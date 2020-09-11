import React from 'react';
import { useField } from 'formik';

export default function SelectionForm({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        className={`custom-select ${
          meta.touched && meta.error && 'is-invalid'
        }`}
        {...field}
        {...props}
      >
        <option value="">{props.placeholder}</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      {meta.touched && meta.error ? (
        <div className="invalid-feedback">{meta.error}</div>
      ) : null}
    </div>
  );
}
