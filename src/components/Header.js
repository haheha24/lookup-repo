import Form from "./Form";

const Header = ({ title, onSubmit }) => {
  return (
    <header id="header">
      <div className="title-container">
        <h1 className="site-title">{title}</h1>
      </div>
      <Form onSubmit={onSubmit} />
    </header>
  );
};

Header.defaultProps = {
  title: "Welcome to the Look-up",
};

export default Header;
