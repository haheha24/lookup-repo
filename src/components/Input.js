import PropTypes from "prop-types";
import {useState} from 'react';

const Input = ({label, type, name, id}) => {
  const [val, setValue] = useState('')

  return (
    <div className="my-look-up-container">
      <label style={{ marginLeft: 20, fontSize: 20 }}>{label}</label>
      <input
        type={type}
        className="my-look-up"
        id={id}
        name={name}
        onChange={(e) => setValue(e.target.value)}
        value={val}
        required
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
};

export default Input;
