import React from 'react';
import Navbar from '@/components/Navbar';
import DateSelector from '@/components/DateSelector';
import MovieHeader from '@/components/MovieHeader';
import TheatersList from '@/components/TheatersList';
import Footer from '@/components/Footer';
import Legend from '@/components/Legend';

const Index = () => {

  const selectedMovie = JSON.parse(localStorage.getItem('selectedMovie') || '{}');
  // Mock data for theaters
  const theaters = [
    {
      id: "1",
      name: "PVR: Forum Mall, Kochi",
      location: "Forum Mall, Kochi",
      cancellable: true,
      showTimes: [
        { time: "09:00 AM", format: "PM" },
        { time: "01:25 PM", format: "UMX" },
        { time: "04:00 PM", format: "PM" },
        { time: "07:30 PM", format: "PM" },
        { time: "11:00 PM", format: "PM" },
      ]
    },
    {
      id: "2",
      name: "Cinepolis: VIP Centre Square Mall, Kochi",
      location: "Centre Square Mall, Kochi",
      cancellable: false,
      showTimes: [
        { time: "09:15 AM", format: "DOLBY 7.1" },
        { time: "12:40 PM", format: "DOLBY 7.1" },
        { time: "04:05 PM", format: "DOLBY 7.1" },
        { time: "07:30 PM", format: "DOLBY 7.1" },
        { time: "11:00 PM", format: "DOLBY 7.1" },
      ]
    },
    {
      id: "3",
      name: "Shenoys: Kochi",
      location: "Kochi",
      cancellable: true,
      showTimes: [
        { time: "11:30 AM", format: "4K DOLBY 7.1" },
        { time: "03:00 PM", format: "4K DOLBY 7.1" },
        { time: "06:30 PM", format: "4K DOLBY 7.1" },
        { time: "10:00 PM", format: "4K DOLBY 7.1" },
      ]
    },
    {
      id: "4",
      name: "PVR: Lulu, Kochi",
      location: "Lulu Mall, Kochi",
      cancellable: false,
      showTimes: [
        { time: "10:30 AM", format: "Atmos" },
        { time: "04:30 PM", format: "Atmos" },
        { time: "10:30 PM", format: "Atmos" },
      ]
    },
    {
      id: "5",
      name: "PVR: Oberon Mall, Kochi",
      location: "Oberon Mall, Kochi",
      cancellable: true,
      showTimes: [
        { time: "10:35 AM", format: "" },
        { time: "12:50 PM", format: "" },
        { time: "06:45 PM", format: "" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Navbar />
      <MovieHeader 
        title={selectedMovie.title} 
        certification="UA13+" 
        genres={selectedMovie.genre} 
      />
      <DateSelector />
      <Legend />
      <TheatersList theaters={theaters} />
      <Footer />
    </div>
  );
};

export default Index;
