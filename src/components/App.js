import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
  state = { language: 'english', color: 'blue' };

  onLanguageChange = (language, color) => {
    this.setState({ language, color });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            style={{ marginLeft: '10px' }}
            className="flag us"
            onClick={() => this.onLanguageChange('english', 'blue')}
          />
          <i
            className="flag de"
            onClick={() => this.onLanguageChange('german', 'red')}
          />
        </div>
        <ColorContext.Provider value={this.state.color}>
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
