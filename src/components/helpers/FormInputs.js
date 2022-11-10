import { useField } from "formik";
import React from "react";

export const InputFileUpload = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input {...field} {...props} className="fill-upload" />

      {meta.touched && meta.error ? (
        <span className="error--msg">{meta.error}</span>
      ) : null}
    </>
  );
};

export const InputText = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      {meta.touched && meta.error ? (
        <span className="error-msg error-show">{meta.error}</span>
      ) : null}

      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "error-show" : null}
      />
      <label className="label" htmlFor={props.id || props.name}>
        {label}
      </label>
    </>
  );
};

export const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      {meta.touched && meta.error ? (
        <span className="error-msg error-show">{meta.error}</span>
      ) : null}

      <textarea
        {...field}
        {...props}
        className={meta.touched && meta.error ? "error-show" : null}
      ></textarea>

      <label className="label" htmlFor={props.id || props.name}>
        {label}
      </label>
    </>
  );
};

export const InputSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      {meta.touched && meta.error ? (
        <span className="error-msg error-show">{meta.error}</span>
      ) : null}

      <select
        {...field}
        {...props}
        className={meta.touched && meta.error ? "error-show" : null}
      />
      <label className="label" htmlFor={props.id || props.name}>
        {label}
      </label>
    </>
  );
};

export const MyRadioEval = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div
        className={
          meta.touched && meta.error
            ? "form__wrapper notify-error radio-eval"
            : "form__wrapper"
        }
      >
        <div className="radio__wrapper">
          <div className="modal-input">
            <input {...field} {...props} />
          </div>
          <span>{props.value}</span>
        </div>
      </div>
    </>
  );
};

export const MyRadio = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <input {...field} {...props} />
      <label className="" htmlFor={props.id || props.name}>
        <strong>{label}</strong>
      </label>
    </>
  );
};

export const MyRadioError = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      {meta.touched && meta.error ? (
        <span className="error-msg error-show">{meta.error}</span>
      ) : null}
    </>
  );
};

export const MyCheckbox = ({ label, ...props }) => {
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "error-show" : null}
      />
      <label className="label" htmlFor={props.id || props.name}>
        {label}
      </label>
      {meta.touched && meta.error ? (
        <span className="error-msg error-show">{meta.error}</span>
      ) : null}
    </>
  );
};

export const InputRadio = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <input {...field} {...props} />

      <label htmlFor={props.id || props.name}>{label}</label>

      {meta.touched && meta.error ? (
        <p className="error-msg">{meta.error}</p>
      ) : null}
    </>
  );
};
