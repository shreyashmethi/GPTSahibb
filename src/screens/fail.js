import React from 'react';

const PaymentFailure = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#fff0f0',
  };

  const headingStyle = {
    color: '#dc3545',
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
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  };

  const handleRetryPayment = () => {
    window.location.href = '/'; // Redirect to retry payment page
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Payment Failed</h1>
      <p style={paragraphStyle}>Oops! Something went wrong with your transaction. Please try again.</p>
      <button style={buttonStyle} onClick={handleRetryPayment}>
        Go To Home
      </button>
    </div>
  );
};

export default PaymentFailure;
