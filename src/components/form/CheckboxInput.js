function CheckboxInput(props) {
  return (
    <div className="mb-3 form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        checked={props.checked}
      />
      <label className="form-check-label" htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  );
}

export default CheckboxInput;
