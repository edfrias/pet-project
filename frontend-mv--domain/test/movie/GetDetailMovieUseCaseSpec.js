import Domain from '../../src'

let domain

describe('GetDetailMovieUseCase', () => {
    beforeEach(() => {
        domain = new Domain()
    })

    it('#execute', async () => {
        const detail = await domain.get('get_detail_movies_use_case').execute({id: '399579'})
        console.log('detail', detail)
    })
})