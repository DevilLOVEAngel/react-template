import React from 'react';
import { useField } from 'formik';

export default function FileForm({ labelSelectFile, label, ...props }) {
  const [field, form, meta] = useField(props);
  return (
    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
      <label htmlFor={props.id || props.name}>{labelSelectFile}</label>
      <div className="custom-file">
        <input
          className={
            meta.touched && meta.error
              ? 'custom-file-input is-invalid'
              : 'custom-file-input'
          }
          {...field}
          {...props}
          accept="image/*"
          onChange={(e) => form.setFieldValue(field.name, e.target.files[0])}
        />
        <label className="custom-file-label" htmlFor={props.id || props.name}>
          {label}
        </label>
        {meta.touched && meta.error ? (
          <div className="invalid-feedback">{meta.error}</div>
        ) : null}
      </div>
    </div>
  );
}
