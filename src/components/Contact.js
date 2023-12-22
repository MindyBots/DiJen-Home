import React, { useState } from 'react'
import emailjs from 'emailjs-com'

function Contact() {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && phone && email && message) {
       
      const serviceId = 'service_b0e3ckn';
            const templateId = 'template_huk2rkh';
            const userId = 'LXNVGvBfNMYCoIV-L';
            const templateParams = {
                name,
                email,
                phone,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
        setEmailSent(true);
    } else {
        alert('Please fill in all fields.');
    }
}

  return (
    <div className="container contact">
      <h2 className="main-title text-center contact-padding">CONTACT</h2>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-4 mb-1">
            <input name="name" placeholder="Name" value = {name} className="contact-input" onChange={e => setName(e.target.value)} />
          </div>
          <div className="col-md-4 mb-1">
            <input
              name="phone"
              value ={phone}
              placeholder="Phone Number"
              className="contact-input"
              onChange={e => setPhone(e.target.value)}
            />
          </div>
          <div className="col-md-4 mb-1">
            <input name="email" placeholder="Email" value = {email} className="contact-input" onChange={e => setEmail(e.target.value)} />
          </div>
        </div>
      </div>
      <br />
      <div className="col-md-12">
      <textarea
            name="message"
            placeholder="Your Message"
            value={message}
            className="contact-textarea"
            onChange={e => setMessage(e.target.value)}
          />
      </div>

      <br></br>
      <div className="row">
        <div className="col-md-12">
          <input className="form-btn" type="submit" value="Send Message" onClick={submit} />
        </div>
      </div>
      <div className="row">
      <span className={emailSent ? null : "hide-thankyou"}>Thank you for your message, we will be in touch in no time!</span>
      </div>
    </div>
  );
}
export default Contact;
