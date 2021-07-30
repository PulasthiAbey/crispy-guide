function Button(props) {
  return (
    <div>
      <button style={{ backgroundColor: props.color }} className="btn">
        {props.text}
      </button>
    </div>
  );
}

export default Button;
