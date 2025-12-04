const products = [
    { name: "Daily Home Needs", link: "daily-home-needs.html", groups: 7 },
  ];

  const container = document.getElementById("live_data1");

  // Remove duplicates by link
  const uniqueProducts = products.filter(
    (product, index, self) =>
      index === self.findIndex(p => p.link === product.link)
  );

  // Sort by groups (descending)
  uniqueProducts.sort((a, b) => b.groups - a.groups);

  // Append HTML blocks
  uniqueProducts.forEach(product => {
    const div = document.createElement("div");
    div.className = "i-box-s1";
    div.innerHTML = `
      <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
        <div class="cats-wrap text-center">
          <a href="${product.link}" class="Goodup-catg-wrap">
            <div class="Goodup-catg-city" style="right: 12px; left: unset;">${product.groups}</div>
              <div class="Goodup-catg-icon"><i class="fas fa-stethoscope"></i></div>
              <div class="Goodup-catg-caption">
              <h4 class="fs-md mb-0 ft-medium m-catrio">${product.name}</h4>
              <!--<span class="text-muted">607 Listings</span>-->
            </div>
          </a>
        </div>
      </div>
    `;
    container.appendChild(div);
  });