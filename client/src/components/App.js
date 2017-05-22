import React, { Component } from 'react';
import AppHeader from './app_header'
import AppFooter from './app_footer'
import AppContent from './app_content'

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <AppContent />
        <AppFooter />
      </div>
    );
  }
}

export default App