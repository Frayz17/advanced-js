export default async (url = '', query = '', isEnable = true) => {
  if (isEnable) {
    try {
      const response = await fetch(url + query);

      if (response === 200) {
        const data = await response.json();

        return data;
      } else {
        console.log('failed to get data, response status: ', response.status);
      }
    } catch (e) {
      console.log(e);
    }
  }
};
