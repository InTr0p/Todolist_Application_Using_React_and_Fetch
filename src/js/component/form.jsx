import React, { useState } from "react";

const Form = ({ newTaskList }) => {
	const [inputText, setInputText] = useState("");
	const [valid, setValid] = useState(true);

	const handleForm = (event) => {
		setInputText(event.target.value);
	};

	const addTask = (event) => {
		event.preventDefault();

		if (inputText === "") {
			setValid(false);
		} else {
			newTaskList(inputText);
			setInputText("");
			setValid(true);
		}
	};

	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-sm-12 col-md-8 col-lg-8 mx-auto">
					<h1 className="text-center">React todo application :) </h1>
					<form className="form bg-dark rounded" onSubmit={addTask}>
						<div className="d-flex">
							<p className="text-info w-50 text-center pt-3">
								Press Enter to add Task
							</p>
							<input
								value={inputText}
								onChange={handleForm}
								placeholder="Ex: Sleeping"
								className="w-75"
							/>
						</div>
					</form>
				{!valid ? (
					<div className="text-danger">Add a task, please :)</div>
				) : null}
				</div>
			</div>
		</div>
	);
};

export default Form;
