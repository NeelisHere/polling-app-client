import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./components/Login";
import HomePage from "./pages/HomePage";
import Register from "./components/Register";
import { Toaster } from 'react-hot-toast'
import UserProvider from "./providers/UserProvider";
import Create from "./pages/Create";
import MyPolls from "./pages/MyPolls";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
	{
		path: '/auth',
		element: <AuthLayout />,
		children: [
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'register',
				element: <Register />,
			}
		]
	},
	{
		path: '/',
		element: <HomePage />,
		children: [
			{
				path: 'create',
				element: <Create />
			},
			{
				path: 'my-polls',
				element: <MyPolls />
			},
			{
				path: 'profile',
				element: <Profile />
			},
		]
	}
])

const App = () => {

	return (
		<UserProvider>
			<RouterProvider router={router} />
			<Toaster />
		</UserProvider>
	);
}

export default App;
