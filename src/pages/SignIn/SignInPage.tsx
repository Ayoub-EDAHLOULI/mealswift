/* eslint-disable react/react-in-jsx-scope */
import ShortBackground from "@/components/ShortBackground/ShortBackground";
import SignInForm from "@/components/SignInForm/SignInForm";

function SignInPage() {
  return (
    <section>
      <ShortBackground title="" background="/images/signup.jpg" />
      <SignInForm />
    </section>
  );
}

export default SignInPage;
