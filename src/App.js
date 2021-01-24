import React, { useState } from "react";
import { Button } from "react-bootstrap";
import './style.css';

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();

    if (name && email) {
      const Person = { id: new Date().getTime().toString(), name, email };
      console.log(Person);
    }
  };

  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name 
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email 
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <Button onClick={handleSubmit} className="btn-primary">
          Add Person
        </Button>
      </div>
    </div>
  );
}
