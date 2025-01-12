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
			<div className="flex mt-20 ">
				<Filter />
				<div className="w-4/6  h-screen m-5 p-5">
					{jobList.map((job) => (
						<Job key={job.id} company={job} />
					))}
				</div>
			</div>
		</>
	);
};

export default JobPage;
