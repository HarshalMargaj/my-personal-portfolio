"use client";

import React from "react";

import { testimonials } from "@/data";

const Clients = () => {
	return (
		<section id="testimonials" className="py-20">
			<h1 className="heading">
				Kind words from
				<span className="text-purple"> satisfied clients</span>
			</h1>

			<div className="flex flex-col items-center max-lg:mt-10">
				<div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
					<ul>
						{testimonials.map((item, idx) => (
							<li
								className="w-[90vw] max-w-full relative rounded-2xl border border-b-0
             flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
								style={{
									background: "rgb(4,7,29)",
									backgroundColor:
										"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
								}}
								key={idx}
							>
								<blockquote>
									<div
										aria-hidden="true"
										className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
									></div>
									{/* change text color, text-lg */}
									<span className=" relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
										{item.quote}
									</span>
									<div className="relative z-20 mt-6 flex flex-row items-center">
										{/* add this div for the profile img */}
										<div className="me-3">
											<img
												src="/photo.jpeg"
												alt="profile"
												className="rounded-full w-[45px] h-[45px]"
											/>
										</div>
										<span className="flex flex-col gap-1">
											{/* change text color, font-normal to font-bold, text-xl */}
											<span className="text-xl font-bold leading-[1.6] text-white">
												{item.name}
											</span>
											{/* change text color */}
											<span className=" text-sm leading-[1.6] text-white-200 font-normal">
												{item.title}
											</span>
										</span>
									</div>
								</blockquote>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Clients;
