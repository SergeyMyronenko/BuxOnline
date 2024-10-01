import React, { useRef } from "react";

import { useState } from "react";
import Header from "../../Components/Header/Header";
import Nav from "../../Components/Nav/Nav";

import SolidButton from "../../Components/Buttons/SolidButton/SolidButton";
import InputField from "../../Components/Input/InputField/InputField";

import "./LogIn.scss";

/**
 * ForgotPassword component renders a form for users to reset their password.
 *
 * The form includes:
 * - A header and navigation component.
 * - An SVG icon and a title indicating password recovery.
 * - A description prompting the user to enter their email associated with the account.
 * - An input field for the email.
 * - A button to submit the form and initiate the password reset process.
 *
 * @component
 * @example
 * return (
 *   <ForgotPassword />
 * )
 */
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const emailRef = useRef(null);

  const [resetCode, setResetCode] = useState("");
  const resetCodeRef = useRef(null);

  const handleCode = (e) => {
    e.preventDefault();
    setResetCode(resetCodeRef.current.value);
  };
  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(emailRef.current.value);
  };
  if (resetCode) {
    return (
      <>
        <div className="form-wrapper">
          <form>
            <h2>Введіть пароль</h2>
            <p>
              На пошту <span>{email}</span> був надісланий код, введіть його
              нижче
            </p>
            <InputField
              label="Пароль"
              type="password"
              placeholder="Пароль"
              id="password"
            ></InputField>
            <InputField
              label="Підтвердіть пароль"
              type="password"
              placeholder="Підтвердіть пароль"
              id="passwprd"
            ></InputField>
            <SolidButton type="button" fontSize={16} onClick={handleCode}>
              Скинути пароль
            </SolidButton>
          </form>
        </div>
      </>
    );
  } else if (email) {
    return (
      <>
        <div className="form-wrapper">
          <form>
            <h2>Відновлення паролю</h2>
            <p>
              На пошту <span>{email}</span> був надісланий лист, перейдіть за
            </p>
          </form>
        </div>
      </>
    );
  } else
    return (
      <>
        <div className="form-wrapper">
          <form>
            <h2>Відновлення паролю</h2>
            <p>Введіть електронну пошту, пов'язану з обліковим записом</p>
            <input
              ref={emailRef}
              label="E-mail"
              type="email"
              placeholder="E-mail"
              id="email"
              className="forgot-password"
            ></input>
            <SolidButton type="button" fontSize={16} onClick={handleEmail}>
              Далі
            </SolidButton>
          </form>
        </div>
      </>
    );
};

export default ForgotPassword;
