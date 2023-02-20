import './App.css';
import axios from 'axios';
import React from 'react';

class App extends React.Component {
  state = { detalis: [], }

  componentDidMount() {
    let data;
    axios.get('http://127.0.0.1:8000')
      .then(res => {
        data = res.data;
        this.setState({
          detalis: data
        });
      })
      .catch(err => {
        console.log(err);
      })
  }
  render() {
    return (
      <div>
        <header>Данные из Django</header>
        <hr></hr>
        {this.state.detalis.map((output, id) => (
          <div key={id}>
            <div class='container'>
              <h2>{output.title}</h2>
              <p>{output.channel}</p>
            </div>
          </div>
        ))}
      </div>
    
    )
  }

}

export default App;
