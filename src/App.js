const { default: GameList } = require("./components/gamelist");
const { default: Header } = require("./components/header");

function App(props) {
  return (
    <div>
      <Header 
      title="Super Site"
      />
     <GameList />


    </div>
  );
}

export default App;
