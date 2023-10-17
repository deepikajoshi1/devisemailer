import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [email, setEmail] = useState('');
  const [salutation, setSalutation] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };


  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:3000/api/user', {
        email,
        salutation,
        firstName,
        lastName,
        dateOfBirth,
        gender
      });
      alert('Form submitted successfully');
      // Clear fields- reset
      setEmail('');
      setSalutation('');
      setFirstName('');
      setLastName('');
      setDateOfBirth('');
      setGender('');
    } catch (error) {
      alert('Error submitting form, Please try again');
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="mx-auto col-10 col-md-8 col-lg-6">
          <form onSubmit={handleSubmit}>
            {/* Email Input Field */}
            <div className="form-group row">
              <label htmlFor="email" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10 mt-2">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                  required />
              </div>
            </div>

            <div className="form-group row mt-2">
              <label htmlFor="salutation" className="col-sm-2 col-form-label">
                Salutation
              </label>
              <div className="col-sm-10">
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="salutation"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {salutation ? salutation : 'Select Salutation'}
                    <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="salutationDropdown">
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => setSalutation('Mr')}
                      >
                        Mr
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => setSalutation('Sir')}
                      >
                        Sir
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => setSalutation('Master')}
                      >
                        Master
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => setSalutation('Ms')}
                      >
                        Ms
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => setSalutation('Mrs')}
                      >
                        Mrs
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => setSalutation('Madam')}
                      >
                        Madam
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="form-group row mt-2">
              <label htmlFor="firstName" className="col-sm-2 col-form-label">
                First Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group row mt-2">
              <label htmlFor="lastName" className="col-sm-2 col-form-label">
                Last Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="dateOfBirth" className="col=sm-2 col-form-label">
                Date of Birth
              </label>
              <div className="col-sm-10">
                <input
                  type="date"
                  className="form-control"
                  id="dateOfBirth"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group row mt-2">
              <label htmlFor="gender" className="col-sm-2 col-form-label">
                Gender
              </label>
              <div className="col-sm-10">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="gender"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {gender ? gender : 'Select Gender'}
                    <span className="caret"></span>
                    <ul className="dropdown-menu" aria-labelledby="genderDropdown">
                      <li>
                        <button
                          className="dropdown-item"
                          type="button"
                          onClick={() => setGender('male')}
                        >
                          Male
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          type="button"
                          onClick={() => setGender('female')}
                        >
                          Female
                        </button>
                      </li>
                    </ul>

                  </button>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary mb-2 mt-2">
              Submit
            </button>
          </form>
        </div>





      </div>
    </div>

  )
};

export default UserForm;
