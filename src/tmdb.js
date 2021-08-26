const API_KEY = "c737744f2a70dcf162be70130b0b7396"
const API_BASE = "https://api.themoviedb.org/3"
const language = "&language=pt-BR"

/* 
    - Originais da Netflix
    - Recomendados (trending)
    - Em alta (top rated)
    - Ação
    - Comédia
    - Terror
    - Romance
    - Documentário
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json()
    return json
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais Netflix',
                items: await basicFetch(`/discover/tv?with_network=213${language}&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados',
                items: await basicFetch(`/trending/all/week?${language}&api_key=${API_KEY}`)
            },
            {
                slug: 'top rated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?${language}&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28${language}&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35${language}&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27${language}&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749${language}&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items: await basicFetch(`/discover/movie?with_genres=99${language}&api_key=${API_KEY}`)
            }
        ]
    },
    getMovieInfo: async (movieId, type) => {
        let info = {}
        
        if (movieId) {
            switch (type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR`)
                break
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR`)
                break
                default:
                    info = null
                break
            }
        }

        return info
    }
}