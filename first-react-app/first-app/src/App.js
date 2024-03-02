import logo from './logo.svg';
import './App.css';
import MyComponent from './Components/myComponent';
import MyComponent2 from './Components/myComponent2';
import FunctionRevision from './Components/FunctionRevision-3';
import ClassRevision from './Components/ClassRevision-4';
import ComponentJSX from './Components/ComponentJSX-5';
import Greet from './Components/Greet_prop-6';
import JSXRevision from './Components/JSXRevision-7';
import PropClass from './Components/PropClass-8';
import PropFunction from './Components/PropFunction-9';
import Message from './Components/message-10';
import Counter from './Components/counter-11';
import Counter2 from './Components/counter2-12';
import Greet2 from './Components/Greet-13';
import EventBind from './Components/EventBind-14';
import ParentC from './Components/ParentC-16';
import ParentPr from './Components/ParentPr-19';
import UserGretting from './Components/userGreetings-20';
import NameList from './Components/NameList-21';
import NameList2 from './Components/NameList2-22';
import Stylesheet from './Components/Stylesheet-23';
import Inline from './Components/InlineStyle-24';

//accesible to all components
import './Components/appStyle-25.css'

//acts as object 
import style from './Components/appStyle-25.module.css'


import StylesheetR from './Components/StylesheetR-26';
import InlineR from './Components/InlineStyleeR-27';
//normal css 
import './Components/appStyleR-28.css'
//module
import styleR from './Components/appStyleR-28.module.css'



function App() {
  return (
    <div className="App">

      
      <h1 className={styleR.six}>CSS modules revision</h1>
      <h1 className='five'>App Style css revision</h1>

      <InlineR></InlineR>
      <StylesheetR class="twoR"></StylesheetR>



      {/* <h1 className={style.green}>Hello module style</h1>
      <h1 className='red'>Hello App Style</h1>

      <Inline></Inline>
      <Stylesheet name='two'></Stylesheet> */}
      {/* <NameList2></NameList2> */}

      {/* <NameList></NameList> */}


      {/* <UserGretting></UserGretting> */}

      {/* <ParentPr></ParentPr> */}

      {/* <ParentC/> */}


      {/* {
      <MyComponent/>
      <MyComponent2/>


      <FunctionRevision/>
      <ClassRevision/>
      <ComponentJSX/>
      passing properties to Greet function (component)
      <Greet name="Abhishek" lastName="Jaybhaye"></Greet>
      <Greet name="Akash" lastName="Shirsath"></Greet>
      <Greet name="Akash" lastName="Walzade"></Greet>
      <Greet name="Rohan" lastName="Jundare"></Greet>} */}

      {/* <JSXRevision/>
      <PropClass name="Abhishek" lastName="Jaybhaye"></PropClass>
      <PropFunction name="Abhishek" lastName="Jaybhaye"></PropFunction>


      <Message/>
      <Counter/>
      <Counter2/>
      <Greet2 name="Abhishek" lastName="Jaybhaye" Message="Hello...!"></Greet2>
      

      <EventBind/> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React in Minskole
        </a>
      </header> */}
    </div>
  );
}

export default App;
