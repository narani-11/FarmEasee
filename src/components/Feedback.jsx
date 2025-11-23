import React, { useState } from "react";
import Notification from "./Notification";

const Feedback = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [notification, setNotification] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setNotification("Thank you for your feedback! We appreciate your input.");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <>
      <Notification
        message={notification}
        type="success"
        onClose={() => setNotification(null)}
      />
      <section className="feedback container">
        <h2>Feedback</h2>
        <form className="small-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" value={form.name} onChange={handleChange} />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Feedback
            <textarea
              name="message"
              rows="6"
              value={form.message}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit Feedback</button>
        </form>
      </section>
    </>
  );
};

export default Feedback;
