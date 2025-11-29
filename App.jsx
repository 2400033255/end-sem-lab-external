import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    doctor: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const doctors = ["Dr. Smith", "Dr. Johnson", "Dr. Williams", "Dr. Brown"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Data:", formData);
    setSubmitted(true);
  };

  return (
    <div className="App">
      <div className="card">
        <h1>Doctor Appointment Booking</h1>

        {submitted ? (
          <div className="confirmation">
            <h2>Appointment Confirmed!</h2>
            <p>
              Thank you, {formData.name}. Your appointment with {formData.doctor} on {formData.date} at {formData.time} has been booked.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              Full Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>

            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>

            <label>
              Phone Number:
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </label>

            <label>
              Appointment Date:
              <input type="date" name="date" value={formData.date} onChange={handleChange} required />
            </label>

            <label>
              Appointment Time:
              <input type="time" name="time" value={formData.time} onChange={handleChange} required />
            </label>

            <label>
              Select Doctor:
              <select name="doctor" value={formData.doctor} onChange={handleChange} required>
                <option value="">--Select Doctor--</option>
                {doctors.map((doc, index) => (
                  <option key={index} value={doc}>{doc}</option>
                ))}
              </select>
            </label>

            <button type="submit">Book Appointment</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
