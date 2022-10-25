import PropTypes from "prop-types";

function Button({ text, onClick }) {
  return <button data-testid="button" onClick={onClick}>{text}</button>;
}

export default Button;

Button.defaultProps = {
  text: 'Button',
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
