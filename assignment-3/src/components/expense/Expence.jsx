/* /* import React from "react";
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




/*  

KODEN MIN 23.4.24




import React from "react";
import { useRef, useState } from "react";
import styles from "./ExpenceComponent.module.css";
/*
Expense title
 Expense amount
 Expense date <3 */

/* const ExpenceComponent = () => {
  const [userData, setUserData] = useState({
    expenseTitle: "",
    expenseAmount: "",
    expenceDate: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    expenseTitleError: "",
    expenceAmountError: "",
    expenceDateError: "",
    phoneNumberError: "",
    subjectError: "",
    messageError: "",
  });

  const textAreaElement = useRef(null);

  const validateForm = () => {
    const clonedErrors = { ...errors };
    if (!userData.expenseTitle.trim()) {
      clonedErrors.expenseTitle = "Expence title is required!";
    } else if (userData.expenseTitle.length > 20) {
      clonedErrors.expenseTitleError = "Maximum characters allowed is 20!";
    }

    if (!userData.expenseAmount.trim()) {
      clonedErrors.expenseAmountError = "Last name is required!";
    } else if (userData.expenseAmount.length > 20) {
      clonedErrors.expenseAmountError = "Maximum characters allowed is 20!";
    }

    if (!userData.expenceDate.trim()) {
      clonedErrors.expenceDateError = "Expence Date is required!";
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
    //e.preventDefault
    const { name, value } = e.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [`${name}Error`]: "",
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
        <legend>Expense Tracker! ☁️</legend>

        <section className={styles.name_section}>
          <div className={styles.input_group}>
            <label htmlFor="expenseTitle">
              Expence title<sup>*</sup>
            </label>
            <input
              type="text"
              name="expenseTitle"
              placeholder="Enter your expence title"
              className={styles.input_element}
              onChange={handleChange}
            />
            <p>{errors.expenseTitleError}</p>
          </div>
          <div className={styles.input_group}>
            <label htmlFor="expenseAmount">
              Expense Amount<sup>*</sup>
            </label>
            <input
              type="text"
              name="expenseAmount"
              placeholder="Enter your expence amount"
              className={styles.input_element}
              onChange={handleChange}
            />
            <p>{errors.expenseAmountError}</p>
          </div>
        </section>
        <section className={styles.contact_section}>
          <div className={styles.input_group}>
            <label htmlFor="expenceDate">
              Expence Date<sup>*</sup>
            </label>
            <input
              type="date"
              name="expenceDate"
              placeholder="Enter your Expence Date"
              className={styles.input_element}
              onChange={handleChange}
            />
            <p>{errors.expenceDateError}</p>
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

          <div className={styles.input_group}>
            <label htmlFor="format">Type of expence</label>
            <select
              name="format"
              class="format"
              className={styles.input_element}
              onChange={handleChange}
              required
            >
              <option value="housing">Housing</option>
              <option value="grocery">Grocery</option>
              <option value="transportation">Transportation</option>
              <option value="clothes">Clothes</option>
              <option value="other">Other</option>
            </select>
          </div>
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
            <p>
              Message count:{" "}
              {textAreaElement.current
                ? textAreaElement.current.value.length
                : 0}{" "}
              / 300
            </p>
          </div>
        </div>

        <label for="quantity">Quantity:</label>
        <input type="number" name="quantity" class="quantity" required></input>

        <label for="format"></label>
        <select name="format" class="format" required>
          <option value="housing">Housing</option>
          <option value="grocery">Grocery</option>
          <option value="transportation">Transportation</option>
          <option value="clothes">Clothes</option>
          <option value="other">Other</option>
        </select>
        <button className={styles.submit_button}>Submit</button>
      </fieldset>

      <div className={styles.rendered_expence_container}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias vitae
          autem accusamus quod, similique aut in consequatur consectetur,
          veritatis quos animi quo ducimus ipsum suscipit eos exercitationem
          asperiores minima fugit.
        </p>
        <li>
          {}
        </li>
      </div>
    </form>
  );
};
export default ExpenceComponent;
 */


{/*
import React, { useState, useRef } from "react";
import styles from "./ExpenceComponent.module.css";

const ExpenceComponent = () => {
  const [userData, setUserData] = useState({
    expenseTitle: "",
    expenseAmount: "",
    expenceDate: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    expenseTitleError: "",
    expenseAmountError: "",
    expenceDateError: "",
    phoneNumberError: "",
    subjectError: "",
    messageError: "",
  });

  const [expenses, setExpenses] = useState([]);

  const textAreaElement = useRef(null);

  const validateForm = () => {
    const clonedErrors = { ...errors };
    // Validation logic remains the same...
    setErrors(clonedErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [`${name}Error`]: "",
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
    e.preventDefault();
    validateForm();
    if (Object.values(errors).every((error) => !error)) {
      const newExpense = {
        title: userData.expenseTitle,
        amount: userData.expenseAmount,
        date: userData.expenceDate,
        phoneNumber: userData.phoneNumber,
        subject: userData.subject,
        message: userData.message,
      };
      setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
      setUserData({
        expenseTitle: "",
        expenseAmount: "",
        expenceDate: "",
        phoneNumber: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div>
      <form className={styles.form_element} onSubmit={handleSubmit}>
        <fieldset className={styles.contact_form_container}>
          <legend>Expense Tracker! ☁️</legend>

         

          <section className={styles.name_section}>
          <div className={styles.input_group}>
            <label htmlFor="expenseTitle">
              Expence title<sup>*</sup>
            </label>
            <input
              type="text"
              name="expenseTitle"
              placeholder="Enter your expence title"
              className={styles.input_element}
              onChange={handleChange}
            />
            <p>{errors.expenseTitleError}</p>
          </div>
          <div className={styles.input_group}>
            <label htmlFor="expenseAmount">
              Expense Amount<sup>*</sup>
            </label>
            <input
              type="text"
              name="expenseAmount"
              placeholder="Enter your expence amount"
              className={styles.input_element}
              onChange={handleChange}
            />
            <p>{errors.expenseAmountError}</p>
          </div>
        </section>
        <section className={styles.contact_section}>
          <div className={styles.input_group}>
            <label htmlFor="expenceDate">
              Expence Date<sup>*</sup>
            </label>
            <input
              type="date"
              name="expenceDate"
              placeholder="Enter your Expence Date"
              className={styles.input_element}
              onChange={handleChange}
            />
            <p>{errors.expenceDateError}</p>
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

          <div className={styles.input_group}>
            <label htmlFor="format">Type of expence</label>
            <select
              name="format"
              class="format"
              className={styles.input_element}
              onChange={handleChange}
              required
            >
              <option value="housing">Housing</option>
              <option value="grocery">Grocery</option>
              <option value="transportation">Transportation</option>
              <option value="clothes">Clothes</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

          <button className={styles.submit_button}>Submit</button>
        </fieldset>

        <div className={styles.rendered_expence_container}>
        <h2>Rendered Expenses</h2>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              <h3>{expense.title}</h3>
              <p>Amount: {expense.amount}</p>
              <p>Date: {expense.date}</p>
             
            </li>
          ))}
        </ul>
      </div>
      </form>

      
    </div>
  );
};

export default ExpenceComponent;

*/}
