import React, { useContext, useRef } from "react";
import StateContext from "../store/state-list-store";

const Filter = () => {
	const statesOfIndia = useContext(StateContext);

	const handleApplyFilter = () => {};

	return (
		<div className=" border-2 border-gray-100 rounded-lg mt-10 mr-10 ml-32 w-1/4 bg-white ">
			<div className="p-6">
				<span className="font-semibold ">Search Company</span>
				<div className=" mt-3 mb-3 flex items-center border-2  border-gray-100 rounded-ms w-full h-10">
					<img className="w-4 h-4 m-4" src="/pics/search.png"></img>
					<input
						className="appearance-none focus:outline-none w-3/4  h-8"
						type="text"
						name="name"
						placeholder="Search"
					/>
				</div>

				<span className="font-semibold ">Categories</span>
				<div className="mt-3 mb-3">
					<input
						placeholder="eg.web development"
						class="pl-4 border-2 focus:outline-none border-gray-100 rounded-ms w-full h-10 "
					/>
				</div>
				<span className="font-semibold ">Location</span>
				<div className="mt-3 mb-3">
					<select
						defaultValue=""
						class=" border-2 focus:outline-none border-gray-100 rounded-ms w-full h-10 "
					>
						<option value="" disabled>
							Select location...
						</option>
						{statesOfIndia.map((state) => (
							<option key={state} value={state}>
								{state}
							</option>
						))}
					</select>
				</div>
				<span className="font-semibold ">Job Types</span>
				<div className=" mt-3 mb-3">
					<div className="flex items-center mb-2 ">
						<input className="h-4 w-4 mr-3 " type="checkbox"></input>
						<span className="text-gray-400">Full Time</span>
					</div>
					<div className="flex items-center mb-2">
						<input className="h-4 w-4 mr-3" type="checkbox"></input>
						<span className="text-gray-400">Part Time</span>
					</div>
					<div className="flex items-center mb-2">
						<input className="h-4 w-4 mr-3" type="checkbox"></input>
						<span className="text-gray-400">Freelancing</span>
					</div>
					<div className="flex items-center mb-2">
						<input className="h-4 w-4 mr-3" type="checkbox"></input>
						<span className="text-gray-400">Remote</span>
					</div>
				</div>
				<span className="font-semibold ">Salary</span>
				<div className="mt-3 mb-8">
					<div className="flex items-center mb-2">
						<input className="h-4 w-4 mr-3" type="radio" name="option"></input>
						<span className="text-gray-400">10k-15k</span>
					</div>

					<div className="flex items-center mb-2">
						<input className="h-4 w-4 mr-3" type="radio" name="option"></input>
						<span className="text-gray-400">15k-25k</span>
					</div>
					<div className="flex items-center mb-2">
						<input className="h-4 w-4 mr-3 " type="radio" name="option"></input>
						<span className="text-gray-400">more than 25k</span>
					</div>
				</div>
				<button
					onClick={handleApplyFilter}
					className="bg-emerald-500 text-white font-semibold w-full h-10 rounded-md hover:bg-emerald-600 duration-300"
				>
					Apply Filter
				</button>
			</div>
		</div>
	);
};

export default Filter;
