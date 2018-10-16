let actions = {
  loadPets ({ commit }) {
    return fetch('https://natallip.github.io/pets-json/pets.json', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        commit('setPetsList', data)
      })
  }
}

export default actions
