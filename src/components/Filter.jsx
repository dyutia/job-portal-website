import React, { useContext, useState } from "react";
import StateContext from "../store/state-list-store";
import { JobList } from "../store/job-lists-store";

const Filter = () => {
	const statesOfIndia = useContext(StateContext);
	const { filterJobs } = useContext(JobList);
	const [filters, setFilters] = useState({
		company: "",
		category: "",
		location: "",
		jobTypes: [],
		salaryRange: "",
	});

	const handleCompanySearch = (e) => {
		setFilters({ ...filters, company: e.target.value });
	};

	const handleCategoryChange = (e) => {
		setFilters({ ...filters, category: e.target.value });
	};

	const handleLocationChange = (e) => {
		setFilters({ ...filters, location: e.target.value });
	};

	const handleJobTypeChange = (type) => {
		const updatedJobTypes = filters.jobTypes.includes(type)
			? filters.jobTypes.filter((t) => t !== type)
			: [...filters.jobTypes, type];
		setFilters({ ...filters, jobTypes: updatedJobTypes });
	};

	const handleSalaryChange = (range) => {
		setFilters({ ...filters, salaryRange: range });
	};

	const handleApplyFilter = () => {
		filterJobs(filters);
	};

	return (
		<div className="border-2 border-gray-100 rounded-lg mt-10 mr-10 ml-32 w-1/4 bg-white">
			<div className="p-6">
				<span className="font-semibold">Search Company</span>
				<div className="mt-3 mb-3 flex items-center border-2 border-gray-100 rounded-ms w-full h-10">
					<img className="w-4 h-4 m-4" src="/pics/search.png" alt="search" />
					<input
						className="appearance-none focus:outline-none w-3/4 h-8"
						type="text"
						placeholder="Search"
						value={filters.company}
						onChange={handleCompanySearch}
					/>
				</div>

				<span className="font-semibold">Categories</span>
				<div className="mt-3 mb-3">
					<select
						className="pl-4 border-2 focus:outline-none border-gray-100 rounded-ms w-full h-10"
						value={filters.category}
						onChange={handleCategoryChange}
					>
						<option value="">All Categories</option>
						<option value="Web Development">Web Development</option>
						<option value="Frontend Developer">Frontend Developer</option>
						<option value="Backend Developer">Backend Developer</option>
						<option value="Full Stack Developer">Full Stack Developer</option>
						<option value="UI/UX Designer">UI/UX Designer</option>
						<option value="Mobile App Developer">Mobile App Developer</option>
					</select>
				</div>

				<span className="font-semibold">Location</span>
				<div className="mt-3 mb-3">
					<select
						className="border-2 focus:outline-none border-gray-100 rounded-ms w-full h-10"
						value={filters.location}
						onChange={handleLocationChange}
					>
						<option value="">All Locations</option>
						{statesOfIndia.map((state) => (
							<option key={state} value={state}>
								{state}
							</option>
						))}
					</select>
				</div>

				<span className="font-semibold">Job Types</span>
				<div className="mt-3 mb-3">
					{["Full Time", "Part Time", "Freelancing", "Remote"].map((type) => (
						<div key={type} className="flex items-center mb-2">
							<input
								className="h-4 w-4 mr-3"
								type="checkbox"
								checked={filters.jobTypes.includes(type)}
								onChange={() => handleJobTypeChange(type)}
							/>
							<span className="text-gray-400">{type}</span>
						</div>
					))}
				</div>

				<span className="font-semibold">Salary</span>
				<div className="mt-3 mb-8">
					{[
						{ label: "10k-15k", value: "10-15" },
						{ label: "15k-25k", value: "15-25" },
						{ label: "more than 25k", value: "25+" },
					].map((range) => (
						<div key={range.value} className="flex items-center mb-2">
							<input
								className="h-4 w-4 mr-3"
								type="radio"
								name="salary"
								checked={filters.salaryRange === range.value}
								onChange={() => handleSalaryChange(range.value)}
							/>
							<span className="text-gray-400">{range.label}</span>
						</div>
					))}
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