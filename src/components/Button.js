import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  render() {
    return (
      <ColorContext.Consumer>
        {color => (
          <button
            className={`ui button ${color === 'blue' ? 'primary' : 'negative'}`}
          >
            <LanguageContext.Consumer>
              {value => (value === 'english' ? 'Submit' : 'Senden')}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
