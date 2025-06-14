const products = [
  { name: "Laptop", price: 800, rating: 4.2 },
  { name: "Phone", price: 400, rating: 4.7 },
  { name: "Headphones", price: 150, rating: 4.5 }
];

function renderProducts(list = products) {
  const ul = document.getElementById("productList");
  ul.innerHTML = "";
  list.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.name} - ₹${p.price} - ⭐ ${p.rating}`;
    ul.appendChild(li);
  });
}

function filterProducts() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(query));
  renderProducts(filtered);
}

function sortProducts() {
  const value = document.getElementById("sortSelect").value;
  let sorted = [...products];
  if (value === "price") sorted.sort((a, b) => a.price - b.price);
  else if (value === "rating") sorted.sort((a, b) => b.rating - a.rating);
  renderProducts(sorted);
}

renderProducts();
