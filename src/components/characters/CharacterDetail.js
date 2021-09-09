import React from "react";
import axios from "axios";

class CharacterDetail extends React.Component {
  state = {
    name: "",
    occupation: "",
    weapon: "",
    debt: false,
    id: "",
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

  render() {
    return (
      <div>
        <h1>Detalhes do personagem #{this.state.id}</h1>

        <p>
          <strong>Nome: </strong>
          {this.state.name}
        </p>
        <p>
          <strong>Ocupação: </strong>
          {this.state.occupation}
        </p>
        <p>
          <strong>Arma: </strong>
          {this.state.weapon}
        </p>
        <p>
          <strong>Está em dívida? </strong>
          {this.state.debt ? "Sim" : "Não"}
        </p>
      </div>
    );
  }
}

export default CharacterDetail;
