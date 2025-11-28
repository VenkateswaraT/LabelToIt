import { useState } from "react";
export function RegistrationForm() {
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <form
      onSubmit={async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        if (formData.get("password") !== formData.get("confirm_password")) {
          alert("Passwords do not match!");
          return;
        }
        try {
          const response = await fetch(
            "http://localhost:3000/api/auth/register",
            {
              method: "POST",
              body: JSON.stringify({
                name: formData.get("name"),
                email: formData.get("email"),
                password: formData.get("password"),
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const parsedResponse = await response.json();
          console.log(parsedResponse);
          if (response.ok) {
            setMessage(parsedResponse.message);
            setIsError(false);
            form.reset();
          } else {
            if (Array.isArray(parsedResponse.message)) {
              setMessage(parsedResponse.message.join(", "));
            } else {
              setMessage(parsedResponse.message);
            }
            setIsError(true);
          }
        } catch (error) {
          console.log(error);
          setMessage("Network error. Please try again");
          setIsError(true);
        }
      }}
    >
      {message && (
        <div style={{ color: isError ? "red" : "green" }}>{message}</div>
      )}
      <h1>Registration Form </h1>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" name="name" />
      <br />
      <label htmlFor="email">Email:</label>
      <input id="email" type="email" name="email" />
      <br />
      <label htmlFor="password">Password:</label>
      <input id="password" type="password" name="password" />
      <br />
      <label htmlFor="confirm_password">Confirm Password:</label>
      <input id="confirm_password" type="password" name="confirm_password" />
      <br />
      <button>Registration</button>
    </form>
  );
}
