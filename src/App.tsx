
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import MovieHomePage from "./pages/HomeScreen";
import SeatLayout from "./pages/SeatLayout";
import OrderPage from "./pages/OrderPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieHomePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
          <Route path='/select-theater' element={<Index />} />
          <Route path='/seat-layout' element={<SeatLayout />} />
          <Route path='/order/:id' element={<OrderPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
