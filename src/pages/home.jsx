import { Container } from "@/components/container";
import BentoSection from "@/components/home/bento-section";
import { ContactSection } from "@/components/home/contact-section";
import { Testimonials } from "@/components/testimonials";
import AuthorSection from "@/components/home/author-section";
import heroBg from "@/assets/images/hero-bg.jpg";
import MainLayout from "@/layouts/main-layout";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata = {
	description: "Exploring the edge of the unknown, where discovery reshapes those who dare to look.",
};

const heroData = {
	title: "Broken Horizons",
	subtitle: "NEW SCI-FI SERIES AVAILABLE NOW",
	text: "Exploring the edge of the unknown, where discovery reshapes those who dare to look.",
	cta: "ENTER THE UNIVERSE",
};

export default function Home() {
	return (
		<MainLayout
			heroTitle={heroData.title}
			heroSubtitle={heroData.subtitle}
			heroText={heroData.text}
			heroCta={heroData.cta}
			heroBg={heroBg}
		>
			<div className="pb-32">
				<AuthorSection />
				<BentoSection />
			</div>
			<ContactSection />
			<Testimonials />
		</MainLayout>
	);
}
