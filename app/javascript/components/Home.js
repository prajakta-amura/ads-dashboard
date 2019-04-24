import React from "react"
import PropTypes from "prop-types"
import axios from "axios";

class Home extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      info: []
    };
  }
  componentDidMount(){
     axios.get('http://localhost:3000/info')
        .then(response => {
            console.log(response)
            this.setState({
                info: response.data
            })
        })
        .catch(error => console.log(error))
  }

  render () {
    const info= this.state.info;
    return (    <h1>{info.msg}</h1>
    );
  }
}

Home.propTypes = {
  title: PropTypes.string
};
export default Home

