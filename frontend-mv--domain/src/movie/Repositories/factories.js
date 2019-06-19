import MovieValueObjectsFactories from '../ValueObjects/factories'
import FetcherFactories from '../../Fetcher/factories'
import HTTPMovieRepository from './HTTPMovieRepository'
import MovieEntitiesFactories from '../Entities/factories'
import MovieErrorsFactories from '../Errors/factories';

export default class MovieRepositoriesFactories {
  static httpMovieRepository = ({config}) =>
    new HTTPMovieRepository({
      fetcher: FetcherFactories.httpFetcher(),
      movieListValueObjectFactory: MovieValueObjectsFactories.movieListValueObject,
      movieEntityFactory: MovieEntitiesFactories.movieEntity,
      notFoundMovieErrorFactory: MovieErrorsFactories.notFoundMovieError,
      config
    })
}
