import "./App.css";
import List from "./layouts/List";
import Menu from "./layouts/Menu";
import Input from "./layouts/Input";

function App() {
  return (
    <>
      <div className="flex bg-blue-100 max-w-5xl mx-auto h-screen">
        <div className="h-full bg-blue-300 w-96">
          <Menu />
        </div>
        <div className="h-full bg-blue-500">
          <Input />
          <List />
        </div>
      </div>
    </>
  );
}

export default App;
