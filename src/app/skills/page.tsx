"use client";
import { useEffect, useRef } from "react";
import { Code, Layers, Hammer, Info } from "lucide-react";
import gsap from "gsap";

const skills = [
	{
		icon: <Code className="w-7 h-7 text-pink-400 group-hover:scale-125 transition" />,
		title: "Languages",
		
		items: [
			{ name: "JavaScript", level: 60 },
			{ name: "TypeScript", level: 60 },
			{ name: "Java", level: 50 },
			{ name: "C/C++", level: 60 },
			{ name: "HTML5 & CSS3", level: 95 },
		],
		color: "from-pink-400/30 to-pink-600/20",
	},
	{
		icon: <Layers className="w-7 h-7 text-blue-400 group-hover:scale-125 transition" />,
		title: "Frameworks & Libraries",
		
		items: [
			{ name: "React.js", level: 70 },
			{ name: "Next.js", level: 70 },
			{ name: "Tailwind CSS", level: 75 },
			{ name: "Bootstrap", level: 80 },
			{ name: "Streamlit", level: 60 },
		],
		color: "from-blue-400/30 to-blue-600/20",
	},
	{
		icon: <Hammer className="w-7 h-7 text-purple-400 group-hover:scale-125 transition" />,
		title: "Tools & Platforms",
		
		items: [
			{ name: "Git & GitHub", level: 80 },
			{ name: "VS Code", level: 95 },
			{ name: "Canva", level: 90 },
			{ name: "Vercel / Heroku", level: 50 },
			{ name: "Firebase (Basics)", level: 40 },
		],
		color: "from-purple-400/30 to-purple-600/20",
	},
];

export default function Skills() {
	const cardsRef = useRef<HTMLDivElement[]>([]);
	const h1Ref = useRef<HTMLHeadingElement>(null);
	const pRef = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		// Animate h1 and p
		gsap.fromTo(
			h1Ref.current,
			{ autoAlpha: 0, y: 30 },
			{ autoAlpha: 1, y: 0, duration: 0.7, ease: "power2.out" }
		);
		gsap.fromTo(
			pRef.current,
			{ autoAlpha: 0, y: 30 },
			{ autoAlpha: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.2 }
		);
		// Animate cards
		gsap.fromTo(
			cardsRef.current,
			{ autoAlpha: 0, y: 40 },
			{
				autoAlpha: 1,
				y: 0,
				duration: 0.5,
				stagger: 0.12,
				ease: "power2.out",
				delay: 0.4,
			}
		);
	}, []);

	return (
		<section className="py-20 min-h-screen bg-gradient-to-br from-[#365B5B]/90 via-[#2A3F3F]/90 to-[#1B2323]/90 relative overflow-hidden">
			{/* Glassmorphism effect */}
			<div className="absolute inset-0 bg-white/10 backdrop-blur-2xl pointer-events-none z-0" />

			<div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
				<h1
					ref={h1Ref}
					className="text-4xl md:text-5xl font-extrabold mb-4 pt-10 bg-gradient-to-r from-pink-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg"
				>
					My Skillset
				</h1>
				<p
					ref={pRef}
					className="text-gray-200 max-w-2xl mx-auto mb-14 pt-5 text-lg"
				>
					A blend of clean code, modern frameworks, and practical tools used to
					build efficient, scalable web applications.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:pt-10">
					{skills.map((skill, idx) => (
						<div
							key={skill.title}
							ref={(el) => { cardsRef.current[idx] = el!; }}
							className={`group bg-gradient-to-br ${skill.color} bg-white/10 backdrop-blur-lg border border-white/20 p-7 rounded-3xl shadow-xl hover:scale-120 hover:translate-y-2 hover:shadow-2xl transition duration-300 relative`}
						>
							<div className="flex items-center gap-3 mb-4">
								{skill.icon}
								<h3 className="text-xl font-bold text-white">{skill.title}</h3>
								{/* Info icon without tooltip */}
								<span className="ml-auto">
									<Info className="w-4 h-4 text-gray-300" />
								</span>
							</div>
							<ul className="text-sm text-white/90 text-left space-y-3 mb-4">
								{skill.items.map((item) => (
									<li key={item.name} className="flex items-center gap-2">
										<span className="w-28 inline-block">{item.name}</span>
										<div className="flex-1 h-2 rounded-full bg-white/20 overflow-hidden">
											<div
												className="h-full rounded-full transition-all duration-500"
												style={{
													width: `${item.level}%`,
													background:
														"linear-gradient(90deg, #f472b6 0%, #60a5fa 50%, #a78bfa 100%)",
												}}
											/>
										</div>
										<span className="ml-2 text-xs text-white/70">
											{item.level}%
										</span>
									</li>
								))}
							</ul>
						
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
