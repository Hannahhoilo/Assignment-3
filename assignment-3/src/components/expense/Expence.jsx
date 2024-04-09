/* import React from "react";
import { useRef, useState } from "react";
import styles from "./FormComponet.module.css";

const FormComponent = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    phoneNumberError: "",
    subjectError: "",
    messageError: "",
  });

  const textAreaElement = useRef(null);

  const validateForm = () => {
    const clonedErrors = { ...errors };
    if (!userData.firstName.trim()) {
      clonedErrors.firstName = "First name is required!";
    } else if (userData.firstName.length > 20) {
      clonedErrors.firstNameError = "Maximum characters allowed is 20!";
    }

    if (!userData.lastName.trim()) {
      clonedErrors.lastNameError = "Last name is required!";
    } else if (userData.lastName.length > 20) {
      clonedErrors.lastNameError = "Maximum characters allowed is 20!";
    }

    if (!userData.email.trim()) {
      clonedErrors.emailError = "Email is required!";
    }

    if (userData.phoneNumber.trim()) {
      if (userData.phoneNumber.length !== 8) {
        clonedErrors.phoneNumberError = "Phone number must be 8 digits!";
      }
    }

    if (!userData.subject.trim()) {
      clonedErrors.subjectError = "Subject is required!";
    } else if (userData.subject.length > 20) {
      clonedErrors.subjectError = "Maximum characters allowed is 20!";
    }

    if (!userData.message.trim()) {
      clonedErrors.messageError = "Message is required!";
    }
    setErrors(clonedErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors)=>({
      ...prevErrors, [`${name}Error`]: "",
    }));
    setUserData((prev) => ({ ...prev, [name]: value }));
    if (name === "message" && value.length >= 300) {
      setErrors((prev) => ({
        ...prev,
        messageErrors: "Maximum characters allowed is 300!",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventdefault();
    validateForm();
  };

  return (
    <form className={styles.form_element} onSubmit={handleSubmit}>
      <fieldset className={styles.contact_form_container}>
        <legend>Contact us</legend>
        <section className={styles.name_section}>
          <div className={styles.input_group}>
            <label htmlFor="firstName">
              First name<sup>*</sup>
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              className={styles.input_element}
              onChange={handleChange}
            />
            <p>{errors.firstNameError}</p>
          </div>
          <div className={styles.input_group}>
            <label htmlFor="lastName">
              Last name<sup>*</sup>
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              className={styles.input_element}
              onChange={handleChange}
            />
            <p>{errors.lastNameError}</p>
          </div>
        </section>
        <section className={styles.contact_section}>
          <div className={styles.input_group}>
            <label htmlFor="email">
              Email<sup>*</sup>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className={styles.input_element}
              onChange={handleChange}
            />
            <p>{errors.emailError}</p>
          </div>
          <div className={styles.input_group}>
            <label htmlFor="phoneNumber">Phone number</label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Enter your phone number"
              className={styles.input_element}
              onChange={handleChange}
            />
            <p>{errors.phoneNumberError}</p>
          </div>
        </section>
        <div className={styles.input_group}>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Enter the subject"
            className={styles.input_element}
            onChange={handleChange}
          />
          <p>{errors.subjectError}</p>
        </div>
        <div className={styles.input_group}>
          <label htmlFor="message">
            Message<sup>*</sup>
          </label>
          <textarea
            name=""
            cols="30"
            rows="10"
            placeholder="Max characters 300"
            maxLength={300}
            className={styles.textarea_element}
            ref={textAreaElement}
            onChange={handleChange}
          ></textarea>
          <div className={styles.message_error_and_count}>
            <p>{errors.messageError}</p>
            <p>Message count: {textAreaElement.current ? textAreaElement.current.value.length: 0} / 300</p>
          </div>
        </div>
        <button className={styles.submit_button}>Submit</button>
      </fieldset>
    </form>
  );
};
export default Expence;
 */