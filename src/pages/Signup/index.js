import Link from "next/link";
import React, { useState, useEffect } from "react";

const Button = ({ children, isPrimary, icon }) => (
  <button
    className={`flex justify-center w-1/2 px-6 py-3 text-xl rounded-md md:w-auto md:mx-2 focus:outline-none 
      ${
        isPrimary
          ? "text-white bg-blue-500 hover:bg-blue-400"
          : "text-blue-500 border border-blue-500 hover:bg-blue-100 dark:border-blue-400 dark:text-blue-400"
      }`}
  >
    {icon && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        {icon}
      </svg>
    )}
    <span className="mx-2 font-button">{children}</span>
  </button>
);

const InputField = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  children,
}) => (
  <div className="font-regular">
    <label className="block mb-2 font-title text-xl text-gray-600 dark:text-gray-200">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${
        type === "email" && "font-sans"
      } block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring focus:ring-blue-400 focus:outline-none focus:ring-opacity-40`}
    />
    {children}
  </div>
);

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const nameRegex = /^[آ-ی]{2,20}$/;
  const phoneRegex = /^09\d{9}$/;
  const emailRegex = /^\S+@\S+\.\S+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    if (
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      setErrorMessage("لطفا فرم را به طور کامل پر کنید");
      return;
    }

    if (!nameRegex.test(firstName)) {
      setErrorMessage("لطفاً نام معتبر وارد کنید");
      return;
    }
    if (!nameRegex.test(lastName)) {
      setErrorMessage("لطفاً نام خانوادگی معتبر وارد کنید");
      return;
    }
    if (!phoneRegex.test(phoneNumber)) {
      setErrorMessage("شماره تلفن معتبر نیست");
      return;
    }
    if (!emailRegex.test(email)) {
      setErrorMessage("آدرس ایمیل معتبر نیست");
      return;
    }
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "رمز عبور باید حداقل ۸ کاراکتر، یک حرف و یک عدد داشته باشد"
      );
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("رمز عبور و تکرار رمز عبور با هم مطابقت ندارند");
      return;
    }

    setSuccessMessage("اطلاعات ثبت شد!");
  };
  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 5) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/\d/.test(password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;
    setPasswordStrength(strength);
  };

  const getProgressColor = () => {
    if (passwordStrength < 50) return "bg-red-500";
    if (passwordStrength < 75) return "bg-orange-500";
    if (passwordStrength < 100) return "bg-blue-500";
    return "bg-green-500";
  };
  useEffect(() => {
    if (errorMessage || successMessage) {
      const timer = setTimeout(() => {
        setErrorMessage("");
        setSuccessMessage("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [errorMessage, successMessage]);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex justify-center min-h-screen">
        <div
          className="hidden lg:block lg:w-3/5 bg-cover"
          style={{
            backgroundPosition: "center",
            backgroundImage:
              "url('https://i.postimg.cc/nh9x7Qmg/download.webp')",
          }}
        >
          <div className="flex items-center h-full px-20 dark:bg-gray-800 bg-gray-500 dark:bg-opacity-65 bg-opacity-60">
            <div>
              <h2 className="text-4xl font-title font-bold dark:text-slate-300 text-slate-100">
                کلینیک سلامت پوست مو اصفهان
              </h2>

              <p className="max-w-xl text-2xl font-regular mt-3 text-gray-200 dark:text-slate-900 bg-slate-400 bg-opacity-90 p-5 rounded-3xl">
                به راحتی با ثبت نام در این سایت ٬از زمان ساعت های رزرو در دسترس
                مطلع شوید و حتی در خانه خود٬ به شکل آنلاین خدمات خود را در ساعت
                مد نظر در روز مشخص تعیین و وقت کلینیک را برای خود رزرو نمایید
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-3xl p-8 lg:px-12 lg:w-3/5">
          <div className="w-full">
            <h1 className="text-3xl font-title font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
              همین الان اکانت خود را بسازید!
            </h1>

            <p className="mt-4 text-3xl font-service text-gray-500 dark:text-gray-400">
              اطلاعات شخصی خود را وارد تایید نمایید تا اکانت شما را بسازیم!
            </p>

            <div className="mt-6">
              <h2 className="text-gray-500 font-service text-2xl dark:text-gray-300">
                نوع ورود را تعیین نمایید
              </h2>

              <div className="mt-3 md:flex md:items-center md:-mx-2">
                <Button isPrimary>کاربر</Button>
                <Button>مدیر</Button>
              </div>
            </div>

            <form
              className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
              onSubmit={handleSubmit}
            >
              <InputField
                label="نام"
                placeholder="آرین"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <InputField
                label="نام خانوادگی"
                placeholder="پورحسین"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <InputField
                label="شماره تلفن"
                placeholder="XXX-XX-XXXX-XXX"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <InputField
                label="آدرس ایمیل"
                type="email"
                placeholder="Arianpourhossein@yahoo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputField
                label="کلمه عبور"
                type="password"
                placeholder="رمزعبور دلخواه را وارد کنید"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  calculatePasswordStrength(e.target.value);
                }}
              >
                <div className="mt-2">
                  <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`flex flex-col justify-center rounded-full text-xs text-white text-center transition duration-500 ${getProgressColor()}`}
                      style={{ width: `${passwordStrength}%` }}
                    ></div>
                  </div>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    قدرت رمز عبور: {passwordStrength}%
                  </p>
                </div>
              </InputField>
              <InputField
                label="تکرار کلمه عبور"
                type="password"
                placeholder="رمزعبور خود را مجدد وارد کنید"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <button className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                <span className="font-button text-2xl">ثبت نام</span>
              </button>
            </form>
            <p className="mt-6 text-2xl font-button text-center text-gray-400">
              قبلا ثبت نام کردی ؟
              <Link
                href="/Login"
                className="text-blue-500 mr-3 text-xl font-button focus:outline-none hover:underline-offset-8 focus:underline hover:underline"
              >
                ورود
              </Link>
            </p>
          </div>
          {errorMessage && (
            <div className="w-full top-24 md:w-1/2 lg:w-1/3 z-50 flex justify-between border-solid mb-2 md:top-28 xl:top-32 absolute select-none rounded-l-lg border-l-4 border-red-400 bg-red-100 p-4 font-medium">
              <span className="font-service text-2xl">{errorMessage}</span>
              <button
                className="ml-4 text-red-500 font-bold font-button"
                onClick={() => setErrorMessage("")}
              >
                بستن
              </button>
            </div>
          )}

          {successMessage && (
            <div className="w-full md:w-1/2 lg:w-1/3 z-50 border-solid mb-2 absolute top-28 xl:top-32 select-none rounded-l-lg border-l-4 border-green-400 bg-green-100 p-4 font-medium">
              <span>{successMessage}</span>
              <button
                className="ml-4 text-green-500 font-bold"
                onClick={() => setSuccessMessage("")}
              >
                بستن
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Signup;
