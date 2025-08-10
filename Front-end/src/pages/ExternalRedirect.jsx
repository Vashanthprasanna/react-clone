// ExternalRedirect.jsx
import { useEffect } from 'react';

const ExternalRedirect = ({url,page}) => {
  useEffect(() => {
    {
      if(page){
        window.location.href = "/";
        window.location.href = url;
      }
      else{
        window.open(url, "_blank");
        window.location.href = "/";
      }
    }
    
  }, []);

  return page || null;
};

export default ExternalRedirect;
