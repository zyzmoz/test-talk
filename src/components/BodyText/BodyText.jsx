import PropTypes from "prop-types";

function BodyText({ text }) {
  return <p data-testid="body-text">{text}</p>;
}

export default BodyText;

BodyText.propTypes = {
  text: PropTypes.string,
};
