
import React, { useState } from "react";

function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    password: "",
    confirmPassword: "",
    country: "",
    skills: [],
    address: "",
    terms: false
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setForm({
        ...form,
        [name]: checked
      });
    } else {
      setForm({
        ...form,
        [name]: value
      });
    }
  };

  const handleSkills = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setForm({
        ...form,
        skills: [...form.skills, value]
      });
    } else {
      setForm({
        ...form,
        skills: form.skills.filter((skill) => skill !== value)
      });
    }
  };

  const validateForm = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.phone) {
      newErrors.phone = "Phone number is required";
    } else if (form.phone.length !== 10) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!form.dob) {
      newErrors.dob = "Date of birth is required";
    }

    if (!form.gender) {
      newErrors.gender = "Select your gender";
    }

    if (form.password.length < 6) {
      newErrors.password =
        "Password must contain at least 6 characters";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!form.country) {
      newErrors.country = "Select your country";
    }

    if (!form.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!form.terms) {
      newErrors.terms = "You must accept the terms";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log(form);

      setSuccess("Registration successful!");

      setForm({
        name: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        password: "",
        confirmPassword: "",
        country: "",
        skills: [],
        address: "",
        terms: false
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <h1>Registration Form</h1>

        <label>Full Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <p>{errors.name}</p>

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <p>{errors.email}</p>

        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Enter 10 digit phone number"
        />
        <p>{errors.phone}</p>

        <label>Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
        />
        <p>{errors.dob}</p>

        <label>Gender</label>

        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={form.gender === "Male"}
            onChange={handleChange}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={form.gender === "Female"}
            onChange={handleChange}
          />
          Female
        </label>

        <p>{errors.gender}</p>

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter password"
        />
        <p>{errors.password}</p>

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm password"
        />
        <p>{errors.confirmPassword}</p>

        <label>Country</label>
        <select
          name="country"
          value={form.country}
          onChange={handleChange}
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
        </select>

        <p>{errors.country}</p>

        <label>Skills</label>

        <label>
          <input
            type="checkbox"
            value="HTML"
            onChange={handleSkills}
          />
          HTML
        </label>

        <label>
          <input
            type="checkbox"
            value="CSS"
            onChange={handleSkills}
          />
          CSS
        </label>

        <label>
          <input
            type="checkbox"
            value="JavaScript"
            onChange={handleSkills}
          />
          JavaScript
        </label>

        <label>
          <input
            type="checkbox"
            value="React"
            onChange={handleSkills}
          />
          React
        </label>

        <label>Address</label>
        <textarea
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Enter your address"
        ></textarea>

        <p>{errors.address}</p>

        <label>
          <input
            type="checkbox"
            name="terms"
            checked={form.terms}
            onChange={handleChange}
          />
          I agree to the Terms and Conditions
        </label>

        <p>{errors.terms}</p>

        <button type="submit">
          Register
        </button>

        {success && <p>{success}</p>}

      </form>
    </div>
  );
}

export default Form;

