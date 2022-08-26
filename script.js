'use strict';

const PersonalMovieDB = () => ({
  count: 0,
  movies: {},
  actor: {},
  genres: [],
  private: false,
  start() {
    this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    (this.count === null || this.count.trim() === '' || isNaN(this.count)) ?
      this.start() :
      true;
  },
  rememberMyFilms() {
    let i = 0;
    while (i < 2) {
      const lastFilm = prompt('Какой последний фильм вы посмотрели?', '');
      console.log(lastFilm);
      if (
        lastFilm !== null &&
        lastFilm.trim() !== '' &&
        lastFilm.trim().length < 60
      ) {
        i++;
        let j = 0;
        while (j < 1) {
          const grade = prompt('На сколько вы его оцениваете?', '');
          if (grade !== null && grade.trim().length !== 0) {
            j++;
            this.movies[lastFilm] = grade;
          }
        }
      }
    }
  },
  detectPersonalLevel() {
    const count = this.personalMovieDB.count;
    if (count < 10) {
      document.write('Вы посмотрели мало фильмов');
    } else if (count >= 10 && count <= 30) {
      document.write('Вы посмотрели много фильмов');
    } else if (count > 30) {
      document.write('Вы киноман');
    } else {
      document.write('что-то пошло не так');
    }
  },
  toggleVisibleMyBD() {
    this.private = !this.private;
  },
  showMyBD() {
    if (!this.personalMovieDB.private) {
      console.log(this.personalMovieDB);
    }
  },
  writeYourGenres() {
    let yourGenres = '';
    let i = 0;
    while (i < 2) {
      yourGenres = prompt(`Ваш любимый жанр №${i + 1}?`, '');
      if (yourGenres !== null || yourGenres !== '') {
        i++;
        this.personalMovieDB.push(yourGenres);
      }
    }
    this.genres.forEach((genre, index) => {
      console.log(`Любимый жанр №${index + 1} - это ${genre}`);
    });
  }
});
const consoleProject = PersonalMovieDB();

