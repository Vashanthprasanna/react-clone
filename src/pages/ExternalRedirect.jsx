// ExternalRedirect.jsx
import { useEffect } from 'react';

const ExternalRedirect = ({ url }) => {
  useEffect(() => {
    window.open(url, "_blank", "noopener,noreferrer");
  }, [url]);

  return null;
};

export default ExternalRedirect;
