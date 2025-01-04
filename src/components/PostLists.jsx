import React from "react";

const PostLists = () => {
	return (
		<div>
			<div className="bg-red-400  h-80">top</div>
			<div className="flex m-24 justify-center">
				<div className=" border-2 border-gray-100 rounded-lg mt-10 mr-2  w-1/4 ">
					<form className="p-6">
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
							<select class=" border-2 focus:outline-none border-gray-100 rounded-ms w-full h-10 ">
								<option value="option1">Web Development</option>
								<option value="option2">Web Designing</option>
								<option value="option3">Market Analysis</option>
							</select>
						</div>
						<span className="font-semibold ">Location</span>
						<div className="mt-3 mb-3">
							<select class=" border-2 focus:outline-none border-gray-100 rounded-ms w-full h-10 ">
								<option value="option1">Mumbai</option>
								<option value="option2">Madhya Pradesh</option>
								<option value="option3">Delhi</option>
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
							<div className="flex items-center mb-2">
								<input className="h-4 w-4 mr-3" type="checkbox"></input>
								<span className="text-gray-400">Hourly Basis</span>
							</div>
						</div>
						<span className="font-semibold ">Salary</span>
						<div className="mt-3 mb-8">
							<div className="flex items-center mb-2">
								<input
									className="h-4 w-4 mr-3"
									type="radio"
									name="option"
								></input>
								<span className="text-gray-400">10k-15k</span>
							</div>

							<div className="flex items-center mb-2">
								<input
									className="h-4 w-4 mr-3"
									type="radio"
									name="option"
								></input>
								<span className="text-gray-400">15k-25k</span>
							</div>
							<div className="flex items-center mb-2">
								<input
									className="h-4 w-4 mr-3 "
									type="radio"
									name="option"
								></input>
								<span className="text-gray-400">more than 25k</span>
							</div>
						</div>
						<button className="bg-green-600 text-white font-semibold w-full h-10 rounded-md hover:bg-green-700 duration-300">
							Apply Filter
						</button>
					</form>
				</div>
				<div className="w-4/6  h-screen m-5 p-5">
					<div className="border-2 mb-6 border-gray-100 w-full h-64 rounded-xl hover:shadow-lg  duration-300">
						<div className="p-6">
							<div className="flex justify-between">
								<div className="flex">
									<img
										className="w-14  border-2 border-opacity-5 p-2 rounded-lg mr-4"
										src="/pics/facebook-logo.png"
									></img>
									<div>
										<p>
											<a
												href="https://about.fb.com/company-info./"
												target="blank"
												className="font-semibold text-lg hover:text-green-600 duration-300 mr-1"
											>
												Facebook
											</a>
											<span className="text-gray-400">2 days ago</span>
										</p>
										<p>
											<span className="text-green-600 text-xs font-bold bg-green-100 pl-2 pr-2 pt-1 pb-1 rounded-2xl mr-1">
												Full Time
											</span>
											Est.time:
											<span className="text-gray-400 mr-1 ml-1">
												1 to 3 months
											</span>
											Hourly:
											<span className="text-gray-400 mr-1 ml-1">16 to 20</span>
										</p>
									</div>
								</div>
								<img
									className="h-10 border-2 border-green-100 bg-green-50 p-2 rounded-full cursor-pointer"
									src="/pics/bookmark.png"
								></img>
							</div>
							<div className="text-gray-400 mt-3 mb-3">
								Looking for an experienced web developer
							</div>
							<div>
								<span className="text-xs mr-2 bg-gray-100 rounded-xl font-semibold pl-3 pr-3 pt-1 pb-1">
									HTML
								</span>
								<span className="text-xs mr-2 bg-gray-100 rounded-xl font-semibold pl-3 pr-3 pt-1 pb-1">
									CSS
								</span>
								<span className="text-xs mr-2 bg-gray-100 rounded-xl font-semibold pl-3 pr-3 pt-1 pb-1">
									REACT
								</span>
								<span className="text-xs mr-2 bg-gray-100 rounded-xl font-semibold pl-3 pr-3 pt-1 pb-1">
									GITHUB
								</span>
							</div>
						</div>
						<div className="w-full pl-7 pr-7 justify-between items-center flex mt-3 rounded-br-lg rounded-bl-lg bg-gray-50 h-16 p-0">
							<div className="flex items-center">
								<div>
									<img className="w-6" src="/pics/verified.png"></img>
								</div>
								<span className="font-semibold">Verified</span>
								<img
									className="w-24 mt-1 ml-1 mr-1"
									src="/pics/stars.png"
								></img>
								<img className="w-5" src="/pics/location.png"></img>
								<span className="text-gray-400 text-lg">Mumbai</span>
							</div>
							<button className="bg-green-600  pl-4 pr-4 pt-1 pb-1 hover:bg-green-700 duration-300 rounded-lg text-white font-semibold ">
								Apply Now
							</button>
						</div>
					</div>
					<div className="border-2 mb-6 border-gray-100 w-full h-64 rounded-xl hover:shadow-lg  duration-300 ">
						<div className="p-6">
							<div className="flex justify-between">
								<div className="flex">
									<img
										className="w-14  border-2 border-opacity-5 p-2 rounded-lg mr-4"
										src="/pics/google logo.png"
									></img>
									<div>
										<p>
											<a
												href="https://about.google/intl/ALL_in/"
												target="blank"
												className="font-semibold text-lg hover:text-green-600 duration-300 mr-1"
											>
												Google
											</a>
											<span className="text-gray-400">2 days ago</span>
										</p>
										<p>
											<span className="text-green-600 text-xs font-bold bg-green-100 pl-2 pr-2 pt-1 pb-1 rounded-2xl mr-1">
												Full Time
											</span>
											Est.time:
											<span className="text-gray-400 mr-1 ml-1">
												1 to 3 months
											</span>
											Hourly:
											<span className="text-gray-400 mr-1 ml-1">16 to 20</span>
										</p>
									</div>
								</div>
								<img
									className="h-10 border-2 border-green-100 bg-green-50 p-2 rounded-full cursor-pointer"
									src="/pics/bookmark.png"
								></img>
							</div>
							<div className="text-gray-400 mt-3 mb-3">
								Looking for an experienced web developer
							</div>
							<div>
								<span className="text-xs mr-2 bg-gray-100 rounded-xl font-semibold pl-3 pr-3 pt-1 pb-1">
									HTML
								</span>
								<span className="text-xs mr-2 bg-gray-100 rounded-xl font-semibold pl-3 pr-3 pt-1 pb-1">
									CSS
								</span>
								<span className="text-xs mr-2 bg-gray-100 rounded-xl font-semibold pl-3 pr-3 pt-1 pb-1">
									REACT
								</span>
								<span className="text-xs mr-2 bg-gray-100 rounded-xl font-semibold pl-3 pr-3 pt-1 pb-1">
									GITHUB
								</span>
							</div>
						</div>
						<div className="w-full pl-7 pr-7 justify-between items-center flex mt-3 rounded-br-lg rounded-bl-lg bg-gray-50 h-16 p-0">
							<div className="flex items-center">
								<div>
									<img className="w-6" src="/pics/verified.png"></img>
								</div>
								<span className="font-semibold">Verified</span>
								<img
									className="w-24 mt-1 ml-1 mr-1"
									src="/pics/stars.png"
								></img>
								<img className="w-5" src="/pics/location.png"></img>
								<span className="text-gray-400 text-lg">Bangalore</span>
							</div>
							<button className="bg-green-600  pl-4 pr-4  pt-1  hover:bg-green-700 duration-300 t-1 pb-1  rounded-lg text-white font-semibold ">
								Apply Now
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostLists;
