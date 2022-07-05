import React from "react";

const Home = ({ erase, id, task }) => {
	const deleteTask = () => {
		erase(id);
	};

	return (
		<div className="container">
			<div className="row d-flex">
				<div className="col-sm-12 col-md-8 col-lg-8 mx-auto bg-dark rounded mt-1 d-flex justify-content-sm-between">
					<div className="d-inline-block mt-2">
						<span className="text-info p-2 fs-5">{task}</span>
					</div>
					<div className="mt-1 d-inline-block mb-1">
						<span className="text-danger fs-4 erase" onClick={deleteTask}>
							erase
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
