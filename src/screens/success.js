import React from 'react';

const PaymentSuccess = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f8ff',
  };

  const headingStyle = {
    color: '#28a745',
    fontSize: '2.5rem',
    marginBottom: '1rem',
  };

  const paragraphStyle = {
    color: '#555',
    fontSize: '1.25rem',
  };

  const buttonStyle = {
    marginTop: '2rem',
    padding: '0.5rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  };

  const handleGoHome = () => {
    window.location.href = '/'; // Redirect to homepage
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Payment Successful!</h1>
      <p style={paragraphStyle}>Thank you for your payment. Your transaction has been successfully processed.</p>
      <button style={buttonStyle} onClick={handleGoHome}>
        Go to Homepage
      </button>
    </div>
  );
};

export default PaymentSuccess;
