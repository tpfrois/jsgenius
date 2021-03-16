const baseURL = "https://us-central1-prova-front-letras.cloudfunctions.net/";

const api = {
  getRank: async () => {
    try {
      const response = await fetch(`${baseURL}ranking`);
      const data = await response.json();
      const orderedRank = data.sort((a, b) => b.score - a.score);
      return orderedRank;
    } catch (error) {
      console.log(error);
    }
  },
  postRank: async (data) => {
    try {
      const response = await fetch(`${baseURL}save`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      const json = response.json();
      return json;
    } catch (error) {
      console.log(error);
    }
  }
}

export default api;