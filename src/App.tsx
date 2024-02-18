import "./App.css";
import List from "./layouts/List";
import Menu from "./layouts/Menu";
import Input from "./layouts/Input";

function App() {
  return (
    <>
      <div className="flex bg-blue-100 max-w-5xl mx-auto h-screen p-6">
        <div className="h-full bg-blue-300 w-1/4 m-1">
          <Menu />
        </div>
        <div className="h-full bg-blue-500 w-3/4 flex flex-col m-1">
          <Input />
          <List />
        </div>
      </div>
    </>
  );
}

export default App;
