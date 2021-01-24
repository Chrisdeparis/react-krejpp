import React, { useState } from "react";

export default function App() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (Name && Email) {
      const Person = { id: new Date().getTime().toString(), Name, Email };
      console.log(Person);
    }
  };

  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name :
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Name"
          value={Name}
          onChange={e => setName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email :
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          value={Email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <button onClick={handleSubmit} className="btn-primary">Add Person</button>
      </div>
    </div>
  );
}
