import './App.css';


function App(props) {
  return(
    <img key={props.id} src={props.imgLink} />
  )
}

export default App;