const name = "Rob";

function displayMessage() {
  return "Wow";
}

function Hello(props) {
 
  //props.name = "jake";

  //const {name, message} = props;

  return (
    <div>
      <h1>{props.message} {props.name} </h1>
    </div>
  );
}

export default Hello;
