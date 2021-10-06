import React, { useState } from "react";
import styles from "./login.module.css";

const Login = () => {
  return (
    <div className={styles.Container}>
      <form className={styles.form}>
        <h2> Log In</h2>
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
        <div className={styles.checkbox}>
          <input
            name="priority"
            type="checkbox"
            style={{ marginLeft: "5px" }}
          />
          <label>Keep me Logged In</label>
        </div>
        <button type="submit" className={styles.submitbutton}>
          <span>Submit</span>
        </button>

        <div className={styles.signup}>
          <p className={styles.margin}>New to SplitIt?</p>
          <button
            type="submit"
            style={{ backgroundColor: "#e4e4de" }}
            className={styles.registerbutton}
          >
            <span className={styles.register}>Create your account</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
