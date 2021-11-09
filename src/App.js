import React, { useEffect } from 'react';
import env from 'react-dotenv';
import alanBtn from '@alan-ai/alan-sdk-web';

const App = () => {
  useEffect(() => {
    alanBtn({
      key: env.ALAN_SDK_KEY,
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines') {
          console.log(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      <h1>Dede AI News Reporter</h1>
    </div>
  );
};

export default App;
