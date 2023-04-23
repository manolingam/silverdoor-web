import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`      
      @font-face {
        font-family: "'Rajdhani', sans-serif";
        src: url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&display=swap');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      } 
    `}
  />
);

export default Fonts;
