import React, { useState } from "react";
import Form from "./component/form.jsx";
import Home from "./component/home.jsx";
import {useEffect} from 'react';

function App() {
	const [taskList, setTaskList ] = useState([]);

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/InTr0p")
			.then((response) => response.json())
			.then((data) => setTaskList(data));
	}, []);

	const newTaskList = (task) => {
		const createdTask = {
			done: false,
			label: task,
		};
		setTaskList([createdTask, ...taskList]);
		updateList([createdTask, ...taskList]);
	};

	const erase = (id) => {
		const listOrder = taskList.filter((e, index) => index !== id);
		setTaskList(listOrder);
		updateList(listOrder);
	};

	const updateList = (newTaskist) => {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify(newTaskist);
     
		var requestOptions = {
			method: "PUT",
			headers: myHeaders,
			body: raw,
			redirect: "follow",
		};

		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/InTr0p",
			requestOptions
		)
			.then((response) => response.text())
			.then((result) => console.log(result))
			.catch((error) => console.log("error", error));
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
