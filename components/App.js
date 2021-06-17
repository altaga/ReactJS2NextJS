import React from "react"
import Logo from './assets/logos/logo.svg';
import styles from "../styles/App.module.css"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: <>Edit <code>src/App.js</code> and save to reload.</>
    }
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("/api/hello")
        .then(res => res.json())
        .then(
          (result) => {
           console.log(result)
           this.setState({
             text:<>{result.date}</>
           })
          },
          (error) => {
            console.log(error)
          }
        )
    }, 5000);
  }

  componentWillUnmount() {
  }
  
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.Appheader}>
          <Logo className={styles.Applogo} />
          <p>
            {this.state.text}
          </p>
          <a
            className={styles.Applink}
            href="https://altaga-hacker.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

App.propTypes = {

};

export default App;