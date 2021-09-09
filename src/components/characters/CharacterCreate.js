import React from "react";
import axios from "axios";

import CharacterForm from "./CharacterForm";

class CharacterCreate extends React.Component {
  state = {
    name: "",
    occupation: "",
    weapon: "",
    debt: false,
  };

  handleChange = (event) => {
    if (event.target.type === "checkbox") {
      return this.setState({ [event.target.name]: event.target.checked });
    }

    return this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://ih-crud-api.herokuapp.com/characters", this.state)
      .then((response) => {
        console.log(response);
        this.props.history.push("/");
      })
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <div>
        <h1>Criar novo personagem:</h1>
        <CharacterForm
          state={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default CharacterCreate;
