import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class CharacterList extends React.Component {
  state = {
    characters: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://ih-crud-api.herokuapp.com/characters"
      );

      this.setState({ characters: [...response.data] });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div>
        <h1>Lista de personagens</h1>

        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Está em dívida?</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {this.state.characters.map((characterObj) => {
              return (
                <tr key={characterObj.id}>
                  <th>{characterObj.id}</th>
                  <td>{characterObj.name}</td>
                  <td>{characterObj.debt ? "Sim" : "Não"}</td>
                  <td>
                    <Link className="me-2" to={`/character/${characterObj.id}`}>
                      Ver detalhes
                    </Link>

                    <Link
                      title="Editar registro"
                      className="me-2"
                      to={`/character/update/${characterObj.id}`}
                    >
                      <i className="fas fa-edit"></i>
                    </Link>

                    <Link
                      title="Deletar registro"
                      to={`/character/delete/${characterObj.id}`}
                    >
                      <i className="fas fa-trash-alt text-danger"></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CharacterList;
