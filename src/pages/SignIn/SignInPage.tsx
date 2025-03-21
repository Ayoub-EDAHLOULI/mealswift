/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import ShortBackground from "@/components/ShortBackground/ShortBackground";
import SignInForm from "@/components/SignInForm/SignInForm";

function SignInPage() {
  return (
    <section>
      <ShortBackground background="/images/signup.jpg" />
      <SignInForm />
    </section>
  );
}

export default SignInPage;