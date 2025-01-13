import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Provider } from "react-redux";

import store from "./utils/store";
import Body from "./components/Body";
import Header from "./components/Header";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
        {/* <h1 className="text-3xl">Namaste React</h1> */}
      </div>
    </Provider>
  );
}

export default App;
