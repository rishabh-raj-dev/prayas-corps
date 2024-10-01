"use client";
import React, { useState } from 'react';

const PrayasCorpsNewsletter: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (API call or validation)
    console.log({ name, email });
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <div className="newsletter-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-mail"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <polyline points="3 7 12 13 21 7" />
          </svg>
        </div>
        <h1 className="newsletter-title">Join Prayas Corps Newsletter</h1>
        <p className="newsletter-description">
          Stay updated with the latest insights and developments from Prayas Corps. Subscribe to receive news, offers, and updates directly to your inbox.
        </p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="newsletter-input"
            placeholder="First & last name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="newsletter-input"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="newsletter-button">
            Subscribe Now
          </button>
        </form>
        <p className="newsletter-privacy">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-lock"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#000000"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <circle cx="12" cy="16" r="1" />
            <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
          </svg>
          We respect your privacy and never share your information with third parties.
        </p>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Arial', sans-serif;
          background-color: #f7f7f7;
        }

        .newsletter-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          padding: 0 20px;
          background-color: #fff;
        }

        .newsletter-content {
          text-align: center;
          background: #fff;
          border-radius: 8px;
          padding: 40px 20px;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
          max-width: 500px;
          width: 100%;
        }

        .newsletter-icon {
          background: linear-gradient(135deg, #0073e6, #003c99);
          width: 60px;
          height: 60px;
          margin: 0 auto 20px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .newsletter-title {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 10px;
          color: #333;
        }

        .newsletter-description {
          font-size: 16px;
          color: #555;
          margin-bottom: 30px;
        }

        .newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 20px;
        }

        .newsletter-input {
          padding: 12px 16px;
          font-size: 14px;
          border: 1px solid #ddd;
          border-radius: 4px;
          width: 100%;
        }

        .newsletter-button {
          padding: 12px 16px;
          background-color: #0073e6;
          color: #fff;
          font-size: 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .newsletter-button:hover {
          background-color: #005bb5;
        }

        .newsletter-privacy {
          font-size: 12px;
          color: #777;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
        }

        @media (max-width: 768px) {
          .newsletter-content {
            padding: 30px 15px;
          }

          .newsletter-title {
            font-size: 24px;
          }

          .newsletter-description {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default PrayasCorpsNewsletter;
