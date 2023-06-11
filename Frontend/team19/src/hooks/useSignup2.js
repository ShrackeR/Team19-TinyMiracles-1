import { useState } from "react";
import { useAuthContext2 } from "./useAuthContext2";

export const useSignup2 = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext2();

  const signup2 = async (email, password,name,gender,address,phone) => {
    setIsLoading(true);
    setError(null);
    console.log(email);
    const response = await fetch(" https://miracleachievers.shreeraj.me/backend/api/admin/adminsignup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password,name,gender,address,phone}),
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem("admin", JSON.stringify(json));

      // update the auth context
      dispatch({ type: "LOGIN", payload: json });

      // update loading state
      setIsLoading(false);
    }
  };

  return { signup2 , isLoading, error };
};
