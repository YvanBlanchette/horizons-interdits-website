import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "@/pages/home";
import BlogPage from "@/pages/blog";
import CrewPage from "@/pages/crew";
import UniversePage from "@/pages/universe";
import ContactPage from "@/pages/contact";
import AboutPage from "@/pages/about";
import ShopPage from "@/pages/shop";
import CrewMemberDetailPage from "@/pages/crew-details";
import UnderConstructionPage from "@/pages/under-construction";
import ArchivesPage from "@/pages/archives";

// Importer les sous-pages des archives
import OverviewPage from "@/pages/archives/overview";
import StarMapPage from "@/pages/archives/starmap";
import TimelinePage from "@/pages/archives/timeline";
import FactionsPage from "@/pages/archives/factions";
import LocationsPage from "@/pages/archives/locations";
import SciencePage from "@/pages/archives/science";
import TechPage from "@/pages/archives/tech";
import RecordsPage from "@/pages/archives/records";
import StarMap3D from "./components/starmap";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Routes principales */}
				<Route
					path="/"
					element={<HomePage />}
				/>
				<Route
					path="/blog"
					element={<BlogPage />}
				/>
				<Route
					path="/crew"
					element={<CrewPage />}
				/>
				<Route
					path="/crew/:slug"
					element={<CrewMemberDetailPage />}
				/>
				<Route
					path="/universe"
					element={<UniversePage />}
				/>
				<Route
					path="/contact"
					element={<ContactPage />}
				/>
				<Route
					path="/about"
					element={<AboutPage />}
				/>
				<Route
					path="/shop"
					element={<ShopPage />}
				/>
				<Route
					path="/construction"
					element={<UnderConstructionPage />}
				/>

				<Route
					path="/starmap"
					element={<StarMap3D />}
				/>

				{/* Routes des archives avec sous-routes */}
				<Route
					path="/archives"
					element={<ArchivesPage />}
				>
					{/* Route par défaut - redirige vers overview */}
					<Route
						index
						element={
							<Navigate
								to="overview"
								replace
							/>
						}
					/>

					{/* Sous-routes */}
					<Route
						path="overview"
						element={<OverviewPage />}
					/>
					<Route
						path="starmap"
						element={<StarMapPage />}
					/>
					<Route
						path="timeline"
						element={<TimelinePage />}
					/>
					<Route
						path="factions"
						element={<FactionsPage />}
					/>
					<Route
						path="locations"
						element={<LocationsPage />}
					/>
					<Route
						path="science"
						element={<SciencePage />}
					/>
					<Route
						path="tech"
						element={<TechPage />}
					/>
					<Route
						path="records"
						element={<RecordsPage />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
