import sports from "./sports.js";
class DataSource {
    static searchSport(keyword) {
        return fetch(`https://www.thesportsdb.com/api/v1/json/2/all_sports.php?t=${keyword}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.teams) {
                    return Promise.resolve(responseJson.teams);
                } else {
                    return Promise.reject(`${keyword} is not found`)
                }
            })
    }
}

export default DataSource;