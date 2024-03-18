import Hello from "./components/Hello";
import Fruits from "./components/Fruits"
import ConditionalComponent from "./components/ConditionalComponent";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
     {/** 
      
      <Hello  name="Rob" message="Hi there !"></Hello>
      <Hello  name="Tom" message="Hello " emoji="laugh"></Hello>
            <Fruits></Fruits>

            <ConditionalComponent></ConditionalComponent>
           <Fruits></Fruits>
            <Message></Message>
            <Counter></Counter>
      */} 

         <Form></Form>

    </div>
  );
}

export default App;
