// Importing 'lazy' to load pages only when needed, and 'Suspense' to show a loader while they load
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Performance Optimization: These pages are 'Lazy Loaded'.
const Home = lazy(() => import("../pages/Home/Home"));
const Gallery = lazy(() => import("../pages/Gallery/Gallery"));
const Contact = lazy(() => import("../pages/Contact/Contact"));

// A simple loading screen that shows a spinning circle while a page is being downloaded
const LoadingScreen = () => (
  <div className="h-screen w-full flex items-center justify-center bg-transparent">
    <div className="w-12 h-12 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
  </div>
);

// The component that manages all the different URLs of our site
const AppRoutes = () => {
  return (
    // Suspense shows the LoadingScreen if the page code is still being fetched
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
