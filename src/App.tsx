import "./App.scss";
import { DragProvider } from "./components/Context/DragContext";

import TaskBoardPage from "./pages/TaskBoardPage/TaskBoardPage";

function App() {
	return (
		<DragProvider>
			<div className="app-wrapper">
				<TaskBoardPage />
			</div>
		</DragProvider>
	);
}

export default App;
