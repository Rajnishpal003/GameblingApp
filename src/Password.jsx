// src/ChangePassword.js
import React, { useState } from "react";
import "./styles.css"; // Import your CSS styles
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== rePassword) {
      alert("New passwords do not match!");
      return;
    }

    // Handle password update logic here, e.g., send to backend
    console.log("Old Password:", oldPassword);
    console.log("New Password:", newPassword);
  };

  return (
    <div className="change-password-container">
      <Sidebar />
      <div className="change-password-content">
        <Header />
        <div className="md-card-content">
          <form onSubmit={handleSubmit}>
            <table className="form-table">
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="oldPassword">Enter Your Old Password</label>
                    <br />
                    <input
                      type="password"
                      id="oldPassword"
                      className="md-input"
                      placeholder="Enter Your Old Password"
                      required
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                      aria-label="Enter Your Old Password"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <br />
                    <label htmlFor="newPassword">Your New Password</label>
                    <br />
                    <input
                      type="password"
                      id="newPassword"
                      className="md-input"
                      placeholder="Enter Your New Password"
                      required
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      aria-label="Enter Your New Password"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <br />
                    <label htmlFor="rePassword">
                      Enter Your New Password (Re Type)
                    </label>
                    <br />
                    <input
                      type="password"
                      id="rePassword"
                      className="md-input"
                      placeholder="Re-Enter Your New Password"
                      required
                      value={rePassword}
                      onChange={(e) => setRePassword(e.target.value)}
                      aria-label="Re-Enter Your New Password"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="uk-margin-medium-top">
                      <button type="submit" className="md-btn md-btn-danger">
                        Update
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
