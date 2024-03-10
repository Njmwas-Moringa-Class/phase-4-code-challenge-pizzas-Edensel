import { useState } from "react";

function NewRestaurant({ onAddRestaurant }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/restaurants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, address }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to add restaurant");
        }
      })
      .then((data) => {
        onAddRestaurant(data);
        setName("");
        setAddress("");
        setErrorMessage("");
      })
      .catch((error) => {
        console.error("Error adding restaurant:", error);
        setErrorMessage("Failed to add restaurant. Please try again later.");
      });
  }

  return (
    <div className="container">
      <h2>Add New Restaurant</h2>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button type="submit">Add Restaurant</button>
      </form>
    </div>
  );
}

export default NewRestaurant;
