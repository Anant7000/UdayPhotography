
Pic=['Wedding album','Photography','Photographer','moviecamera','camera','Group Photo','fashion','photographymodel'];


coverpic=['Indianwedding','Photography','Photographer','moviecamera','camera','director','fashion','acting'];

var parentDiv = document.querySelector(".main_container");

for (let index = 0; index < 7; index++) {
  var newDiv = document.createElement('div');
  newDiv.classList.add('card_container');

  newDiv.innerHTML = `
    <a href="https://drive.google.com/drive/folders/1C0iZkK9jSOpvEVScxE7N23vkF7TweNzG" class="card_image_container">
      <img
        src="https://source.unsplash.com/random/600×400?${coverpic[index ]}"
        alt="card 1 image"
        class="card_image"
        loading="lazy"
      />
    </a>

    <div class="card_title_container">
      <a href="https://drive.google.com/drive/folders/1C0iZkK9jSOpvEVScxE7N23vkF7TweNzG" class="card_title_anchor">
        <h2 class="card_title">${Pic[index]}</h2>
      </a>
     
    </div>
  `;

  parentDiv.appendChild(newDiv);
}
