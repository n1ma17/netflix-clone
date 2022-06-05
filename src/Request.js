const API_KEY = 'f623f133cc292112764f7059efcc2904'

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`
}

export default requests