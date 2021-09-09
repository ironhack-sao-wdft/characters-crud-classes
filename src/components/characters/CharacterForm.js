import TextInput from "../form/TextInput";
import CheckboxInput from "../form/CheckboxInput";

function CharacterForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <TextInput
        id="characterFormName"
        label="Nome"
        type="text"
        name="name"
        onChange={props.handleChange}
        value={props.state.name}
      />

      <TextInput
        id="characterFormOccupation"
        label="Ocupação"
        type="text"
        name="occupation"
        onChange={props.handleChange}
        value={props.state.occupation}
      />

      <TextInput
        id="characterFormWeapon"
        label="Arma"
        type="text"
        name="weapon"
        onChange={props.handleChange}
        value={props.state.weapon}
      />

      <CheckboxInput
        id="characterFormDebt"
        label="Está em dívida?"
        name="debt"
        onChange={props.handleChange}
        checked={props.state.debt}
      />

      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
}

export default CharacterForm;
