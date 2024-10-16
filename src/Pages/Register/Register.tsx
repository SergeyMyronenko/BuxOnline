import React, { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
// it works fine, the images are displayed well, but I don't understand why TS has issues
import cardImg1 from "../../assets/onboardCard1.png";
import cardImg2 from "../../assets/onboardCard2.png";
import cardImg3 from "../../assets/onboardCard3.png";

import Header from "../../Components/Header/Header.jsx";
import Nav from "../../Components/Nav/Nav.jsx";
import SolidButton from "../../Components/Buttons/SolidButton/SolidButton.tsx";
import InputField from "../../Components/Input/InputField/InputField.tsx";
import InputCheckbox from "../../Components/Input/InputCheckbox/InputCheckbox.tsx";
import InputSelect from "../../Components/Input/InputSelect/InputSelect.tsx";

import useFormState from "../../Hooks/useFormState.tsx";

import "./Register.scss";
import { useAuth } from "../../Hooks/useAuth.tsx";

/**
 * Step1 component renders the first step of the registration form.
 *
 * @param {Object} props - The component props.
 * @param {function} props.handleStateChange - Function to handle state change for select input.
 * @param {string} props.select - The current value of the select input.
 * @returns {JSX.Element} The rendered Step1 component.
 **/

const Step1 = ({
  handleUserData,
}: {
  handleUserData: (event: any) => void;
}) => (
  <>
    <span className="title">
      <svg
        width="26"
        height="21"
        viewBox="0 0 26 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.46061 16.25L12.2808 12.575C11.7841 12.525 11.4149 12.5 11.0074 12.5C7.60744 12.5 0.820312 14.175 0.820312 17.5V20H12.2808L8.46061 16.25ZM11.0074 10C13.8216 10 16.1009 7.7625 16.1009 5C16.1009 2.2375 13.8216 0 11.0074 0C8.1932 0 5.91385 2.2375 5.91385 5C5.91385 7.7625 8.1932 10 11.0074 10ZM16.6994 20.625L12.2808 16.25L14.0635 14.4875L16.6994 17.0875L23.2319 10.625L25.0146 12.3875L16.6994 20.625Z"
          fill="#282828"
        />
      </svg>
      <h2>Реєстрація</h2>
    </span>
    <p>Створіть обліковий запис за допомогою:</p>
    <div className="media-register">
      <a href="#">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_106_301)">
            <path
              d="M8.36104 0.788944C5.96307 1.62082 3.89506 3.19976 2.46077 5.29382C1.02649 7.38789 0.301526 9.88671 0.392371 12.4233C0.483217 14.9598 1.38508 17.4004 2.9655 19.3864C4.54591 21.3725 6.72158 22.7995 9.17292 23.4577C11.1603 23.9705 13.2424 23.993 15.2404 23.5233C17.0504 23.1168 18.7238 22.2471 20.0967 20.9996C21.5256 19.6615 22.5627 17.9592 23.0967 16.0758C23.677 14.0277 23.7803 11.8738 23.3985 9.77957H12.2385V14.4089H18.7017C18.5725 15.1473 18.2957 15.852 17.8878 16.4809C17.48 17.1098 16.9494 17.6499 16.3279 18.0689C15.5387 18.591 14.649 18.9423 13.716 19.1002C12.7803 19.2742 11.8205 19.2742 10.8848 19.1002C9.9364 18.9041 9.03923 18.5127 8.25042 17.9508C6.9832 17.0538 6.03168 15.7794 5.53167 14.3096C5.02319 12.8122 5.02319 11.1888 5.53167 9.69144C5.88759 8.64185 6.47598 7.6862 7.25292 6.89582C8.14203 5.97472 9.26766 5.31631 10.5063 4.99284C11.745 4.66936 13.0488 4.69331 14.2748 5.06207C15.2325 5.35605 16.1083 5.8697 16.8323 6.56207C17.561 5.83707 18.2885 5.11019 19.0148 4.38144C19.3898 3.98957 19.7985 3.61644 20.1679 3.21519C19.0627 2.18671 17.7654 1.38643 16.3504 0.860194C13.7736 -0.0754498 10.9541 -0.100594 8.36104 0.788944Z"
              fill="white"
            />
            <path
              d="M8.3607 0.789855C10.9536 -0.100288 13.7731 -0.0758051 16.3501 0.85923C17.7654 1.38904 19.062 2.19318 20.1657 3.22548C19.7907 3.62673 19.3951 4.00173 19.0126 4.39173C18.2851 5.11798 17.5582 5.84173 16.832 6.56298C16.1079 5.87061 15.2321 5.35696 14.2745 5.06298C13.0489 4.69293 11.7451 4.66759 10.5061 4.98975C9.26712 5.3119 8.14079 5.9691 7.2507 6.88923C6.47377 7.67961 5.88538 8.63526 5.52945 9.68486L1.64258 6.67548C3.03384 3.91653 5.44273 1.80615 8.3607 0.789855Z"
              fill="#E33629"
            />
            <path
              d="M0.611401 9.65605C0.820316 8.62067 1.16716 7.61798 1.64265 6.6748L5.52953 9.69168C5.02105 11.1891 5.02105 12.8124 5.52953 14.3098C4.23453 15.3098 2.9389 16.3148 1.64265 17.3248C0.452308 14.9554 0.0892746 12.2557 0.611401 9.65605Z"
              fill="#F8BD00"
            />
            <path
              d="M12.2372 9.77832H23.3972C23.7789 11.8726 23.6756 14.0264 23.0953 16.0746C22.5614 17.958 21.5242 19.6602 20.0953 20.9983C18.8409 20.0196 17.5809 19.0483 16.3265 18.0696C16.9484 17.6501 17.4792 17.1094 17.8871 16.4798C18.295 15.8503 18.5716 15.1448 18.7003 14.4058H12.2372C12.2353 12.8646 12.2372 11.3214 12.2372 9.77832Z"
              fill="#587DBD"
            />
            <path
              d="M1.64062 17.3246C2.93687 16.3246 4.2325 15.3196 5.5275 14.3096C6.02851 15.7799 6.98138 17.0544 8.25 17.9508C9.04127 18.5101 9.94037 18.8983 10.89 19.0908C11.8257 19.2648 12.7855 19.2648 13.7213 19.0908C14.6542 18.9329 15.5439 18.5816 16.3331 18.0596C17.5875 19.0383 18.8475 20.0096 20.1019 20.9883C18.7292 22.2366 17.0558 23.1068 15.2456 23.5139C13.2476 23.9836 11.1655 23.9611 9.17813 23.4483C7.60632 23.0286 6.13814 22.2888 4.86563 21.2752C3.51874 20.2059 2.41867 18.8583 1.64062 17.3246Z"
              fill="#319F43"
            />
          </g>
          <defs>
            <clipPath id="clip0_106_301">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        Google
      </a>
      <a href="#">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_106_309)">
            <path
              d="M18.375 0H5.625C2.5184 0 0 2.5184 0 5.625V18.375C0 21.4816 2.5184 24 5.625 24H18.375C21.4816 24 24 21.4816 24 18.375V5.625C24 2.5184 21.4816 0 18.375 0Z"
              fill="white"
            />
            <path
              d="M18.375 0H5.625C2.5184 0 0 2.5184 0 5.625V18.375C0 21.4816 2.5184 24 5.625 24H18.375C21.4816 24 24 21.4816 24 18.375V5.625C24 2.5184 21.4816 0 18.375 0Z"
              fill="#0A66C2"
            />
            <path
              d="M17.317 20.408H20.0611C20.1605 20.408 20.2559 20.3685 20.3262 20.2982C20.3965 20.2279 20.4361 20.1325 20.4361 20.0331L20.4375 14.2354C20.4375 11.2051 19.7845 8.87588 16.2433 8.87588C14.8972 8.82581 13.6277 9.51975 12.9427 10.6785C12.9393 10.6841 12.9342 10.6885 12.9281 10.691C12.9221 10.6934 12.9154 10.6938 12.909 10.6921C12.9027 10.6904 12.8971 10.6867 12.8931 10.6815C12.8891 10.6763 12.8869 10.67 12.8869 10.6634V9.53063C12.8869 9.43117 12.8474 9.33579 12.777 9.26546C12.7067 9.19513 12.6113 9.15563 12.5119 9.15563H9.90778C9.80832 9.15563 9.71294 9.19513 9.64262 9.26546C9.57229 9.33579 9.53278 9.43117 9.53278 9.53063V20.0325C9.53278 20.132 9.57229 20.2273 9.64262 20.2977C9.71294 20.368 9.80832 20.4075 9.90778 20.4075H12.6517C12.7511 20.4075 12.8465 20.368 12.9168 20.2977C12.9871 20.2273 13.0267 20.132 13.0267 20.0325V14.8413C13.0267 13.3734 13.3051 11.9519 15.1249 11.9519C16.9188 11.9519 16.942 13.6315 16.942 14.9363V20.033C16.942 20.1324 16.9815 20.2278 17.0519 20.2981C17.1222 20.3685 17.2176 20.408 17.317 20.408ZM3.5625 5.59012C3.5625 6.70237 4.47816 7.61756 5.5905 7.61756C6.70256 7.61747 7.61766 6.70172 7.61766 5.58966C7.61747 4.47759 6.70228 3.5625 5.59012 3.5625C4.47769 3.5625 3.5625 4.47787 3.5625 5.59012ZM4.21491 20.408H6.96244C7.06189 20.408 7.15728 20.3685 7.2276 20.2981C7.29793 20.2278 7.33744 20.1324 7.33744 20.033V9.53063C7.33744 9.43117 7.29793 9.33579 7.2276 9.26546C7.15728 9.19513 7.06189 9.15563 6.96244 9.15563H4.21491C4.11545 9.15563 4.02007 9.19513 3.94974 9.26546C3.87942 9.33579 3.83991 9.43117 3.83991 9.53063V20.033C3.83991 20.1324 3.87942 20.2278 3.94974 20.2981C4.02007 20.3685 4.11545 20.408 4.21491 20.408Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_106_309">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        Linkedin
      </a>
      <a href="#">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.0007 2.33301C12.4686 2.33301 10.9515 2.63478 9.53601 3.22108C8.12055 3.80738 6.83442 4.66675 5.75107 5.7501C3.56315 7.93802 2.33398 10.9055 2.33398 13.9997C2.33398 19.1563 5.68232 23.5313 10.314 25.083C10.8973 25.1763 11.084 24.8147 11.084 24.4997V22.528C7.85232 23.228 7.16398 20.9647 7.16398 20.9647C6.62732 19.6113 5.86898 19.2497 5.86898 19.2497C4.80732 18.5263 5.95065 18.5497 5.95065 18.5497C7.11732 18.6313 7.73565 19.7513 7.73565 19.7513C8.75065 21.5247 10.4657 20.9997 11.1307 20.7197C11.2357 19.9613 11.539 19.448 11.8657 19.1563C9.27565 18.8647 6.55732 17.8613 6.55732 13.4163C6.55732 12.1213 7.00065 11.083 7.75899 10.2547C7.64232 9.96301 7.23398 8.74967 7.87565 7.17467C7.87565 7.17467 8.85565 6.85967 11.084 8.36467C12.0057 8.10801 13.009 7.97967 14.0007 7.97967C14.9923 7.97967 15.9957 8.10801 16.9173 8.36467C19.1457 6.85967 20.1257 7.17467 20.1257 7.17467C20.7673 8.74967 20.359 9.96301 20.2423 10.2547C21.0007 11.083 21.444 12.1213 21.444 13.4163C21.444 17.873 18.714 18.853 16.1123 19.1447C16.5323 19.5063 16.9173 20.218 16.9173 21.303V24.4997C16.9173 24.8147 17.104 25.188 17.699 25.083C22.3307 23.5197 25.6673 19.1563 25.6673 13.9997C25.6673 12.4676 25.3656 10.9505 24.7792 9.53503C24.1929 8.11957 23.3336 6.83345 22.2502 5.7501C21.1669 4.66675 19.8808 3.80738 18.4653 3.22108C17.0498 2.63478 15.5327 2.33301 14.0007 2.33301Z"
            fill="#282828"
          />
        </svg>
        GitHub
      </a>
    </div>
    <InputField
      label="E-mail"
      type="email"
      placeholder="E-mail"
      id="email"
      onChange={handleUserData}
    />
    <InputField
      label="Пароль"
      type="password"
      placeholder="Пароль"
      id="password"
      onChange={handleUserData}
    />
    <InputField
      label="Підтвердьте пароль"
      type="password"
      placeholder="Підтвердьте пароль"
      id="repeat-password"
      onChange={handleUserData}
    />
    <InputSelect
      label="Тип реєстрації"
      options={[
        { name: "Кандидат", value: "employee" },
        { name: "Роботодавець", value: "employer" },
      ]}
      id="role"
      onChange={handleUserData}
    />
    <div className="agree">
      <InputCheckbox
        width="28px"
        height="28px"
        onChange={() => {}}
        required={true}
        id="terms-of-service"
      />
      <p>
        Я погоджуюся з <a href="#">Умовами обслуговування</a> та <br />{" "}
        <a href="#">Політикою конфіденційності</a>
      </p>
    </div>
  </>
);

