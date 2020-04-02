import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      states: [],
      search: '',
      textInput: ''
    };
  }
  componentDidMount = params => {
    let url = 'https://corona.lmao.ninja/states';
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          states: data
        });
      });
  };
  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };
  searchCorona = e => {
    let input = this.state.search;
    this.setState({
      search: '',
      textInput: input
    });
  };

  render() {
    let filteredList = this.state.states.filter((corona, index) => {
      return corona.state
        .toLowerCase()
        .includes(this.state.textInput.toLowerCase());
    });
    console.log(filteredList);

    let coronaStateList = filteredList.map((coronaState, index) => {
      return (
        <li>
          <h4 style={{ margin: 0 }}>{coronaState.state}</h4>
          <br />
          <p>Cases: {coronaState.cases}</p>
          <br />
          <p>Deaths: {coronaState.deaths}</p>
          <br />
          <p>Today's Cases: {coronaState.todayCases}</p>
          <br />
          <p>Today's Deaths: {coronaState.todayDeaths}</p>
          <hr />
        </li>
      );
    });

    return (
      <div>
        <div className='search'>
          <input
            type='text'
            value={this.state.search}
            onChange={this.handleChange}
          />
          <button onClick={this.searchCorona}>Search</button>
        </div>
        <ul>{coronaStateList}</ul>
      </div>
    );
  }
}

export default App;
