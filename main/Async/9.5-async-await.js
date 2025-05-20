// Ожидание выполнения промиса с помощью await и async
// Задача
// Вместо того чтобы строить цепочку промисов, написать линейную логику, которую было бы проще
//  читать и которая была бы больше похожа на синхронный код.

{
  async function getImage(params) {
    const url =
      "https://upload.wikimedia.org/wikipedia/commons/b/b2/Eagle_nebula_pillars.jpg";
    try {
      let response = await fetch(url);

      console.log(response.status);
    } catch (error) {
      console.log(error.message);
    }
  }
  getImage();
}
