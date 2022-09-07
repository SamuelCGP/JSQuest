import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Authentication from "./pages/Authentication/Authentication";
import ResetPassword from "./pages/ResetPassword/ResetPasssword";
import Home from "./pages/Home/Home";
import ExerciseLesson from "./pages/Chapter/ExerciseLesson";
import Message from "./pages/Message/Message";
import { Navbar } from "./components";

function App() {
	return (
		<Router>
			<GlobalStyle />

			<Routes>
				<Route path="/home" element={<Navbar />} />
				<Route path="/chapter/*" element={<Navbar />} />
			</Routes>

			<Routes>
				<Route path="*" element={<Message />} />
				<Route path="/message/:messageType" element={<Message />} />
				<Route path="/" element={<Authentication />} />
				<Route
					path="/reset-password/:userId/:token"
					element={<ResetPassword />}
				/>
				<Route path="/home" element={<Home />} />
				<Route
					path="/chapter/:c_index/lesson/:l_index"
					element={<ExerciseLesson />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
