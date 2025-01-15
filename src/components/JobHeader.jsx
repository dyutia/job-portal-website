import React from "react";

const JobHeader = () => {
	return (
		<div className=" ml-20 mr-20 mt-7 rounded-2xl text-slate-700 flex justify-between p-7 pr-28h-80 bg-gradient-to-br from-emerald-600/20">
			<div className="ml-16 w-72">
				<h1 className="  text-4xl ">Find Your Dream Job Here In One Place</h1>
				<p className="w-96 mt-2">
					A platform where you can get your desired job without any hassle.
				</p>
			</div>
			<img className=" mr-28 w-96 object-cover " src="/pics/jobspage.png" />
		</div>
	);
};

export default JobHeader;
//bg-gradient-to-r from-emerald-600/20
