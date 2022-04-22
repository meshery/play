import { useState, useEffect } from "react";
import { Field, Formik, Form } from "formik";
import axios from "axios";
import MesheryText from "../../assets/images/meshery-light-text.svg"
import SignupFormWrapper from "./signupform.style.js";
import DiscussCallout from "../Discuss-Callout";
import mesheryCloud from "../../assets/images/meshery-cloud.png";

const SignupForm = () => {

  // Form values
  const [memberFormOne, setMemberFormOne] = useState({});

  const [formSubmitted, setSubmit] = useState(false);

  const [selected, setSelected] = useState(null); 

  useEffect(() => {
    if (formSubmitted) {
      axios.post("https://hook.integromat.com/bklgspwelgqkvbdj4coxompc62d78ngi", {
        memberFormOne,
      });
    }
  }, [formSubmitted, memberFormOne]);


  const PlayFormComponent = () => {
    return (
      <div className= "Form-page">   
      <div className="desc-text">      
        <p>
          Sign up for the early access of Meshery Playground today. Your request for access will be processed as quickly as possible. Due to the large influx of program participation requests, it may take some time before system access is granted. In the meantime to help you familiarize with Meshery, the Layer5 team will send you additional information about the early access program.
        </p>
        <img src={mesheryCloud} className="meshery-home" />
        <DiscussCallout />
        </div>
        <div className="form-container">
        <h3 className="form-title">Apply For the Beta Program</h3>
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            occupation: "",
            org: "",
            github: "",
            twitter: "",
            linkedin: "",
            role: "",
            form: "play",
          }}
          onSubmit={values => {
            setMemberFormOne(values);
            setSubmit(true);
          }}
        >
          <Form className="form1" method="post">

            <div className="form-group">
              <label htmlFor="fname" className="form-field">First Name<span className="required-sign">*</span></label>
              <Field type="text" className="text-field" id="firstname" name="firstname" maxLength="32"  pattern="[A-Za-z]{1,32}" required />
            </div>
            <div className="form-group">

              <label htmlFor="lname" className="form-field">Last Name<span className="required-sign">*</span></label>
              <Field type="text" className="text-field" id="lastname" name="lastname" maxLength="32"  pattern="[A-Za-z]{1,32}" required />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-field">Email Address <span className="required-sign">*</span></label>
              <Field type="text" className="text-field" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
            </div>
            <div className="form-group">
              <label htmlFor="occupation" className="form-field">Occupation / Title<span className="required-sign">*</span></label>
              <Field type="text" className="text-field" id="occupation" name="occupation" />
              </div>
              <div className="form-group">
              <label htmlFor="org" className="form-field">Org / Company / School<span className="required-sign">*</span></label>
              <Field type="text" className="text-field" id="org" name="org" />
            </div>
            <div  className="accounts">
              <label className="form-field">Account(s) to Connect</label>
              <p>
                Choose between Twitter, Google, LinkedIn, and GitHub, provide the username/handle of your user account for your preferred identity provider. When enrolled, participants will receive a free Meshery Cloud account and have full access to the Meshery Playground early access program for each of the following user accounts that you provide. Please provide at least one account.
              </p>
              <div className="form-group">
                <label htmlFor="google" className="form-field">Google</label>
                <Field type="text" placeholder="my-address@gmail.com" className="text-field" id="google" name="google" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
              </div>
              <div className="form-group">
                <label htmlFor="github" className="form-field">GitHub</label>
                <Field type="url" placeholder="https://github.com/" className="text-field" id="github" name="github" pattern="http(s?)(:\/\/)((www.)?)github.com(\/)([a-zA-z0-9\-_]+)" />
                </div>
                <div className="form-group">
                <label htmlFor="twitter" className="form-field">Twitter</label>
                <Field type="url" placeholder="https://twitter.com/" className="text-field" id="twitter" name="twitter" pattern="http(s?)(:\/\/)((www.)?)twitter.com(\/)([a-zA-z0-9\-_]+)" />
              </div>
              <div className="form-group">
                <label htmlFor="linkedin" className="form-field">Linkedin</label>
                <Field type="url" placeholder="https://www.linkedin.com/" className="text-field" id="linkedin" name="linkedin" />
            </div>
            </div>
            <div className="form-group">
            <label For="role" className="form-name">What role best identifies you?<span className="required-sign">*</span></label>
                      <div className="formRight">
                        <select onChange={(e) => setSelected(e.target.value || null)} value={selected || ""}>
                        <option value="" disabled>Select</option>
                          <option value="Architect">Architect</option>
                          <option value="Business Operations">Business Operations</option>
                          <option value="Developer">Developer</option>
                          <option value="DevOps">DevOps/SRE/Sysadmin </option>
                          <option value="Executive">Executive</option>
                          <option value="IT Operations">IT Operations</option>
                          <option value="Media"> Media/Analyst</option>
                          <option value="Product Manage">Product Manage</option>
                          <option value="Professor">Professor/Academic</option>
                          <option value="Sales Marketing">Sales Marketing</option>
                          <option value="Student">Student</option>
                          <option value="Other">Other</option>

                        </select>
                        </div>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </Form>
        </Formik>
        </div>
      </div>
    );
  };

  const ThankYou = () => {
    return (
      <>
        <div className="thankyou-box">
          <h2>Thank you for your interest in Meshery Playground early access program!</h2>
          <p>You are now signed up for the Meshery Playground early access program and your position on the waiting list is confirmed. Please patiently for a response from the Meshery team.</p>
          <p>If you have any questions in the meantime, please email <a href="mailto:meshmap@layer5.io">meshmap@layer5.io</a>.</p>
          <h3 className="white">- Team <img src={MesheryText} alt="Meshery" /></h3>
        </div>
      </>
    );
  };

  return (
    <SignupFormWrapper>
        {
          !formSubmitted ? <PlayFormComponent /> : <ThankYou /> 
        }
    </SignupFormWrapper>
  );
};

export default SignupForm;