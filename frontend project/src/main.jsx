import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import NewPost, { action as newpostAction } from "./routes/NewPost";
import Rootlayout from "./routes/RootLayout";
import Posts, { loader as postsLoader } from "./routes/Posts";
import PostDetails, {
  loader as postDetailsLoader,
} from "./components/PostDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [
          { path: "/create-post", element: <NewPost />, action: newpostAction },
          { path: "/:id", element: <PostDetails />, loader: postDetailsLoader },
        ],
      },
      ,
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
