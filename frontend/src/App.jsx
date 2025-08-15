import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
//import { HomePage } from "./pages/Home/HomePage";
import { LoginPage } from "./pages/Login/LoginPage";
import { SignupPage } from "./pages/Signup/SignupPage";
import { FeedPage } from "./pages/Feed/FeedPage";
import { CreatePostPage } from "./pages/CreatePost/CreatePostPage"
import ProfilePage from "./pages/Profile/ProfilePage"

// docs: https://reactrouter.com/en/main/start/overview
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/posts",
    element: <FeedPage />,
  },
  {
    path: "/createpost",
    element: <CreatePostPage />
  },
  {
    path: "/profile",
    element: <ProfilePage />
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
