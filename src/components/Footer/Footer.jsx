import * as React from 'react';
import './Footer.css';
import {Box,Button, TextField} from '@mui/material';
import {styled} from '@mui/material/styles';
import {useState} from "react";
import {createDocument, createUser} from "../../appWriteFunctions";

const Footer = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("");
  const [emailErrorText, setEmailErrorText] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState("");


  async function saveEmailData(emailData) {
    const response = await createDocument("67c7c3e40039a46ef881", emailData);
    console.log('Email submitted:', response);
  }

  async function createUserAccount(email, password, name) {
    const response = await createUser(email, password, name);
    console.log('User created:', response);
  }


  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  const resetFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      console.error('Invalid email format');
      setEmailErrorText("Invalid email");
      return;
    }
    setEmailError("");
    setEmailErrorText("");
    const email_data = {
      "first_name": firstName,
        "last_name": lastName,
        "email": email,
      "source": "desiroomy"
    }
    console.log("First Name: ", firstName);
    console.log("Last Name: ", lastName);
    console.log("Email: ", email);
    saveEmailData(email_data);
    createUserAccount(email, "default-password", firstName + " " + lastName);
    setSubmissionMessage("Thank you for submitting!");
    resetFields();
    // Clear the submission message after 30 seconds
    setTimeout(() => {
      setSubmissionMessage("");
    }, 10000);
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };
  return(
    <>
      <Box sx={{width:'100%',background:'#a476c3'}}>
        <div className='footer-main'>
          <div>
            <div className='footer-title'>JOIN THE WAITLIST</div>
            <div className={'footer-email-block'}>
              <form onSubmit={submitHandler}>
                <div style={{display: 'flex', gap: '10px', marginBottom: '10px'}}>
                  <TextField
                      className={"footer-first-name"}
                      label="First Name"
                      variant="outlined"
                      name="firstName"
                      value={firstName}
                      onChange={handleChange}
                      fullWidth
                      InputLabelProps={{
                        style: {color: 'black'},
                        focused: {style: {color: 'white'}}
                      }}
                  />
                  <TextField
                      className={"footer-last-name"}
                      label="Last Name"
                      variant="outlined"
                      name="lastName"
                      value={lastName}
                      onChange={handleChange}
                      fullWidth
                      InputLabelProps={{
                        style: {color: 'black'},
                        focused: {style: {color: 'white'}}
                      }}
                  />
                </div>
                <TextField
                    className={"footer-email"}
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    fullWidth
                    error={!!emailError}
                    helperText={emailError}
                    InputLabelProps={{
                      style: {color: 'black'},
                      focused: {style: {color: 'white'}}
                    }}
                />
                <div className={'footer-email-error-text'}>{emailErrorText}</div>
                <Button type="submit" className={'footer-submit'} onSubmit={submitHandler} variant="contained"
                        color="primary" style={{
                  marginTop: '25px',
                  width: '100%',
                  background: '#f4dcf8',
                  color: '#6e6a6a',
                  fontFamily: 'Montserrat',
                  fontStyle: 'normal',
                  border: '1px solid #6e6a6a',
                  lineHeight: '35px',
                  minWidth: '300px'
                }}>Submit</Button>
              </form>
              {submissionMessage && <div className="submission-message color-blue">{submissionMessage}</div>}
            </div>

          </div>
        </div>
        <div className='footer-title1'>Vectors designed by FreePik</div>
      </Box>

    </>
  );
}
export default Footer;
