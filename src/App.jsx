import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import JobPage from "./components/JobPage";
import ApplyForm from "./components/ApplyForm";
import JobListProvider from "./store/job-lists-store";
import PostJob from "./components/PostJob";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import { StateProvider } from "./store/state-list-store";

export default function App() {
	return (
		<AuthProvider>
			<StateProvider>
				<JobListProvider>
					<div className="min-h-screen">
						<Header />
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/login" element={<Login />} />
							<Route path="/signup" element={<Signup />} />
							<Route path="/jobs" element={<JobPage />} />
							<Route path="/apply-form" element={<ApplyForm />} />
							<Route path="/post-job" element={<PostJob />} />
							<Route path="/contact" element={<ContactPage />} />
						</Routes>
						<Footer />
					</div>
				</JobListProvider>
			</StateProvider>
		</AuthProvider>
	);
}
