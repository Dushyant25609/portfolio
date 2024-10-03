import React from 'react';
import { withFormik, FormikProps, FormikErrors, FormikConfig } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

// Define form values interface
interface FormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  details: string;
}

// Define external props for the form (if any)
interface OtherProps {}

// Define Yup validation schema
const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone number is required"),
  subject: Yup.string().required("Subject is required"),
  details: Yup.string().required("Details are required"),
});

// Define initial form values
const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  details: "",
};

// Function to handle API call on form submission
function contactAPI(values: FormValues, bag: any) {
  axios
    .post("https://portfolio-backend-rsxh.onrender.com/submit-form", {
      name: values.name,
      email: values.email,
      mobile: values.phone,
      subject: values.subject,
      details: values.details,
    })
    .then((response) => {
      const { message } = response.data;
      alert(message);
      bag.setSubmitting(false);
    })
    .catch((error) => {
      console.error("Error submitting contact form:", error);
      bag.setSubmitting(false);
    });
}

const inputClass = " px-4 py-2 rounded-lg bg-transparent "

// Contact form component definition with FormikProps typing
const ContactForm: React.FC<FormikProps<FormValues> & OtherProps> = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  dirty,
  isValid,
}) => {
  return (
    <div className="flex flex-col justify-center w-full items-center min-h-screen drop-shadow-purple">
      <div className="flex flex-col md:w-2/3 lg:w-1/2 2xl:w-1/3 bg-web-blur text-white px-8 py-12 rounded-lg gap-6 shadow-xl">
        <h1 className="self-center text-3xl md:text-4xl lg:text-5xl font-bold">Get in <span className='text-web-light-text' >Touch</span></h1>
        <form onSubmit={handleSubmit} className="flex flex-col md:grid grid-cols-2 gap-2 text-lg">
            
          
            <input
              type="text"
              name="name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
              placeholder='Name'
              className={`input-field border ${(errors.name && touched.name )? " border-red-500" : "  border-web-light-text"} ` + inputClass}
            />
          
            <input
              type="email"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              placeholder='Email'
              className={`input-field border ${(errors.email && touched.email) ? "border-red-500" : "  border-web-light-text"} `+inputClass}
            />
            
            <input
              type="text"
              name="phone"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.phone}
              placeholder='Monile number'
              className={` border ${errors.phone && touched.phone ? "border-red-500" : " border border-web-light-text"} `+inputClass}
            />
          
            <input
              type="text"
              name="subject"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.subject}
              placeholder='Subject'
              className={`border ${errors.subject && touched.subject ? "border-red-500" : " border border-web-light-text"} `+inputClass}
            />

          
            <textarea
              name="details"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.details}
              placeholder='Details'
              className={`input-field border col-span-2 ${errors.details && touched.details ? "border-red-500" : " border border-web-light-text"} `+inputClass}
            />
            
         

          <button
            type="submit"
            disabled={!isValid || !dirty}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4 col-span-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

// Higher-order component to connect Formik with the contact form
const ImprovedContactForm = withFormik<OtherProps, FormValues>({
  validationSchema: schema,
  mapPropsToValues: () => initialValues, // Correctly map the initial values
  handleSubmit: contactAPI,
})(ContactForm);

export default ImprovedContactForm;
