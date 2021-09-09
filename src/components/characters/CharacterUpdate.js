import React from "react";
import axios from "axios";

import CharacterForm from "./CharacterForm";

class CharacterUpdate extends React.Component {
  state = {
    name: "",
    occupation: "",
    weapon: "",
    debt: false,
  };

  componentDidMount = () => {
    axios
      .get(
        `https://ih-crud-api.herokuapp.com/characters/${this.props.match.params.id}`
      )
      .then((response) => {
        this.setState({ ...response.data });
      })
      .catch((err) => console.error(err));
  };

  handleChange = (event) => {
    if (event.target.type === "checkbox") {
      return this.setState({ [event.target.name]: event.target.checked });
    }

    return this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    console.log(this.state);

    try {
      const response = await axios.put(
        `https://ih-crud-api.herokuapp.com/characters/${this.props.match.params.id}`,
        this.state
      );
      console.log(response);
      // Navegar de volta pra rota /
      this.props.history.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div>
        <h1>Editar personagem:</h1>
        <CharacterForm
          state={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default CharacterUpdate;
