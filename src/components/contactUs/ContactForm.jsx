import { FaAngleRight, FaPhone, FaUser } from "react-icons/fa6";
import TextInput from "../inputFields/TextInput";
import TextareaInput from "../inputFields/TextareaInput";
import { Link } from "react-router-dom";
import { BiLockOpen } from "react-icons/bi";
import { useState } from "react";
import { MainContent } from "../../constants/mainContent";
import {
  fieldValidator,
  mobileNumberValidator,
} from "../../utils/inputValidator";
import ButtonMain from "../UI/ButtonMain";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    agreeTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return fieldValidator(value);
      case "phone":
        return mobileNumberValidator(value);
      case "message":
        return fieldValidator(value);
      case "agreeTerms":
        return value ? "" : "You must agree to the terms.";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, fieldValue),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    for (const key in formData) {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);

    const dataToSend = [
      [
        formData.name,
        formData.phone,
        formData.message,
        new Date().toLocaleString(),
      ],
    ];

    try {
      const response = await fetch(`${MainContent.formApi}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Form data successfully submitted:", result);

      // Reset form
      setFormData({
        name: "",
        phone: "",
        message: "",
        agreeTerms: false,
      });

      // Redirect to WhatsApp
      const whatsappMessage = `Hello, I would like to inquire about Plans. My name is ${formData.name}, and my phone number is ${formData.phone}. Here's my message: ${formData.message}`;
      const whatsappURL = `https://wa.me/${
        MainContent.contactNo
      }?text=${encodeURIComponent(whatsappMessage)}`;
      window.location.href = whatsappURL;
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="ContactForm">
      <div className="input-container">
        <TextInput
          labelName={"Your name"}
          icon={<FaUser />}
          placeholder={"Your name..."}
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />
        <TextInput
          labelName={"Contact Number"}
          icon={<FaPhone />}
          placeholder={"Your phone..."}
          name="phone"
          min={10}
          max={10}
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
        />
        <TextareaInput
          labelName={"Message"}
          name="message"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
        />
      </div>
      <div className="check-term">
        <input
          type="checkbox"
          name="agreeTerms"
          checked={formData.agreeTerms}
          onChange={handleChange}
        />
        <p className="sm-txt">
          I agree to the <Link to="/terms">Terms & Conditions</Link> of Business
          Name.
        </p>
      </div>
      {errors.agreeTerms && (
        <p className="error ml-10 mt-2">{errors.agreeTerms}</p>
      )}
      <ButtonMain clsName={"black"} onclick={handleSubmit} name= {isSubmitting ? "Submitting..." : "Submit"} />
    </div>
  );
};

export default ContactForm;
