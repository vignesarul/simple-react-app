import React from 'React';
import ReactDomServer from 'react-dom/server';

import App from 'components/App';

const serverRenderer = () => {
  return ReactDomServer.renderToString(
    <App/>
  );
};

export default serverRenderer;