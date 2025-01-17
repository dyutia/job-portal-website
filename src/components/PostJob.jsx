import React from "react";
import { useContext, useRef } from "react";
import { JobList } from "../store/job-lists-store";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
	const { addJob } = useContext(JobList);
	const navigate = useNavigate();
	const jobTitleElement = useRef();
	const companyNameElement = useRef();
	//const companyLogoElement = useRef();
	const jobTypeElement = useRef();
	const jobTimeElement = useRef();
	const jobMinSalaryElement = useRef();
	const jobMaxSalaryElement = useRef();
	const jobDescriptionElement = useRef();
	const jobSkillsElement = useRef();
	const jobLocationElement = useRef();

	const handleSubmit = (event) => {
		event.preventDefault();
		const jobTitle = jobTitleElement.current.value;
		const companyName = companyNameElement.current.value;
		//	const companyLogo = companyLogoElement.current.value;
		const jobType = jobTypeElement.current.value;
		const jobTime = jobTimeElement.current.value;
		const jobMinSalary = jobMinSalaryElement.current.value;
		const jobMaxSalary = jobMaxSalaryElement.current.value;
		const jobDescription = jobDescriptionElement.current.value;
		const jobLocation = jobLocationElement.current.value;
		const jobSkills = jobSkillsElement.current.value.split(" ");

		jobTitleElement.current.value = "";
		companyNameElement.current.value = "";
		//companyLogoElement.current.value = "";
		jobTypeElement.current.value = "";
		jobTimeElement.current.value = "";
		jobMinSalaryElement.current.value = "";
		jobMaxSalaryElement.current.value = "";
		jobDescriptionElement.current.value = "";
		jobLocationElement.current.value = "";
		jobSkillsElement.current.value = "";

		addJob(
			jobTitle,
			companyName,
			//companyLogo,
			jobType,
			jobTime,
			jobMinSalary,
			jobMaxSalary,
			jobDescription,
			jobLocation,
			jobSkills
		);
		navigate("/jobs");
	};

	return (
		<div className=" pb-80">
			<div className="w-1/2   border-2 border-emerald-100  shadow-xl m-auto mt-28 rounded-xl">
				<form className="p-6 bg-white rounded-xl" onSubmit={handleSubmit}>
					<span className="font-semibold ">Job Title:</span>
					<div className="mt-3 mb-3">
						<select
							ref={jobTitleElement}
							className=" border-2 focus:outline-none border-gray-100 rounded-ms  w-full h-10 "
						>
							<option value="Web Development">Web Development</option>
							<option value="Web Designing">Web Designing</option>
							<option value="Market Analysis">Market Analysis</option>
						</select>
					</div>
					<div className="flex justify-between">
						<div className="w-1/2">
							<span className="font-semibold  ">Company Name:</span>
							<input
								className="appearance-none focus:outline-none border-2 border-gray-100 w-4/5 h-10 block p-3 mt-3 mb-3"
								type="text"
								ref={companyNameElement}
								placeholder="name"
							/>
						</div>
						<div className="w-1/2">
							<span className="font-semibold  ">Company logo:</span>

							<div className="mt-3 mb-6  border-2 p-1 border-gray-100 rounded-ms w-full h-10 flex items-center">
								<input
									//ref={companyLogoElement}
									type="file"
									id="file-upload"
									name="file"
									accept=".doc, .docx"
								/>
							</div>
						</div>
					</div>
					<span className="font-semibold ">Job Type:</span>
					<div className="mt-3 mb-3">
						<select
							ref={jobTypeElement}
							class=" border-2 focus:outline-none border-gray-100 rounded-ms  w-full h-10 "
						>
							<option value="Full Time">Full Time</option>
							<option value="Part Time">Part Time</option>
							<option value="Freelancing">Freelancing</option>
							<option value="Remote">Remote</option>
							<option value="Hourly Basis">Hourly Basis</option>
						</select>
					</div>
					<span className="font-semibold ">Time:</span>
					<input
						ref={jobTimeElement}
						className="appearance-none focus:outline-none border-2 border-gray-100 w-full  h-10 block p-3 mt-3 mb-3"
						type="text"
						name="phone"
						placeholder="1 to 2 months"
					/>
					<span className="font-semibold ">Salary:</span>

					<div className="flex items-center justify-between ">
						<input
							ref={jobMinSalaryElement}
							className="appearance-none focus:outline-none border-2 border-gray-100 w-1/3 h-10 block p-3 mt-3 mb-3"
							type="number"
							name="salary"
							placeholder="min"
						/>
						-
						<input
							ref={jobMaxSalaryElement}
							className="appearance-none focus:outline-none border-2 border-gray-100 w-1/3  h-10 block p-3 mt-3 mb-3"
							type="number"
							name="salary"
							placeholder="max"
						/>
					</div>
					<span className="font-semibold ">Description:</span>
					<textarea
						ref={jobDescriptionElement}
						className="block w-full h-32 appearance-none focus:outline-none border-2 border-gray-100  p-3 mt-3 mb-3"
						placeholder="Message:"
					></textarea>
					<span className="font-semibold ">Skills:</span>
					<input
						ref={jobSkillsElement}
						className="appearance-none focus:outline-none border-2 border-gray-100 w-full  h-10 block p-3 mt-3 mb-3"
						type="text"
						name="skills"
					/>

					<span className="font-semibold ">Location</span>
					<div className="mt-3 mb-3">
						<select
							ref={jobLocationElement}
							class=" border-2 focus:outline-none border-gray-100 rounded-ms w-full h-10 "
						>
							<option value="Mumbai">Mumbai</option>
							<option value="Madhya Pradesh">Madhya Pradesh</option>
							<option value="Delhi">Delhi</option>
						</select>
					</div>

					<button
						type="submit"
						className="bg-green-600 text-white font-semibold w-20 h-10 rounded-md hover:bg-green-700 duration-300"
					>
						Post Now
					</button>
				</form>
			</div>
		</div>
	);
};

export default PostJob;
