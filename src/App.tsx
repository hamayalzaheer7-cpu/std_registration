import { useState, type ChangeEvent, type FormEvent } from "react";
import "./App.css";

type Student = {
  name: string;
  email: string;
  phone: string;
  course: string;
  gender: string;
};

function App() {
  const [form, setForm] = useState<Student>({
    name: "",
    email: "",
    phone: "",
    course: "",
    gender: "",
  });

  const [student, setStudent] = useState<Student | null>(null);
  const [message, setMessage] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.course ||
      !form.gender
    ) {
      setMessage("Please fill all fields!");
      setStudent(null);
    } else {
      setStudent(form);
      setMessage("Registration completed successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        course: "",
        gender: "",
      });
    }
  }

  return (
    <div className="page">
      <div className="main-card">
        <div className="top">
          <span className="status">NEW REGISTRATION</span>
        </div>

        <h1>Student Registration</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div>
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter full name"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Course</label>
              <select name="course" value={form.course} onChange={handleChange}>
                <option value="">Select Course</option>
                <option value="BSIT">BSIT</option>
                <option value="BSCS">BSCS</option>
                <option value="BBA">BBA</option>
              </select>
            </div>

            <div>
              <label>Gender</label>
              <select name="gender" value={form.gender} onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>
          </div>

          <button type="submit">Submit Registration →</button>
        </form>

        <p className="message">{message}</p>

        {student && (
          <div className="result">
            <h2>Submitted Student Information</h2>

            <div className="details">
              <p>
                <b>Name</b>
                <br />
                {student.name}
              </p>
              <p>
                <b>Email</b>
                <br />
                {student.email}
              </p>
              <p>
                <b>Phone</b>
                <br />
                {student.phone}
              </p>
              <p>
                <b>Course</b>
                <br />
                {student.course}
              </p>
              <p>
                <b>Gender</b>
                <br />
                {student.gender}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
