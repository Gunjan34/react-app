import image from "./new.png";
import './App.css';
// import LoginForm from "./Components/Assets/LoginForm/LoginForm";

function App() {
  return (
    <>
    <body>
    <div className="b">
      <div className="main">
        <div className="for">
          <h2>Login-Form</h2>
          <form action="" method="post">
            <img src={image} className="app" alt="logo"/><br></br>
            <label htmlfor="first">Username:</label>
            <input  placeholder="Name" type="text" id="first"/><br></br><br></br>
            <label htmlfor="password">Password:</label>
            <input  placeholder="Password" type="number" id="password"/><br></br><br></br>
            <button id="btn" type="submit">Submit</button>

          </form>
       </div>

      </div>

    </div>
    </body>
</>
    
    
  );
  
}

export default App;
