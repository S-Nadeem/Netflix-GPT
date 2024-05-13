import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useState, useRef } from "react";
import { Login_cover, Profile_pic } from "../utils/constants";
import { validate } from "../utils/Validation";
import Header from "./Header";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/store/Slices/userSlice";

const Login = () => {
  const [onSignin, setonSignin] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);

  const dispatch = useDispatch();

  const onSinginSignUpHandler = () => {
    setonSignin(!onSignin);
  };

  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);

  const onSubmitHandler = () => {
    const message = validate(email.current.value, password.current.value);

    seterrorMessage(message);
    if (message) return;

    if (!onSignin) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: fullname.current.value,
            photoURL: Profile_pic,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              seterrorMessage(error.message);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={Login_cover} alt="login Cover" className="brightness-50" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" rounded-lg bg-[#000000b3] absolute p-12  w-[30%] m-14 mx-auto text-white left-0 right-0 my-36"
      >
        <h1 className="font-bold text-3xl py-2">
          {onSignin ? "Sign In" : "Sign Up"}
        </h1>
        {!onSignin && (
          <input
            ref={fullname}
            type="text"
            name=""
            id=""
            className="p-4 my-4 w-full bg-transparent border  rounded-md"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          type="text"
          name=""
          id=""
          className="p-4 my-4 w-full bg-transparent border  rounded-md"
          placeholder="Email Address"
        />
        <input
          ref={password}
          type="password"
          name=""
          id=""
          className="p-4 my-4 w-full bg-transparent border rounded-md"
          placeholder="Password"
        />
        <p className="text-red-700 font-normal p-2">{errorMessage}</p>
        <button
          onClick={onSubmitHandler}
          className="w-full bg-red-700 rounded-lg p-4 my-6 mt-0"
        >
          {onSignin ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-[#ffffffb3]">
          {onSignin ? "New to Netflix?" : "Already Registered"}
          &nbsp;
          <span
            onClick={onSinginSignUpHandler}
            className="text-white font-bold hover:underline cursor-pointer"
          >
            {onSignin ? "Sign up now." : "Sign In now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
