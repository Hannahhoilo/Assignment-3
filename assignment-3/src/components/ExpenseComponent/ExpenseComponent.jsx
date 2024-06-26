import React, { useState, useRef, useEffect} from "react";
import styles from "./ExpenseComponent.module.css";

//import RenderedExpenses from "../RenderedExpenses/RenderedExpenses";

const ExpenseComponent = ({renderExpensesFromLocalStorage}) => {
  const [userData, setUserData] = useState({
    expenseTitle: "",
    expenseAmount: "",
    expenseDate: "",
    phoneNumber: "",
    subject: "",
    message: "",
    format: "housing",
  });

  const [errors, setErrors] = useState({
    expenseTitleError: "",
    expenseAmountError: "",
    expenseDateError: "",
    phoneNumberError: "",
    subjectError: "",
    messageError: "",
  });

  const [expenses, setExpenses] = useState([]);

  const textAreaElement = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData((prev) => ({ ...prev, [name]: value }));

  };

  const generateEmptyErrors = () => ({
    expenseTitleError: "",
    expenseAmountError: "",
    expenseDateError: "",
    phoneNumberError: "",
    subjectError: "",
    messageError: "",
  });

  const handleSubmit = (e) => {
    console.log("clicked");
    e.preventDefault();
    const newErrors = generateEmptyErrors();

    if (userData.expenseAmount === "") {
      console.log("empty");
      newErrors.expenseAmountError = "Fill in amount!";
    }
  
    if (userData.expenseTitle === "") {
      newErrors.expenseTitleError = "Fill in title!";
    }
  
    if (!/^\d+$/.test(userData.phoneNumber)) {
      newErrors.phoneNumberError = "Only numbers allowed!";
    }
  
    if (userData.message.length > 80) {
      newErrors.messageError = "Max 80 characters allowed!";
      
    }
    setErrors(newErrors);
    console.log(newErrors)
    if (Object.values(newErrors).every(error => error === "")) {
      console.log("Form submitted successfully!");
      const newExpense = { ...userData };
      // Save to local storage
      localStorage.setItem(userData.expenseTitle, JSON.stringify(newExpense));
      // Clear form data
      setUserData({
        expenseTitle: "",
        expenseAmount: "",
        expenseDate: "",
        phoneNumber: "",
        subject: "",
        message: "",
        format: "housing",
      });
      renderExpensesFromLocalStorage();
    } else {
      console.log("error submit")
      setErrors(newErrors);
    }
  };

  return (
	<>
    <div>
      <form className={styles.form_element} onSubmit={handleSubmit}>
        <fieldset className={styles.contact_form_container}>
          <legend>Expense Tracker! ☁️</legend>

          <div className={styles.input_group}>
            <label htmlFor="expenseTitle">
              Expense title<sup>*</sup>
            </label>
            <input
              type="text"
              name="expenseTitle"
              placeholder="Enter your expense title"
              className={styles.input_element}
              value={userData.expenseTitle}
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
              placeholder="Enter your expense amount"
              className={styles.input_element}
              value={userData.expenseAmount}
              onChange={handleChange}
            />
            <p>{errors.expenseAmountError}</p>
          </div>

          <div className={styles.input_group}>
            <label htmlFor="expenseDate">
              Expense Date<sup>*</sup>
            </label>
            <input
              type="date"
              name="expenseDate"
              placeholder="Enter your Expense Date"
              className={styles.input_element}
              value={userData.expenseDate}
              onChange={handleChange}
            />
            <p>{errors.expenseDateError}</p>
          </div>

          <div className={styles.input_group}>
            <label htmlFor="phoneNumber">Phone number</label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Enter your phone number"
              className={styles.input_element}
              value={userData.phoneNumber}
              onChange={handleChange}
            />
            <p>{errors.phoneNumberError}</p>
          </div>

          <div className={styles.input_group}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Enter the subject"
              className={styles.input_element}
              value={userData.subject}
              onChange={handleChange}
            />
            <p>{errors.subjectError}</p>
          </div>

          <div className={styles.input_group}>
            <label htmlFor="format">Type of expense</label>
            <select
              name="format"
              htmlFor="format"
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

          <div className={styles.input_group}>
            <label htmlFor="message">
              Message<sup>*</sup>
            </label>
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Max characters 80"
              maxLength={80}
              className={styles.textarea_element}
              ref={textAreaElement}
              value={userData.message}
              onChange={handleChange}
            ></textarea>
            <div className={styles.message_error_and_count}>
              <p>{errors.messageError}</p>
              <p>
                Message count:{" "}
                {textAreaElement.current
                  ? textAreaElement.current.value.length
                  : 0}{" "}
                / 80
              </p>
            </div>
          </div>

          <button className={styles.submit_button} onClick={handleSubmit}>Submit</button>
        </fieldset>

        
      </form>
	  
	  { /*<RenderedExpenses expenses={expenses} /> */ }
    </div>
	</>
  );
};

export default ExpenseComponent;