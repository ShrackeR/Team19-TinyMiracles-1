import React, { useEffect } from 'react';

const GoogleTranslateButton = () => {
  const loadGoogleTranslateAPI = () => {
    const script = document.createElement("script");
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  };

  useEffect(() => {
    loadGoogleTranslateAPI();
  }, []);

  return (
    <button onClick={loadGoogleTranslateAPI}>Load Google Translate API</button>
  );
};

export default GoogleTranslateButton;
