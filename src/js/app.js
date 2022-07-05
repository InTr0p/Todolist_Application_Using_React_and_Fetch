import React, { useState } from "react";
import Form from "./component/form.jsx";
import Home from "./component/home.jsx";

function App() {
	const [taskList, setTaskList] = useState([]);

	const newTaskList = (task) => {
		setTaskList([task, ...taskList]);
	};

	const erase = (id) => {
		const listOrder = taskList.filter((e, index) => index !== id);
		setTaskList(listOrder);
	};

	return (
		<div>
			<Form newTaskList={newTaskList}/>

			<div >
				{taskList.map((e, index) =>(
					<Home key={index} task={e} erase={erase} id={index}/>
				))}
			</div>
		</div>
	);
}

export default App;
