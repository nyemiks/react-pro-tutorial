import Welcome from './Welcome';
import Code from './Code'


export default function ConditionalComponent() {
  const display = true;

  //let message;

  

  return display ? <Welcome/> : <Code/>;
}
