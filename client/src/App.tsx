import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Authentication from "./pages/Authentication/Authentication";
import ResetPassword from "./pages/ResetPassword/ResetPasssword";
import Home from "./pages/Home/Home";
import Chapter from "./pages/Chapter/Chapter";
import Message from "./pages/Message/Message";
import { Navbar } from "./components";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
	return (
		<Router>
			<GlobalStyle />

			<Routes>
				<Route path="/" element={<PrivateRoutes />}>
					<Route path="/home" element={<Navbar />} />
					<Route path="/chapter/*" element={<Navbar />} />
				</Route>
			</Routes>

			<Routes>
				<Route path="/" element={<PrivateRoutes />}>
					<Route path="/home" element={<Home />} />
					<Route path="*" element={<Message />} />
					<Route path="/message/:messageType" element={<Message />} />
					<Route
						path="/chapter/:c_index/lesson/:l_index"
						element={<Chapter />}
					/>
				</Route>
				<Route path="/login" element={<Authentication />} />
				<Route
					path="/reset-password/:userId/:token"
					element={<ResetPassword />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
