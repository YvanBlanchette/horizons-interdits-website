import { Heading, Subheading } from "./text";

const testimonials = [
	{
		img: "/testimonials/tina-yards.jpg",
		name: "Tina Yards",
		rating: 5,
		quote: "A tense, thoughtful science fiction story that takes its time and trusts the reader. It stayed with me long after I closed the book.",
	},
	{
		img: "/testimonials/conor-neville.jpg",
		name: "Conor Neville",
		rating: 4,
		quote: "This feels like science fiction written with restraint. No over-explaining, no shortcuts, just a steady descent into the unknown.",
	},
	{
		img: "/testimonials/amy-chase.jpg",
		name: "Amy Chase",
		rating: 5,
		quote: "More interested in consequences than spectacle. If you enjoy slow-burn science fiction that respects your intelligence, this delivers.",
	},
];

function TestimonialCard({ name, rating, img, children, ...props }) {
	return (
		<div
			{...props}
			className="relative flex aspect-9/16 w-full shrink-0 flex-col justify-end overflow-hidden rounded-3xl sm:aspect-3/4"
		>
			<img
				alt={`${name}'s testimonial`}
				src={img}
				className="absolute inset-x-0 top-0 aspect-square w-full object-cover"
			/>
			<div
				aria-hidden="true"
				className="absolute inset-0 rounded-3xl bg-linear-to-t from-black from-[calc(7/16*100%)] ring-1 ring-gray-950/10 ring-inset sm:from-25%"
			/>
			<figure className="relative p-10">
				<blockquote>
					<p className="relative text-xl/7 text-white">
						<span
							aria-hidden="true"
							className="absolute -translate-x-full"
						>
							"
						</span>
						{children}
						<span
							aria-hidden="true"
							className="absolute"
						>
							"
						</span>
					</p>
				</blockquote>
				<figcaption className="mt-6 border-t border-white/20 pt-6">
					<p className="text-sm/6 font-medium text-white">{name}</p>

					<div className="mt-1 flex gap-1">
						{[...Array(5)].map((_, i) => (
							<span
								key={i}
								className={
									i < rating ? "bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent" : "text-white/30"
								}
							>
								★
							</span>
						))}
					</div>
				</figcaption>
			</figure>
		</div>
	);
}

export function Testimonials() {
	return (
		<div className="pt-32 pb-12">
			<div>
				<Subheading>Testimonials from Our fans</Subheading>
				<Heading
					as="h3"
					className="mt-2"
				>
					What Our Readers Say
				</Heading>
			</div>
			<div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{testimonials.map(({ img, name, rating, quote }, testimonialIndex) => (
					<TestimonialCard
						key={testimonialIndex}
						name={name}
						rating={rating}
						img={img}
					>
						{quote}
					</TestimonialCard>
				))}
			</div>
		</div>
	);
}
