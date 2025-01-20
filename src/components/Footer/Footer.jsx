import * as React from 'react';
import './Footer.css';
import {Box,Button, TextField} from '@mui/material';
import {styled} from '@mui/material/styles';
import {useState} from "react";

const FooterButton = styled(Button)({
  background:'#f4dcf8',
  color:'#6e6a6a',
  fontFamily:'Montserrat',
  fontStyle:'normal',
  border:'1px solid #6e6a6a',
  width:'100%',
  margin:'auto',
  marginTop:'25px',
  borderRadius:'10px',
  lineHeight:'35px',
  minWidth:'300px'
})
const Footer = () => {
  const [email, setEmail] = useState("")
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Email: ", email);
  }
  const handleChange = (e) => {
    const value  = e.target.value;
    setEmail(value);
    console.log("Email: ", email);
  };
  return(
    <>
      <Box sx={{width:'100%',background:'#a476c3'}}>
        <div className='footer-main'>
          <div>
            <div className='footer-title'>JOIN THE WAITLIST</div>
            <div>
              <form onSubmit={submitHandler}>
                <TextField
                    className={"footer-email"}
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={handleChange}
                    fullWidth
                    InputLabelProps={{
                      style: { color: 'black' },
                      focused: { style: { color: 'white' } }
                    }}
                />
                <Button type="submit" onSubmit={submitHandler} variant="contained" color="primary" style={{marginTop:'25px',width:'100%',background:'#f4dcf8',color:'#6e6a6a',fontFamily:'Montserrat',fontStyle:'normal',border:'1px solid #6e6a6a',lineHeight:'35px',minWidth:'300px'}}>Submit</Button>
              </form>
            </div>

          </div>
        </div>
        <div className='footer-title1'>Vectors designed by FreePik</div>
      </Box>

    </>
  );
}
export default Footer;
