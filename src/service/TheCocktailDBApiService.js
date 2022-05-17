class TheCocktailDBApiService {

    getMultipleItems(count = 5) {
        let promises = []

        for (let i = 0; i < count; i++) {
            promises.push(this.getRandom())
        }

        return Promise.all(promises).then((data) => {
            return data;
        })
    }

    getItemById(id) {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,{ method: 'get' })
            .then(function(result) {
                return result.json().then((data) => {
                    return data.drinks[0]
                })
            })
    }
    getRandom() {
        return fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php", { method: 'get' })
            .then(function(result) {
                return result.json().then((data) => {
                    return data.drinks[0]
                })
            })
    }
}

export default new TheCocktailDBApiService();