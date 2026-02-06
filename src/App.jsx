import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home";
import BlogPage from "./pages/blog";
import CrewPage from "./pages/crew";
import UniversePage from "./pages/universe";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import ShopPage from "./pages/shop";
import CrewMemberDetailPage from "./pages/crew-details";
import UnderConstructionPage from "./pages/under-construction";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Routes avec MainLayout */}
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
			</Routes>
		</BrowserRouter>
	);
}

export default App;
