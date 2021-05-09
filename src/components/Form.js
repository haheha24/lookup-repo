import Input from "./Input";

const Form = ({ onSubmit }) => {

  return (
    <form className="form-container">
      <Input
        label="First Name"
        type="text"
        name="firstName"
        /* onChange={onChange}
        value={val} */
      />
      <Input
        label="Last Name"
        type="text"
        name="lastName"
        /* onChange={onChange}
        value={val} */
      />
      {/* <Input
        label="Email"
        type="email"
        name="email"
        onChange={(e) => setDay(e.target.value)}
      /> */}
      <button type="submit" id="my-look-up-btn" onSubmit={onSubmit()}>
        <span style={{ fontSize: 20 }}>Create</span>
      </button>
    </form>
  );
};

export default Form;
