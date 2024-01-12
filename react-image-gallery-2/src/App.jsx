import './App.css'
const App = (props) => {
  let imageArr = props.imageArr;
  console.log(imageArr);
  
  return (
    <div className='grids'>
        {
          imageArr.map((elephant) => <img height={"300px"} key={elephant.id} src={elephant.img} id={elephant.id} alt="elephant" />
    )
        }
    </div>
  );
};

export default App;