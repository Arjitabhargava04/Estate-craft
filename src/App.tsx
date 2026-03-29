import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "sonner";
// Importing our custom smooth-scrolling wrapper
import { SmoothScroll } from "./components/common/SmoothScroll";
import WhatsAppButton from "./components/common/WhatsAppButton";

function App() {
  return (
    // Wrapping the whole site in SmoothScroll so every page scrolls smoothly
    <SmoothScroll>
      <div className="flex flex-col min-h-screen relative">
        <div className="grainy" />
        <Toaster position="bottom-right" richColors />
        <Navbar />
        <WhatsAppButton />

        <main className="flex-grow">
          <AppRoutes />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
