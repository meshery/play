import { useState, useEffect } from "react";
import { Field, Formik, Form } from "formik";
import axios from "axios";
import MesheryText from "../../assets/images/meshery-light-text.svg";
import SignupFormWrapper from "./signupform.style.js";
import DiscussCallout from "../Discuss-Callout";

const SignupForm = ({onSubmit}) => {
  // Form values
  const [memberFormOne, setMemberFormOne] = useState({});

  const [formSubmitted, setSubmit] = useState(false);

  // const [validateAccounts, setValidateAccounts] = useState(false);
  const [validateRole, setValidateRole] = useState(false);
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [org, setOrg] = useState("");
  const [occupation, setOccupation] = useState("");
  const [role, setRole] = useState("");
  // const [google, setGoogleAccount] = useState("");
  // const [github, setGithubAccount] = useState("");
  // const [twitter, setTwitterAccount] = useState("");
  // const [linkedin, setLinkedinAccount] = useState("");

  // const errorAccounts = "Please provide at least one account";
  const errorRole = "Please select role as applicable";

  useEffect(() => {
    if (formSubmitted) {
      onSubmit();

      axios.post("https://hook.us1.make.com/r5qgpjel5tlhtyndcgjvkrdkoc65417y", {
        memberFormOne
      });
      window.scrollTo({
        top: 800,
        left: 0,
        behavior: "smooth"
      });
    }
  }, [formSubmitted, memberFormOne]);

  const PlayFormComponent = () => {
    return (
      <div className="form-page">
        <div className="desc-text">
          <p>
            Sign up for the early access of Meshery Playground today. Your
            request for access will be processed as quickly as possible. Due to
            the large influx of program participation requests, it may take some
            time before system access is granted. In the meantime to help you
            familiarize with Meshery, the maintainers team will send you
            additional information about the early access program.
          </p>
          <div className="desc-callout">
            <DiscussCallout />
          </div>
        </div>
        <div className="form-container">
          <h3 className="form-title">Get early access</h3>
          <Formik
            initialValues={{
              firstname: firstname,
              lastname: lastname,
              email: email,
              occupation: occupation,
              org: org,
              // google: google,
              // github: github,
              // twitter: twitter,
              // linkedin: linkedin,
              role: role,
              form: "playground"
            }}
            onSubmit={(values) => {
              if (values.role && values.email) {
                setMemberFormOne(values);
                setSubmit(true);
              } else {
                if (!values.role) {
                  setValidateRole(true);
                } else {
                  setValidateRole(false);
                }
                // if (!(values.google || values.github || values.twitter || values.linkedin)) {
                //   setValidateAccounts(true);
                // } else {
                //   setValidateAccounts(false);
                // }
                setFirstName(values.firstname);
                setEmail(values.email);
                setLastName(values.lastname);
                setOccupation(values.occupation);
                setOrg(values.org);
                // setGoogleAccount(values.google);
                // setTwitterAccount(values.twitter);
                // setGithubAccount(values.github);
                // setLinkedinAccount(values.linkedin);
                setRole(values.role);
              }
            }}
          >
            <Form className="form1" method="post">
              <div className="form-group">
                <label htmlFor="firstname" className="form-field">
                  First Name <span className="required-sign">*</span>
                </label>
                <Field
                  type="text"
                  className="text-field"
                  id="firstname"
                  name="firstname"
                  maxLength="32"
                  pattern="([A-Za-zŽžÀ-ÿ]+('{0,1}-{0,1}[A-Za-zÀ-ÿ])?[A-Za-zŽžÀ-ÿ]){1,32}|[A-Za-zŽžÀ-ÿ]"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastname" className="form-field">
                  Last Name <span className="required-sign">*</span>
                </label>
                <Field
                  type="text"
                  className="text-field"
                  id="lastname"
                  name="lastname"
                  maxLength="32"
                  pattern="([A-Za-zŽžÀ-ÿ]+('{0,1}-{0,1}[A-Za-zÀ-ÿ])?[A-Za-zŽžÀ-ÿ]){1,32}|[A-Za-zŽžÀ-ÿ]"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-field">
                  Email Address <span className="required-sign">*</span>
                </label>
                <Field
                  type="email"
                  className="text-field"
                  id="email"
                  name="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="occupation" className="form-field">
                  Occupation / Title <span className="required-sign">*</span>
                </label>
                <Field
                  type="text"
                  className="text-field"
                  id="occupation"
                  name="occupation"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="org" className="form-field">
                  Org / Company / School{" "}
                  <span className="required-sign">*</span>
                </label>
                <Field type="text" className="text-field" id="org" name="org" required/>
              </div>
              <div className="form-group">
                <label htmlFor="role" className="form-field">
                  What role best identifies you?{" "}
                  <span className="required-sign">*</span>
                </label>
              </div>
              {validateRole && (
                <p style={{ margin: "0px", color: "red", fontSize: "12px" }}>
                  {errorRole}
                </p>
              )}
              <div className="form-select" aria-labelledby="select">
                <Field as="select" name="role" required>
                  <option>Select your role</option>
                  <option value="Architect">Architect</option>
                  <option value="Business Operations">
                    Business Operations
                  </option>
                  <option value="Developer">Developer</option>
                  <option value="DevOps">DevOps</option>
                  <option value="Executive">Executive</option>
                  <option value="IT Operations">IT Operations</option>
                  <option value="Media">Media</option>
                  <option value="Product Manager">Product Manager</option>
                  <option value="Professor">Professor</option>
                  <option value="Sales Marketing">Sales Marketing</option>
                  <option value="Student">Student</option>
                  <option value="Other">Other</option>
                </Field>
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
              <div className="form-group">
                <label htmlFor="privacy-statement" className="form-field-privacy">
                By clicking “submit”, you agree to Meshery's 
                <a href="https://meshery.layer5.io/terms-of-service.html" target="_blank" rel="noopener noreferrer"> terms of use</a>,
                <a href="https://meshery.layer5.io/privacy-policy.html" target="_blank" rel="noopener noreferrer"> privacy policy </a>
                and use of cookies.
                </label>
              </div>
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
          <h2>
            Thank you for your interest in Meshery Playground early access
            program!
          </h2>
          <p>
            You are now signed up for the Meshery Playground early access
            program and your position on the waiting list is confirmed. Please
            wait patiently for a response from the Meshery team.
          </p>
          <p>
            If you have any questions in the meantime, please send an email to{" "}
            <a href="mailto:learn@meshery.io">learn@meshery.io</a>.
          </p>
          <h3 className="white">
            - Team <img src={MesheryText} alt="Meshery" />
          </h3>
        </div>
      </>
    );
  };

  return (
    <SignupFormWrapper>
      {!formSubmitted ? <PlayFormComponent /> : <ThankYou />}
    </SignupFormWrapper>
  );
};

export default SignupForm;
