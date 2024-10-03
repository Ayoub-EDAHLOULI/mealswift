/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import "./SignInForm.scss"; // Assurez-vous de créer ce fichier pour le style

function SignInForm() {
  const [credentials, setCredentials] = useState({
    email: "",
    mot_de_passe: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: credentials.email,
        password: credentials.mot_de_passe,
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      // Rediriger vers le tableau de bord
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message || "Une erreur s'est produite lors de la connexion");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login">
      <div className="login_container">
        <h1>Connexion</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Entrez votre email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="mot_de_passe"
            placeholder="Entrez votre mot de passe"
            value={credentials.mot_de_passe}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Connexion en cours..." : "Se connecter"}
          </button>
          {error && <p className="error">{error}</p>}
          <Link href="/signup">
            Vous n&apos;avez pas de compte ? Inscrivez-vous
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
