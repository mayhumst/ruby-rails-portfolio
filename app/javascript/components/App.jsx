import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import CoverPage from './CoverPage';

const App = () => {
  return (
    <html>
        <head>

        </head>
        <body>
            <CoverPage/>
            <div id="content-sidebar-wrapper">
                <Sidebar/>
                <Content/>
            </div>
        </body>
    </html>
  );
};

export default App;