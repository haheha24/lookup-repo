

const Form = () => {
  return (
    <form className="form-container">
      <div className="my-look-up-container">
        <label><span style={{ marginLeft: 20, fontSize: 20}}>First Name</span></label>
        <input type="text" className="my-look-up" name="firstName" placeholder="Enter your first name" required />
      </div>
      <div className="my-look-up-container">
        <label><span style={{ marginLeft: 20, fontSize: 20}}>Last Name</span></label>
        <input type="text" className="my-look-up" name="lastName" placeholder="Enter your last name" required />
      </div>
      <div className="my-look-up-container">
        <label><span style={{ marginLeft: 20, fontSize: 20}}>Email</span></label>
        <input type="email" className="my-look-up" name="email" placeholder="Enter your email" required />
      </div>
      <button type="submit" id="my-look-up-btn">
        <span style={{fontSize: 20}}>Create</span>
      </button>
    </form>
  );
};

export default Form;
