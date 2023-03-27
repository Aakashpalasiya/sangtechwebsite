import React from 'react';

const ContactUs = () => {
  return (
    
    <form>
<div class="px-5 ">
<div className="about-section text-center mt-5">
  <p className="section-header"><h1 class="display-4">Contact Us</h1><span className="default-color"></span></p>
  </div>
<div className="mb-3 ">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input type="text" className="form-control" id="firstName" />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input type="text" className="form-control" id="lastName" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" id="email" />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea className="form-control" id="message" rows={3} />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
</div>
      
    </form>
  );
};

export default ContactUs;