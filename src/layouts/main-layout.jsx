import { Footer } from "@/components/footer";
import Hero from "@/components/hero-section";
import { LogoCloud } from "@/components/logo-cloud";
import { Container } from "@/components/container";

function MainLayout({ children, heroTitle, heroSubtitle, heroText, heroCta, heroBg }) {
	return (
		<div className="main-layout">
			<Hero
				title={heroTitle}
				subtitle={heroSubtitle}
				text={heroText}
				cta={heroCta}
				bg={heroBg}
			/>
			<Container className="bg-linear-to-br from-gray-50 from-50% to-gray-100">
				<LogoCloud />
				<main className="py-[10vh] overflow-hidden ">{children}</main>
			</Container>
			<Footer />
		</div>
	);
}

export default MainLayout;
