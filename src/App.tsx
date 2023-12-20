import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./components/Login";
import HomePage from "./pages/HomePage";
import Register from "./components/Register";
import { Toaster } from 'react-hot-toast'

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
		element: <HomePage />
	}
])

const App = () => {

	return (
		<>
			<RouterProvider router={router} />
			<Toaster />
		</>
	);
}

export default App;
