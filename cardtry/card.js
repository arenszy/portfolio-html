const projectsLagi = [
  {
    title: "Kalkulator",
    description: "Web Calculator adalah aplikasi berbasis web untuk melakukan perhitungan angka langsung di browser menggunakan HTML, CSS, dan JavaScript.",
    image: "image copy.png",
    tags: ["HTML",],
    tags2: ["CSS",],
    link: "https://github.com/mahirdev/belajar-javascript/zakat-emas",
  },
  {
    title: "Lampu Merah",
    description: "Simulasi Lampu merah",
    image: "image copy.png",
    tags: ["HTML",],
    tags2: ["CSS"],
    link: "https://github.com/mahirdev/belajar-javascript/zakat-emas",
  },
  {
    title: "Kalkulator zakat emas",
    description: "Simulasi Lampu merah",
    image: "image copy.png",
    tags: ["HTML"],
    tags2: ["CSS"],
    link: "https://github.com/mahirdev/belajar-javascript/zakat-emas",
  },
];

const gallery = document.getElementById("gallery");

for (let i = 0; i < projectsLagi.length; i++) {
  let project = projectsLagi[i];

  let card = document.createElement("div");
  card.className = "card";

  let title = document.createElement("h2");
  title.textContent = project.title;
  title.className = "title";

  let incard = document.createElement("div");
  incard.className = "infcard";

  let oncard = document.createElement("div");
  oncard.className = "onfcard"

  let description = document.createElement("p");
  description.textContent = project.description;
  description.className = "description";

  let image = document.createElement("img");
  image.src = project.image;
  image.className = "image";

  let tags = document.createElement("span");
  tags.textContent = project.tags;
  tags.className = "tags";
  tags.src = project.tags;

  let tags2 = document.createElement("span");
  tags2.textContent = project.tags2;
  tags2.className = "tags2";
  tags2.src = project.tags2;

  let link = document.createElement("a");
  link.src = project.tags;
  link.className = "link";
  link.textContent = "Lihat lebih lanjut";
  link.href = project.link;


  gallery.appendChild(card);
  card.appendChild(image);
  card.appendChild(incard);
  incard.appendChild(oncard);
  incard.appendChild(title);
  incard.appendChild(description);
  incard.appendChild(link);
  oncard.appendChild(tags);
  oncard.appendChild(tags2);
  /* card.appendChild(incard) */
}

