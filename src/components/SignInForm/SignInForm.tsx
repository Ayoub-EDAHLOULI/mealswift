import Link from "next/link";
import "./SignInForm.scss";

function SignInForm() {
  return (
    <div className="login">
      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <input type="email" name="email" placeholder="Enter your email" />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <button type="submit">Login</button>
          <Link href="/signup">Don't have an account? Sign up</Link>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
