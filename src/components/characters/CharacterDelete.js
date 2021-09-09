import React from "react";
import axios from "axios";

class CharacterDelete extends React.Component {
  componentDidMount = () => {
    axios
      .delete(
        `https://ih-crud-api.herokuapp.com/characters/${this.props.match.params.id}`
      )
      .then((response) => {
        console.log(response);
        this.props.history.push("/");
      })
      .catch((err) => console.error(err));
  };

  render() {
    return <p>Deletando...</p>;
  }
}

export default CharacterDelete;
