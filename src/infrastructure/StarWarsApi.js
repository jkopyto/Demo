const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const StarWarsApi = ({starWarsApiBaseUrl, httpClient = fetch}) => {
  return {
    find({category, id}) {
      return httpClient(`${starWarsApiBaseUrl}/${category}/${id}`)
          .then(handleErrors)
          .then(response => response.json())
          .then(responseJson => {
            return {id, name: responseJson.name}
          });
    }
  }
}