/**
 * Step2 component renders the second step of the registration form for company details.
 *
 * @param {Object} props - The component props.
 * @param {function} props.handleStateChange - Function to handle state change for select input.
 * @param {string} props.select - The current value of the select input.
 * @returns {JSX.Element} The rendered Step2 component.
 */
const Step2 = ({
  handleUserData,
}: {
  handleUserData: (event: any) => void;
}) => (
  <>
    <span className="title">
      <svg
        width="26"
        height="21"
        viewBox="0 0 26 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.46061 16.25L12.2808 12.575C11.7841 12.525 11.4149 12.5 11.0074 12.5C7.60744 12.5 0.820312 14.175 0.820312 17.5V20H12.2808L8.46061 16.25ZM11.0074 10C13.8216 10 16.1009 7.7625 16.1009 5C16.1009 2.2375 13.8216 0 11.0074 0C8.1932 0 5.91385 2.2375 5.91385 5C5.91385 7.7625 8.1932 10 11.0074 10ZM16.6994 20.625L12.2808 16.25L14.0635 14.4875L16.6994 17.0875L23.2319 10.625L25.0146 12.3875L16.6994 20.625Z"
          fill="#282828"
        />
      </svg>
      <h2>Деталі компанії</h2>
    </span>
    <InputField
      label="Назва компанії"
      type="text"
      placeholder="Введіть назву вашої компанії"
      id="companyName"
      onChange={handleUserData}
    />
    <InputSelect
      label="Тип компанії"
      options={[
        { name: "Компанія", value: "Компанія" },
        { name: "Агенство", value: "Агенство" },
      ]}
      id="companyType"
      onChange={handleUserData}
    />
  </>
);
/**
 * Step3 component renders the third step of the registration form for onboarding.
 *
 * @returns {JSX.Element} The rendered Step3 component.
 */
