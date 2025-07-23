import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface SearchSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedGenre: string;
  setSelectedGenre: (genre: string) => void;
  selectedYear: string;
  setSelectedYear: (year: string) => void;
}

const SearchSection = ({
  searchQuery,
  setSearchQuery,
  selectedGenre,
  setSelectedGenre,
  selectedYear,
  setSelectedYear
}: SearchSectionProps) => {
  const genres = ["Все", "Боевик", "Драма", "Комедия", "Фантастика", "Ужасы", "Триллер"];
  const years = ["Все", "2024", "2023", "2022", "2021", "2020"];

  return (
    <section className="py-12 bg-card">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bebas mb-8 text-center tracking-wider">УМНЫЙ ПОИСК</h3>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="relative">
              <Icon name="Search" size={20} className="absolute left-3 top-3 text-muted-foreground" />
              <Input
                placeholder="Поиск по названию, актерам, режиссерам..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background"
              />
            </div>
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="px-3 py-2 bg-background border border-border rounded-md"
            >
              {genres.map(genre => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-3 py-2 bg-background border border-border rounded-md"
            >
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;