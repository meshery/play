import { useState, useEffect } from "react";
import { Field, Formik, Form } from "formik";
import axios from "axios";
import MesheryText from "../assets/images/meshery-light-text.svg"
import SignupFormWrapper from "./signupform.style.js";


const SignupForm = () => {

  // Form values
  const [memberFormOne, setMemberFormOne] = useState({});

  const [formSubmitted, setSubmit] = useState(false);

  useEffect(() => {
    if (formSubmitted) {
      axios.post("", {
        memberFormOne,
      });
    }
  }, [formSubmitted, memberFormOne]);


  const PlayFormComponent = () => {
    return (
      <>         
        <p className="desc-text">
          Sign up for the early access of Meshery Play ground today. Your request for access will be processed as quickly as possible. Due to the large influx of program participation requests, it may take some time before system access is granted. In the meantime to help you familiarize with Meshery, the Layer5 team will send you additional information about the early access program.
        </p>
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
          }}
          onSubmit={values => {
            setMemberFormOne(values);
            setSubmit(true);
          }}
        >
          <Form className="form" method="post">
            <label htmlFor="email" className="form-name">Email Address <span className="required-sign">*</span></label>
            <Field type="text" className="text-field" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
            <label htmlFor="fname" className="form-name">First Name <span className="required-sign">*</span></label>
            <Field type="text" className="text-field" id="firstname" name="firstname" maxLength="32"  pattern="[A-Za-z]{1,32}" required />
            <label htmlFor="lname" className="form-name">Last Name <span className="required-sign">*</span></label>
            <Field type="text" className="text-field" id="lastname" name="lastname" maxLength="32"  pattern="[A-Za-z]{1,32}" required />
            <label htmlFor="occupation" className="form-name">Occupation / Title<span className="required-sign">*</span></label>
            <Field type="text" className="text-field" id="occupation" name="occupation" />
            <label htmlFor="org" className="form-name">Organization / Company / School<span className="required-sign">*</span></label>
            <Field type="text" className="text-field" id="org" name="org" />
            <div  className="accounts">
              <label className="form-name">Account(s) to Connect</label>
              <p>
                Choose between Twitter, Google, LinkedIn, and GitHub, provide the username/handle of your user account for your preferred identity provider. When enrolled, participants will receive a free Meshery Cloud account and have full access to the Meshery Playground early access program for each of the following user accounts that you provide. Please provide at least one account.
              </p>
              <div className="accounts_group">
                <label htmlFor="google" className="form-name">Google</label>
                <Field type="text" placeholder="my-address@gmail.com" className="text-field" id="google" name="google" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                <label htmlFor="github" className="form-name">GitHub</label>
                <Field type="url" placeholder="https://github.com/" className="text-field" id="github" name="github" pattern="http(s?)(:\/\/)((www.)?)github.com(\/)([a-zA-z0-9\-_]+)" />
                <label htmlFor="twitter" className="form-name">Twitter</label>
                <Field type="url" placeholder="https://twitter.com/" className="text-field" id="twitter" name="twitter" pattern="http(s?)(:\/\/)((www.)?)twitter.com(\/)([a-zA-z0-9\-_]+)" />
                <label htmlFor="linkedin" className="form-name">Linkedin</label>
                <Field type="url" placeholder="https://www.linkedin.com/" className="text-field" id="linkedin" name="linkedin" />
              </div>
            </div>

            <label htmlFor="role" className="form-name">What role best identifies you?<span className="required-sign">*</span></label>
            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <Field type="radio" name="role" value="Architect" />
                  Architect
              </label>
              <label>
                <Field type="radio" name="role" value="Business Operations" />
                  Business Operations
              </label>
              <label>
                <Field type="radio" name="role" value="Developer" />
                  Developer
              </label>
              <label>
                <Field type="radio" name="role" value="DevOps" />
                  DevOps/SRE/Sysadmin
              </label>
              <label>
                <Field type="radio" name="role" value="Executive" />
                  Executive
              </label>
              <label>
                <Field type="radio" name="role" value="IT Operations" />
                  IT Operations
              </label>
              <label>
                <Field type="radio" name="role" value="Media" />
                  Media/Analyst
              </label>
              <label>
                <Field type="radio" name="role" value="Product Manager" />
                  Product Manager
              </label>
              <label>
                <Field type="radio" name="role" value="Professor" />
                  Professor/Academic
              </label>
              <label>
                <Field type="radio" name="role" value="Sales Marketing" />
                  Sales Marketing
              </label>
              <label>
                <Field type="radio" name="role" value="Student" />
                  Student
              </label>
              <label>
                <Field type="radio" name="role" value="Other" />
                  Other
              </label>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </Form>
        </Formik>
      </>
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