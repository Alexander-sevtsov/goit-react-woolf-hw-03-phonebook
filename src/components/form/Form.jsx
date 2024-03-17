import React from 'react';
import css from './Form.module.css';
import { Formik } from 'formik';

export const SiteForm = ({ createConatct }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(obj, actions) => {
        if (!obj.name.trim().toLowerCase()) {
          alert(`Please enter a name!`);
          return;
        }
        createConatct(obj);
        actions.resetForm();
      }}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit} className={css.form}>
          <label className={css.label}>
            Name
            <input
              type="text"
              name="name"
              required
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </label>
          <label className={css.label}>
            Phone
            <input
              onChange={formik.handleChange}
              value={formik.values.number}
              type="tel"
              name="number"
              pattern="(\(\d{3}\) \d{3}-\d{2}-\d{2}|\d{3} \d{3} \d{2} \d{2}|\d{5,12})"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button
            type="submit"
            className={css.btn}
            // onClick={() => formik.resetForm()}
          >
            Add contact
          </button>
        </form>
      )}
    </Formik>
  );
};
