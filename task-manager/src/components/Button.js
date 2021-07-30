import PropTypes from "prop-types";
function Button(props) {
  return (
    <div>
      <button style={{ backgroundColor: props.color }} className="btn">
        {props.text}
      </button>
    </div>
  );
}

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
