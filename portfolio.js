const projectsLagi = [
  {
    title: "Kalkulator",
    description: "Web Calculator adalah aplikasi berbasis web untuk melakukan perhitungan angka langsung di browser menggunakan HTML, CSS, dan JavaScript.",
    image: "image copy.png",
    tags: ["HTML",],
    tags2: ["CSS",],
    tags3: ["JavaScript"],
    link: "https://github.com/arenszy/kal-ku-lator.git",
  },
  {
    title: "Lampu Merah",
    description: "Traffic Lamp adalah aplikasi web sederhana yang mensimulasikan lampu lalu lintas (merah, kuning, hijau) menggunakan HTML, CSS, dan JavaScript.",
    image: "image copy.png",
    tags: ["HTML",],
    tags2: ["CSS"],
    tags3: ["JavaScript"],
    link: "https://github.com/arenszy/traffic-html.git",
  },
  {
    title: "Kalkulator zakat",
    description: "Kalkulator Zakat Emas adalah aplikasi web untuk menghitung zakat emas berdasarkan berat yang dimiliki, dibuat menggunakan HTML, CSS, dan JavaScript.",
    image: "image copy.png",
    tags: ["HTML"],
    tags2: ["CSS"],
    tags3: ["JavaScript"],
    link: "https://github.com/arenszy/k-zakat.git",
  },
  {
    title: "Portfolio canva",
    description: "Portfolio ini berisi karya dan proses belajar saya. Melalui berbagai proyek, saya menunjukkan kreativitas, minat pada teknologi, dan usaha untuk terus berkembang.",
    image: "image copy.png",
    tags: ["Canva"],
    link: "https://arya-pratama.my.canva.site/black-portfolio",
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

  let tags3 = document.createElement("span");
  tags3.textContent = project.tags3;
  tags3.className = "tags3";
  tags3.src = project.tags3;

  let link = document.createElement("a");
  link.src = project.tags;
  link.className = "link";
  link.textContent = "Lihat lebih lanjut ➡️";
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
  oncard.appendChild(tags3);
  /* card.appendChild(incard) */
}