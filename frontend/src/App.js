import * as React from 'react';

class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            items: [],
            isLoaded: false,
            id: '',
            year: '',
            name: '',
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state)
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { id, year, name } = this.state;

        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, year, name })
        };

        fetch('http://localhost:4000/cars', requestOptions)
            .then(response => {
                this.componentDidMount();
            })
            .catch((error) => {
                console.log(error);
            })
    }

    componentDidMount() {
        fetch('http://localhost:4000/cars')
            .then(res => res.json())

            .then(json => {
              this.setState({
                isLoaded: true,
                items: json,
              })
            })


  }

  render() {
      var {isLoaded, items} = this.state;

      if (!isLoaded) {
          return <div>Loading...</div>
      } else {
          return (
              <div className="App">
                  <ul>
                      {items.map(item => (
                          <li key={item.id}>
                              <h1>{item.name}</h1>
                              <h1>{item.year}</h1>
                          </li>
                      ))}
                  </ul>

                    <form onSubmit={this.onSubmit}>
                        <label>
                            Name:
                            <input type="text" name="id" onChange={this.handleChange} />
                            <input type="text" name="year" onChange={this.handleChange} />
                            <input type="text" name="name" onChange={this.handleChange} />
                        </label>
                        <input onSubmit={this.onSubmit} type="submit" value="Submit" />
                    </form>

              </div>
          );
      }
  }
}


export default App;
