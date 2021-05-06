import Input from './Input'

const Form = () => {
  return (
    <form className="form-container">
      <Input label='First Name' type='text' name='firstName' />
      <Input label='Last Name' type='text' name='lastName' />
      <Input label='Email' type='email' name='email' />
      <button type="submit" id="my-look-up-btn">
        <span style={{fontSize: 20}}>Create</span>
      </button>
    </form>
  );
};

export default Form;
