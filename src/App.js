import logo from './logo.svg';
import './App.css';
// 내가 만든 컴포넌트 import
import Box from "./Box"

function App() {
  return (
    <div className="App">
      {/* <div className="box">Box1 me</div>
      <div className="box">Box2 me</div>
      <div className="box">Box3 me</div>
      <div className="box">Box3 me</div> */
      
      
      }
      <Box name="코알누" num="1"></Box>
      <Box name="태민" num="2"></Box>
      <Box name="양요섭" num="3"></Box>
      <Box name="윤두준" num="4"></Box>
    </div>
  );
}

export default App;
