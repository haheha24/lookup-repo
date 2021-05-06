import PropTypes from "prop-types";

const Input = ({ label, type, name, }) => {
  return (
    <div className="my-look-up-container">
      <label style={{ marginLeft: 20, fontSize: 20 }}>{label}</label>
      <input
        type={type}
        className="my-look-up"
        name={name}
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
