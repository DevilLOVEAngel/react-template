import React from 'react';
import { useField } from 'formik';

export default function CheckboxForm({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="col-12 mb-3">
      <div className="custom-control custom-checkbox mb-3">
        <input
          className={
            meta.touched && meta.error
              ? 'custom-control-input is-invalid'
              : 'custom-control-input'
          }
          {...field}
          {...props}
        />
        <label
          className="custom-control-label"
          htmlFor={props.id || props.name}
        >
          {label}
        </label>
        {meta.touched && meta.error ? (
          <div className="invalid-feedback">{meta.error}</div>
        ) : null}
      </div>
    </div>
  );
}
