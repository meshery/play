import { useState, useEffect } from 'react';
import { Field, Formik, Form } from 'formik';
import axios from 'axios';
import MesheryText from '../../assets/images/meshery-light-text.svg';
import SignupFormWrapper from './signupform.style.js';
import DiscussCallout from '../Discuss-Callout';

/**
 * Helper function to check anonymous email domains
 *
 * Currently Checks for the following domains:
 * - duck.com
 * - anonaddy.me
 * - protonmail.com
 * - tuta.io
 */
function validateEmail(email) {
  // Regex pattern to match the disallowed domains
  var disallowedDomains = /@(duck\.com|anonaddy\.me|protonmail\.com|tuta\.io)$/i;

  // Check if the email matches the disallowed domains pattern
  if (disallowedDomains.test(email)) {
    return false; // Invalid email
  }

  return true; // Valid email
}

const SignupForm = ({ onSubmit }) => {
  // Form values
  const [memberFormOne, setMemberFormOne] = useState({});

  const [formSubmitted, setSubmit] = useState(false);

  // const [validateAccounts, setValidateAccounts] = useState(false);
  const [email, setEmail] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [org, setOrg] = useState('');
  const [occupation, setOccupation] = useState('');
  const [role, setRole] = useState('');
  // const [google, setGoogleAccount] = useState("");
  // const [github, setGithubAccount] = useState("");
  // const [twitter, setTwitterAccount] = useState("");
  // const [linkedin, setLinkedinAccount] = useState("");
  const [formValidations, setFormValidations] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // const errorAccounts = "Please provide at least one account";

  useEffect(() => {
    if (formSubmitted) {
      onSubmit();

      axios.post("https://hook.us1.make.com/7c1op88rysnmeitovt35fxzcv2spspp0", {
        memberFormOne
      });

      window.scrollTo({
        top: 800,
        left: 0,
        behavior: 'smooth'
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formSubmitted, memberFormOne]);

  const PlayFormComponent = () => {
    return (
      <div className='form-page' >        
        <div className='form-container' style={{  borderRadius: '30px'}}>
          <h3 className='form-title' style={{  borderTopLeftRadius: '30px', borderTopRightRadius: '30px'}}>Get early access</h3>
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
              form: 'playground'
            }}
            onSubmit={(values) => {
              if (!validateEmail(values.email)) {
                setFormValidations(true);
                setErrorMessage(
                  `Use of ${values.email} is not allowed. Please use a non-anonymous email address / domain.

The Meshery Playground is connected to live Kubernetes cluster(s) and allows users full-control over those clusters. Requiring users to register a non-anonymous user account keeps the Playground safe and healthy for all to enjoy. Without requiring users to sign-in, the Meshery Playground would allow anonymous access for anyone and everyone to potentially perform nefarious acts. Sign-up to receive a user account, entitled with perpetually free and full access the Playground environment.`
                );
              } else if (!values.role) {
                setFormValidations(true);
                setErrorMessage('Please select role as applicable');
              } else {
                setMemberFormOne(values);
                setSubmit(true);
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
            }}>
            <Form className='form1' method='post'style={{ borderBottomLeftRadius: '30px',borderBottomRightRadius: '30px'}}>
              <div className='form-group'>
                <label htmlFor='firstname' className='form-field'>
                  First Name <span className='required-sign'>*</span>
                </label>
                <Field
                  type='text'
                  className='text-field'
                  id='firstname'
                  name='firstname'
                  maxLength='32'
                  pattern="([A-Za-zŽžÀ-ÿ]+('{0,1}-{0,1}[A-Za-zÀ-ÿ])?[A-Za-zŽžÀ-ÿ]){1,32}|[A-Za-zŽžÀ-ÿ]"
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='lastname' className='form-field'>
                  Last Name <span className='required-sign'>*</span>
                </label>
                <Field
                  type='text'
                  className='text-field'
                  id='lastname'
                  name='lastname'
                  maxLength='32'
                  pattern="([A-Za-zŽžÀ-ÿ]+('{0,1}-{0,1}[A-Za-zÀ-ÿ])?[A-Za-zŽžÀ-ÿ]){1,32}|[A-Za-zŽžÀ-ÿ]"
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email' className='form-field'>
                  Email Address <span className='required-sign'>*</span>
                </label>
                <Field
                  type='email'
                  className='text-field'
                  id='email'
                  name='email'
                  pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='occupation' className='form-field'>
                  Occupation / Title <span className='required-sign'>*</span>
                </label>
                <Field
                  type='text'
                  className='text-field'
                  id='occupation'
                  name='occupation'
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='org' className='form-field'>
                  Org / Company / School <span className='required-sign'>*</span>
                </label>
                <Field type='text' className='text-field' id='org' name='org' required />
              </div>
              <div className='form-group'>
                <label htmlFor='role' className='form-field'>
                  What role best identifies you? <span className='required-sign'>*</span>
                </label>
              </div>
              <div className='form-select' aria-labelledby='select'>
                <Field as='select' name='role' required>
                  <option>Select your role</option>
                  <option value='Frontend Engineer'>Frontend Engineer</option>
                  <option value='Backend Engineer'>Backend Engineer</option>
                  <option value='Fullstack Engineer'>Fullstack Engineer</option>
                  <option value='Architect'>Architect</option>
                  <option value='Developer'>Developer</option>
                  <option value='DevOps Engineer/SysAdmin'>DevOps Engineer/SysAdmin</option>
                  <option value='Platform Engineer'>Platform Engineer</option>
                  <option value='Site Reliability Engineer'>Site Reliability Engineer</option>
                  <option value='Data Analyst'>Data Analyst</option>
                  <option value='Designer'>Designer</option>
                  <option value='Manager'>Manager</option>
                  <option value='Executive'>Executive</option>
                  <option value='IT Operations'>IT Operations</option>
                  <option value='Marketing'>Marketing</option>
                  <option value='Sales'>Sales</option>
                  <option value='Sales Engineer'>Sales Engineer</option>
                  <option value='Business Operations'>Business Operations</option>
                  <option value='Product Manager'>Product Manager</option>
                  <option value='Media/Analyst'>Media/Analyst</option>
                  <option value='Professor/Academic'>Professor/Academic</option>
                  <option value='Student'>Student</option>
                  <option value='Other'>Other</option>
                </Field>
              </div>

              {formValidations && (
                <p
                  style={{
                    margin: '0px',
                    color: 'red',
                    fontSize: '14px',
                    whiteSpace: 'pre-wrap',
                    justifyContent: 'left'
                  }}>
                  {errorMessage}
                </p>
              )}
              <button type='submit' className='submit-btn'>
                Submit
              </button>
              <div className='form-group'>
                <label htmlFor='privacy-statement' className='form-field-privacy'>
                  By clicking “submit”, you agree to Meshery's
                  <a
                    href='https://meshery.layer5.io/legal/terms-of-service.html'
                    target='_blank'
                    rel='noopener noreferrer'>
                    {' '}
                    terms of use
                  </a>
                  ,
                  <a
                    href='https://meshery.layer5.io/legal/privacy-policy.html'
                    target='_blank'
                    rel='noopener noreferrer'>
                    {' '}
                    privacy policy{' '}
                  </a>
                  and use of cookies.
                </label>
              </div>
            </Form>
          </Formik>
        </div>
        <div className='signup-text'>
          <h2>Sign-up to receive a user account, entitled with perpetually free and full access to the Playground environment.</h2>
          <p style={{textAlign: "center"}}>
            Meshery maintainers will verify and process your request for access as quickly as possible. Due to the large influx of program participation requests, it may take some time before system access is granted. To help you familiarize with Meshery in the meantime, you will receive confirmation of your position in the queue.
          </p>
          <div className='desc-callout'>
            <DiscussCallout />
          </div>
        </div>
      </div>
    );
  };

  const ThankYou = () => {
    return (
      <>
        <div className='thankyou-box'>
          <h2>Thank you for your interest in Meshery Playground early access program!</h2>
          <p>
            You are now signed up for the Meshery Playground early access program and your position
            on the waiting list is confirmed. Please wait patiently for a response from the Meshery
            team.
          </p>
          <p>
            If you have any questions in the meantime, please send an email to{' '}
            <a href='mailto:learn@meshery.io'>learn@meshery.io</a>.
          </p>
          <h3 className='white'>
            - Team <img src={MesheryText} alt='Meshery' />
          </h3>
        </div>
      </>
    );
  };

  return (
    <SignupFormWrapper>{!formSubmitted ? <PlayFormComponent /> : <ThankYou />}</SignupFormWrapper>
  );
};

export default SignupForm;
