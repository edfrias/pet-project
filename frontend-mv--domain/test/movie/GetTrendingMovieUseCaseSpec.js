import Domain from '../../src'

let domain

describe('GetTrendingMovieUseCase', () => {
    beforeEach(() => {
        domain = new Domain()
    })

    it('#execute', async () => {
        const trendy = await domain.get('get_trending_movies_use_case').execute()
        console.log('trendy:', trendy)
    })
})