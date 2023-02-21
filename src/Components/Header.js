import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

export default Header;

//default props
Header.defaultProps = {
  title: "Task Tracker",
}; //if we over write this default props in the App.js then it will replace the default

//we can precise the prop type and make it obligatory

Header.propTypes = {
  title: PropTypes.string, //if you want it to be required you just add .isRequired
};
