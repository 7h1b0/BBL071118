import React from 'react';

function DoctolibBBL({ showBBL }) {
  if (showBBL) {
    return <p className="amazing-bbl">BBL</p>;
  }
  return null;
}

export default class App extends React.PureComponent {
  state = {
    showBBL: false,
  };

  handleClick = () => {
    this.setState(state => ({ showBBL: !state.showBBL }));
  };

  render() {
    const { showBBL } = this.state;
    return (
      <div>
        <p>Hello World</p>
        <button onClick={this.handleClick}>Toggle me!</button>
        <DoctolibBBL showBBL={showBBL} />
      </div>
    );
  }
}
