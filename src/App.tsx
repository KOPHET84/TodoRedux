import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { TodoList } from "./pages/todo/todoList.tsx";

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
