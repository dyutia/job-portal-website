import React from "react";

const ApplyForm = () => {
	return (
		<div className="  pb-80">
			<div className="w-1/2  border-2 border-emerald-100  shadow-xl  p-4 m-auto mt-28 rounded-xl">
				<form className="p-6 bg-white rounded-xl">
					<span className="font-semibold ">Categories</span>
					<div className="mt-3 mb-3">
						<select class=" border-2 focus:outline-none border-gray-100 rounded-ms  w-full h-10 ">
							<option value="option1">Web Development</option>
							<option value="option2">Web Designing</option>
							<option value="option3">Market Analysis</option>
						</select>
					</div>
					<span className="font-semibold ">Your Name:</span>
					<input
						className="appearance-none focus:outline-none border-2 border-gray-100 w-full  h-10 block p-3 mt-3 mb-3"
						type="text"
						name="name"
						placeholder="name"
					/>
					<span className="font-semibold ">Email Address:</span>
					<input
						className="appearance-none focus:outline-none border-2 border-gray-100 w-full  h-10 block p-3 mt-3 mb-3"
						type="email"
						name="email"
						placeholder="name@example.com"
					/>
					<span className="font-semibold ">Phone No.:</span>
					<input
						className="appearance-none focus:outline-none border-2 border-gray-100 w-full  h-10 block p-3 mt-3 mb-3"
						type="number"
						name="phone"
						placeholder="+91-9876543210"
					/>

					<span className="font-semibold ">Location</span>
					<div className="mt-3 mb-3">
						<select class=" border-2 focus:outline-none border-gray-100 rounded-ms w-full h-10 ">
							<option value="option1">Mumbai</option>
							<option value="option2">Madhya Pradesh</option>
							<option value="option3">Delhi</option>
						</select>
					</div>
					<span className="font-semibold ">Covering Letter:</span>
					<textarea
						className="appearance-none focus:outline-none border-2  border-gray-100 w-full  h-32 block p-3 mt-3 mb-3"
						placeholder="Message:"
					/>
					<span className="font-semibold ">Upload Resume:</span>
					<div className="mt-3 mb-6  border-2  border-gray-100 rounded-ms w-full h-10 flex items-center">
						<input
							type="file"
							id="file-upload"
							name="file"
							accept=".doc, .docx"
						/>
					</div>
					<button className="bg-green-600 text-white font-semibold w-20 h-10 rounded-md hover:bg-green-700 duration-300">
						Send
					</button>
				</form>
			</div>
		</div>
	);
};

export default ApplyForm;
