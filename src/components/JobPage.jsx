import React, { useContext } from "react";
import Job from "./Job";
import { JobList } from "../store/job-lists-store";
import Filter from "./Filter";
import JobHeader from "./JobHeader";

const JobPage = () => {
	const { jobList } = useContext(JobList);
	return (
		<>
			<JobHeader />
			<div className="flex mt-12 h-3/5  mb-56 ">
				<Filter />
				<div className="w-4/6 overflow-y-auto h-screen m-5 p-5">
					{jobList.map((job) => (
						<Job key={job.id} company={job} />
					))}
				</div>
			</div>
		</>
	);
};

export default JobPage;
