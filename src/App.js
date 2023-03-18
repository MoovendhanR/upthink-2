import './App.css';
import Tree from './Components/Tree';
import treeData from './Components/TreeData';

function App() {
  return (
    <div className="App">
     <h1>Tree Component Rendering</h1>
      <Tree treeData={treeData} /> 
         </div>
  );
}

export default App;
