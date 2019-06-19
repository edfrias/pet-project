export default class GetDetailMovieUseCase {
    constructor({repository}) {
        this._repository = repository
    }

    async execute({id}) {
        const movieDetailValueObject = await this._repository.detail({id})
        return movieDetailValueObject.toJSON()
    }
}