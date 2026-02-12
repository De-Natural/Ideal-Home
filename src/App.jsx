import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Toaster } from "react-hot-toast";




function App() {
  return (
      <>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />
      </>
  );
}

export default App;


// import SocialFollow from "./component/SocialFollow";


// function App() {
//   return (

//       <SocialFollow />
//   );
// }

// export default App;
