import Link from "next/link";
import "./SignUpForm.scss";

function SignUpForm() {
  return (
    <div className="register">
      <div className="register_container">
        <h1>Sign Up</h1>
        <form>
          <input type="text" name="name" placeholder="Enter your name" />
          <input type="email" name="email" placeholder="Enter your email" />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <button type="submit">Create account</button>
          <Link href="/signin">Already have an account? Log in</Link>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
