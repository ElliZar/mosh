import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Counter from "./components/Counter";

const App = props => {
  return (
      <div>
        <Counter/>
      </div>
  );
};

App.propTypes = {

};

export default App;
