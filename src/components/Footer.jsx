import React from "react";
import {
	Heart,
	ShoppingCart,
	DribbbleIcon as BehanceIcon,
	Linkedin,
	Facebook,
	Instagram,
	Twitter,
	Mail,
} from "lucide-react";

const Footer = () => {
	const navigation = [
		{ name: "Home", href: "/" },
		{ name: "How it works", href: "/how-it-works" },
		{ name: "Create a job", href: "/create-job" },
		{ name: "About us", href: "/about" },
		{ name: "Contact us", href: "/contact" },
	];

	const socialLinks = [
		{ name: "Cart", icon: ShoppingCart, href: "#" },
		{ name: "Behance", icon: BehanceIcon, href: "#" },
		{ name: "LinkedIn", icon: Linkedin, href: "#" },
		{ name: "Facebook", icon: Facebook, href: "#" },
		{ name: "Instagram", icon: Instagram, href: "#" },
		{ name: "Twitter", icon: Twitter, href: "#" },
		{ name: "Email", icon: Mail, href: "#" },
	];

	return (
		<footer className="bg-[#0f1729]  text-white">
			<div className="container mx-auto px-4">
				
				<div className="flex flex-col md:flex-row justify-between items-center py-6">
					
					<div className="mb-4 md:mb-0">
						<a href="/" className="flex items-center">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq3eaqQRVY8Wd3Aj_IIxp7m65K9RedGZf2yQ&s"
								alt="Logo"
								className="h-8 w-8 rounded-full"
							/>
							<span className="ml-4">Jobstack</span>
						</a>
					</div>

					
					<nav className="flex flex-wrap justify-center gap-6">
						{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="text-gray-300 hover:text-white transition-colors"
							>
								{item.name}
							</a>
						))}
					</nav>
				</div>

				
				<div className="border-t border-gray-800 py-6">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						
						<div className="text-gray-400 text-sm flex items-center">
							<span>©2025 Jobstack.</span>
							<Heart className="h-4 w-4 mx-1 text-red-500 inline" />
						</div>

						
						<div className="flex items-center space-x-4">
							{socialLinks.map((item) => {
								const Icon = item.icon;
								return (
									<a
										key={item.name}
										href={item.href}
										className="text-gray-400 hover:text-[#00d084] transition-colors"
										aria-label={item.name}
									>
										<Icon className="h-5 w-5" />
									</a>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
