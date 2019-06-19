import GenericMovieErrors from './GenericMovieError'
import NotFoundMovieError from './NotFoundMovieError'

export default class MovieErrorsFactories {
    static genericMovieErrors = () => new GenericMovieErrors()
    static notFoundMovieError = () => new NotFoundMovieError()
}
