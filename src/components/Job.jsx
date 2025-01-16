import React from "react";
import JobHeader from "./JobHeader";
import { useNavigate } from "react-router-dom";

const Job = ({ company }) => {
	const navigate = useNavigate();
	const handleApply = () => {
		navigate("/apply-form");
	};

	return (
		<div className="border-2 mb-6 border-gray-100 w-4/5  h-64 rounded-xl hover:shadow-xl bg-white duration-300">
			<div className="p-6">
				<div className="flex justify-between">
					<div className="flex">
						<img
							className="w-14  border-2 border-opacity-5 p-2 rounded-lg mr-4"
							src={company.logo}
						></img>
						<div>
							<p
								className="font-semibold cursor-pointer text-lg hover:text-green-600
								duration-300 mr-1"
							>
								{company.name} - {company.title}
							</p>
							<p>
								<span className="text-green-600 text-xs font-bold bg-green-100 pl-2 pr-2 pt-1 pb-1 rounded-2xl mr-1">
									{company.type}
								</span>
								Est.time:
								<span className="text-gray-400 mr-1 ml-1">{company.time}</span>
								Monthly:
								<span className="text-gray-400 mr-1 ml-1">
									{company.minSalary}k-{company.maxSalary}k
								</span>
							</p>
						</div>
					</div>
				</div>
				<div className="text-gray-400 mt-3 mb-3">{company.description}</div>
				{company.skills.map((skill) => (
					<span
						key={skill}
						className="bg-gray-100 font-semibold text-xs pl-3 pr-3 pt-1 pb-1 mr-2 rounded-2xl "
					>
						{skill.toUpperCase()}
					</span>
				))}
			</div>

			<div className="w-full pl-7 pr-7 justify-between items-center flex mt-3 rounded-br-lg rounded-bl-lg bg-gray-50 h-16 p-0">
				<div className="flex items-center">
					<div>
						<img className="w-6" src="/pics/verified.png"></img>
					</div>
					<span className="font-semibold">Verified</span>
					<img className="w-24 mt-1 ml-1 mr-1" src="/pics/stars.png"></img>
					<img className="w-5" src="/pics/location.png"></img>
					<span className="text-gray-400 text-lg">{company.location}</span>
				</div>
				<button
					onClick={handleApply}
					className="bg-emerald-500  pl-4 pr-4 pt-1 pb-1 hover:bg-emerald-600 duration-300 rounded-lg text-white font-semibold "
				>
					Apply Now
				</button>
			</div>
		</div>
	);
};

export default Job;
