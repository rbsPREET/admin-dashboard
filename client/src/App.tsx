import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Comments from "./pages/Comments";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/posts/CreatePost";
import EditPost from "./pages/posts/EditPost";
import PostInfo from "./pages/posts/PostInfo";
import Posts from "./pages/posts/Posts";
import Todo from "./pages/Todo";
import CreateUser from "./pages/users/CreateUser";
import EditUser from "./pages/users/EditUser";
import UserInfo from "./pages/users/UserInfo";
import Users from "./pages/users/Users";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path='/' element={<Layout />}>
          {/* Public */}
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/:id' element={<UserInfo />} />
          <Route path='/users/create' element={<CreateUser />} />
          <Route path='/users/:id/edit' element={<EditUser />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/posts/:id' element={<PostInfo />} />
          <Route path='/posts/create' element={<CreatePost />} />
          <Route path='/posts/:id/edit' element={<EditPost />} />
          <Route path='/comments' element={<Comments />} />
          <Route path='/todo' element={<Todo />} />
          {/* Private */}
          <Route path='*' element={<Navigate to='/' replace />} />
        </Route>
      </Route>
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
