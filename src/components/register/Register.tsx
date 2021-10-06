import React, { useState } from "react";
import styles from "./register.module.css";
//  import { useHistory } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
const Register = () => {
  return (
    <div className={styles.Container}>
      <form className={styles.form}>
        <h2> Sign Up</h2>
        <span className={styles.entry}>
          <label className={styles.label}>Name</label>

          <input
            name="Name"
            type="name"
            className={styles.input}
            placeholder="Enter your full name"
          />
        </span>

        <span className={styles.entry}>
          <label className={styles.label}>E-mail</label>

          <input
            name="email"
            type="email"
            className={styles.input}
            placeholder="Enter your email address"
            //   ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })}
            //   value={values.email}
            //   onChange={onChange}
          />
          {/* {errors.email && (
              <h3 className={styles.errors}> '*This field is required'</h3>
            )} */}
        </span>
        <span className={styles.entry}>
          <label className={styles.label}>Password</label>
          <input
            name="password"
            type="password"
            className={styles.input}
            placeholder="Enter password of minimum length 6"
            //   ref={register({ required: true, minLength: 6 })}
            //   value={values.password}
            //   onChange={onChange}
          />
          {/* {errors.password && (
              <h3 className={styles.errors}> '*This field is required'</h3>
            )} */}
        </span>
        <span className={styles.entry}>
          <label className={styles.label}>Mobile Number</label>

          <input
            name="number"
            type="text"
            className={styles.input}
            placeholder="Enter your mobile number"
          />
        </span>
        <div className={styles.checkbox}>
          <input
            name="priority"
            type="checkbox"
            style={{ marginLeft: "5px" }}
          />
          <label>Save my credentials</label>
        </div>
        <button type="submit" className={styles.submitbutton}>
          <span>Submit</span>
        </button>

        <div className={styles.login}>
          <p>Already have an account?</p>
          <button
            type="submit"
            style={{ backgroundColor: "#e4e4de" }}
            className={styles.loginbutton}
          >
            <span>Login</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
