import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <div className='movies'>
      <Header />
      <SearchForm />
      <MoviesCardList />
      <Footer movies={true} />
    </div>    
  )

}

export default Movies;