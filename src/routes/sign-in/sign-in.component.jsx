// import { getRedirectResult } from "firebase/auth";
import {
  // auth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createUserDocFromAuth,
} from "../../utils/firebase.utils";
import SignUpForm from "../../components/sign-up-from/sign-up-form.component";

const SignIn = () => {
  // useEffect(() => {
  //   async function main() {
  //     const res = await getRedirectResult(auth);
  //     if (res) {
  //       const userDocRef = await createUserDocFromAuth(res.user);
  //       console.log(userDocRef);
  //     }
  //   }
  //   main();
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>{" "}
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
    </div>
  );
};

export default SignIn;
