import React from 'react';
import { useField } from 'formik';

export default function TextareaForm({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        className={
          meta.touched && meta.error
            ? 'form-control is-invalid'
            : 'form-control'
        }
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="invalid-feedback">{meta.error}</div>
      ) : null}
    </div>
  );
}
