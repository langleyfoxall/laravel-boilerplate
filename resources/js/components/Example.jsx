import React from 'react';
import ReactDOM from 'react-dom';

const Example = () => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-header" testID="card-header">
            Example Component
          </div>
          <div className="card-body">
            I&quot;m an example component!
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Exported for unit tests
export default Example;

if (document.getElementById('example')) {
  ReactDOM.render(<Example />, document.getElementById('example'));
}