const Step3 = () => (
  <>
    <div className="onboard-box">
      <h1>Онбордінг</h1>
      <div className="cards-wrapper">
        <div className="card">
          <img src={cardImg1} alt="" />
          <h3>Cтворити вакансію</h3>
          <p>Cтворення оголошення про роботу з ключовими деталями</p>
        </div>
        <div className="card">
          <img src={cardImg2} alt="" />
          <h3>Знайти найкращі збіги</h3>
          <p>
            Наш штучний інтелект підбирає найкращих кандидатів на кожну вакансію
          </p>
        </div>
        <div className="card">
          <img src={cardImg3} alt="" />
          <h3>Зв’язок</h3>
          <p>Зв’яжіться з кандидатами напряму через сайт</p>
        </div>
      </div>
    </div>
  </>
);

/**
 * Register component renders a multi-step registration form.
 *
 * @component
 * @example
 * return (
 *   <Register />
 * )
 *
 * @returns {JSX.Element} The rendered registration form component.
 **/
const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const { url } = useAuth();
  const [userData, handleUserData] = useFormState({
    email: "",
    password: "",
    role: "employee",
    userName: "",
    companyName: "",
    companyType: "Company",
  });
  const registerAsSeeker = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
      email: userData.email,
      password: userData.password,
      role: userData.role,
      username: userData.email,
    });

    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${url}/auth/users/`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };
  const registerAsEmployer = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Cookie", "csrftoken=ZqCy3CdwUsZK1cw8j1zlat9Nyo5AFymt");

    const raw = JSON.stringify({
      email: userData.email,
      password: userData.password,
      role: userData.role,
      username: userData.companyName,
      // Todo: remind backend to add this field
      // "companytype":userData.companyType
    });

    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${url}/auth/users/`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };
  const handleRegister = (event: FormEvent) => {
    console.log("Form submitted");
    event.preventDefault();
    if (userData.role === "employee") {
      navigate("/BuxOnline/seeker");
      // console.log('Register as seeker');
      registerAsSeeker();
    } else if (userData.role === "employer") {
      if (step === 3) {
        registerAsEmployer();
        navigate("/BuxOnline/company/cabinet/1");
        // console.log('Register as employer');
      } else {
        setStep(step + 1);
      }
    }
  };

  return (
    <>
      <div className="form-wrapper">
        <form onSubmit={handleRegister}>
          {step === 1 && <Step1 handleUserData={handleUserData} />}
          {step === 2 && <Step2 handleUserData={handleUserData} />}
          {step === 3 && <Step3 />}

          <SolidButton type="submit" fontSize="16px">
            {userData.role === "employer"
              ? step === 1
                ? "Далі"
                : step === 2
                ? "Зареєструватися"
                : "Розпочати"
              : "Зареєструватися"}
          </SolidButton>
          {step === 1 && (
            <p>
              Якщо у вас уже є обліковий запис, ви можете{" "}
              <Link to="/BuxOnline/login">ВВІЙТИ ТУТ</Link>
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default Register;
