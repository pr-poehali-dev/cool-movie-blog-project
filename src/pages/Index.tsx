import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SearchSection from '@/components/SearchSection';
import ReviewsSection from '@/components/ReviewsSection';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const movieReviews = [
    {
      id: 1,
      title: "Дюна: Часть вторая",
      director: "Дени Вильнёв",
      year: 2024,
      genre: "Фантастика",
      rating: 5,
      poster: "img/e1939eb9-a97f-4525-b86e-1dc21b98e111.jpg",
      description: "Эпическое продолжение космической саги о Поле Атрейдесе"
    },
    {
      id: 2,
      title: "Оппенгеймер",
      director: "Кристофер Нолан",
      year: 2023,
      genre: "Драма",
      rating: 5,
      poster: "img/e1939eb9-a97f-4525-b86e-1dc21b98e111.jpg",
      description: "Биографическая драма о создателе атомной бомбы"
    },
    {
      id: 3,
      title: "Джон Уик 4",
      director: "Чад Стахелски",
      year: 2023,
      genre: "Боевик",
      rating: 4,
      poster: "img/e1939eb9-a97f-4525-b86e-1dc21b98e111.jpg",
      description: "Финальная глава легендарного киллера"
    }
  ];

  const filteredMovies = movieReviews.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         movie.director.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === '' || selectedGenre === 'Все' || movie.genre === selectedGenre;
    const matchesYear = selectedYear === '' || selectedYear === 'Все' || movie.year.toString() === selectedYear;
    
    return matchesSearch && matchesGenre && matchesYear;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <AboutSection />
      <SearchSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
      <ReviewsSection filteredMovies={filteredMovies} />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;