const categoryCards = [
    {
        backgroundImage:
            "https://cdn.sanity.io/images/inkbj32c/production/7c56814dd837a3361ce61457df707f0a48cf307d-7680x4320.jpg?w=1920&h=1080&q=100&auto=format&dpr=1 1x, https://cdn.sanity.io/images/inkbj32c/production/7c56814dd837a3361ce61457df707f0a48cf307d-7680x4320.jpg?w=1920&h=1080&q=100&auto=format&dpr=2 2x",
    },
    {
        backgroundImage:
            "https://cdn.sanity.io/images/inkbj32c/production/5a35c40ddae680fee2b71a1ccb64675bf47cfe98-3840x2160.jpg?rect=674,0,2958,2160&w=953&h=696&q=100&auto=format&dpr=1 1x, https://cdn.sanity.io/images/inkbj32c/production/5a35c40ddae680fee2b71a1ccb64675bf47cfe98-3840x2160.jpg?rect=674,0,2958,2160&w=953&h=696&q=100&auto=format&dpr=2 2x",
    },
    {
        backgroundImage:
            "https://cdn.sanity.io/images/inkbj32c/production/a13807fae3946d82f7a0112f870cc124c09fce22-2160x2160.jpg?rect=0,291,2160,1578&w=953&h=696&q=75&auto=format&dpr=1 1x, https://cdn.sanity.io/images/inkbj32c/production/a13807fae3946d82f7a0112f870cc124c09fce22-2160x2160.jpg?rect=0,291,2160,1578&w=953&h=696&q=75&auto=format&dpr=2 2x",
    },
    {
        backgroundImage:
            "https://cdn.sanity.io/images/inkbj32c/production/043c6ece6f4c2c148aef51f308f078e4cfc7e025-1600x1225.jpg?rect=0,56,1600,1169&w=953&h=696&q=100&auto=format&dpr=1 1x, https://cdn.sanity.io/images/inkbj32c/production/043c6ece6f4c2c148aef51f308f078e4cfc7e025-1600x1225.jpg?rect=0,56,1600,1169&w=953&h=696&q=100&auto=format&dpr=2 2x",
    },
];

const products = [
    {
        id: 1,
        name: "Gamma Hoody Men's",
        thumbnail:
            "https://images-dynamic-arcteryx.imgix.net/details/1350x1710/S26-X000009905-Gamma-Hoody-Alpine-Blue-Front-View.jpg?auto=format%2Ccompress&q=75&fill=white",
        description:
            "Weather-resistant hooded softshell for hiking and mountain activities.",
        price: 699,
        star: 4,
    },
    {
        id: 2,
        name: "Beta AR Jacket Men's",
        thumbnail:
            "https://images-dynamic-arcteryx.imgix.net/details/1350x1710/F25-X000009906-Beta-AR-Jacket-Black-Sapphire-Front-View.jpg?auto=format%2Ccompress&q=75&fill=white",
        description:
            "Durable, breathable, weatherproof GORE-TEX PRO ePE shell for all-round mountain use.",
        price: 7599,
        star: 4,
    },
    {
        id: 3,
        name: "Aerios 5 Panel Cap",
        thumbnail:
            "https://images-dynamic-arcteryx.imgix.net/details/1350x1710/F25-X000009489-Aerios-5-Panel-Cap-Forage-Olive-Moss-Front-View.jpg?auto=format&q=70&fit=crop&fill=white&max-w=1350&max-h=1710&ixlib=react-9.10.0&w=927",
        description:
            "Fast-drying five-panel running hat with a quick-adjust shock cord closure.",
        price: 849,
        star: 4,
    },
    {
        id: 4,
        name: "Bird Word Cap",
        thumbnail:
            "https://images-dynamic-arcteryx.imgix.net/details/1350x1710/F25-X000009463-Bird-Word-Cap-Arctic-Silk-Glacial-Front-View.jpg?auto=format&q=70&fit=crop&fill=white&max-w=1350&max-h=1710&ixlib=react-9.10.0&w=594",
        description:
            "Adjustable, sweat-wicking six-panel ball cap for hikes and climbs.",
        price: 599,
        star: 4,
    },
    {
        id: 5,
        name: "Beta SV Pant Men's",
        thumbnail:
            "https://images-dynamic-arcteryx.imgix.net/details/1350x1710/S26-X000010280-Beta-SV-Pant-Dk-Stratus-Front-View.jpg?auto=format%2Ccompress&q=75&fill=white",
        description:
            "Durable GORE-TEX PRO ePE shell pant for all-mountain use in severe conditions.",
        price: 5999,
        star: 3,
    },
    {
        id: 6,
        name: "Kragg Cotton Pant Men's",
        thumbnail:
            "https://images-dynamic-arcteryx.imgix.net/details/1350x1710/S26-X000009530-Kragg-Cotton-Pant-Black-Front-View.jpg?auto=format%2Ccompress&q=75&fill=white",
        description:
            "Durable, stretch cotton-blend pant featured for climbers.",
        price: 2099,
        star: 5,
    },
    {
        id: 7,
        name: "Venta GTX Glove",
        thumbnail:
            "https://images-dynamic-arcteryx.imgix.net/details/1350x1710/F25-X000009935-Venta-GTX-Glove-Forage-Canvas-Front.jpg?auto=format%2Ccompress&q=75&fill=white",
        description:
            "Lightly insulated GORE-TEX hiking glove for breathable weather protection.",
        price: 2099,
        star: 3,
    },
    {
        id: 8,
        name: "Della Flask Holder Pack Accessory",
        thumbnail:
            "https://images-dynamic-arcteryx.imgix.net/details/1350x1710/S26-X000009627-Della-Flask-Holder-Black-Front.jpg?auto=format%2Ccompress&q=75&fill=white",
        description:
            "Smart, simple accessory attaches a 500ml flask to your pack’s shoulder strap.",
        price: 495,
        star: 4,
    },
];

function renderCategoryCards() {
    const wrapper = document.getElementById("category-section");
    if (!wrapper) return; // debug multipage don't have this id
    wrapper.innerHTML = categoryCards
        .map(
            (categoryCard) => `
        <div class="category-card" style="background-image: url('${categoryCard.backgroundImage}')">
                    <h2>The Norvan LD 4</h2>
                    <p>
                        Run any terrain with confidence in this highly
                        responsive shoe.
                    </p>
                    <button class="button-primary-xl"><a href="products.html" style="text-decoration:none;color:black">Shop now</a></button>
                </div>
        `,
        )
        .join("");
}

function renderProducts() {
    const wrapper = document.getElementById("products-wrapper");
    if (!wrapper) return;
    wrapper.innerHTML = products
        .map(
            (product) => `
                    <div class="product-card" onclick="openProduct(${product.id})">
                        <img
                            src="${product.thumbnail}"
                            alt="${product.name}" />
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <span>
                            <i data-lucide="star" fill="currentColor"></i>
                            <i data-lucide="star" fill="currentColor"></i>
                            <i data-lucide="star" fill="currentColor"></i>
                            <i data-lucide="star" fill="currentColor"></i>
                            <i data-lucide="star"></i>
                        </span>
                        <div class="price">${product.price}<span>kr</span></div>
                    </div>
        `,
        )
        .join("");
    lucide.createIcons();
}

function openProduct(id) {
    console.log(id);
    localStorage.setItem("selectedProductId", id);
    window.location.href = "product.html";
}

//product detail page
function renderProductDetail() {
    const selectedId = parseInt(localStorage.getItem("selectedProductId"));
    console.log(selectedId);
    let product;
    for (let p of products) {
        if (p.id === selectedId) {
            product = p;
            console.log(product);
            break;
        }
    }

    const wrapper = document.getElementById("product-detail");
    const banner = document.getElementById("product-banner");
    banner.innerHTML = `
        <div class="product-banner-content">
                    <p>Arc'teryx <span>></span> ${product.name}</p>
         </div>
    `;

    if (!wrapper) return;
    wrapper.innerHTML = `
        <div class="product-wrapper">
                    <div class="product-gallery">
                        <img
                            src="${product.thumbnail}"
                            alt="" />
                    </div>
                    <div class="product-info">
                        <h3 style="text-transform:uppercase">${product.name}</h3>
                        <span>
                            <i data-lucide="star" fill="currentColor"></i>
                            <i data-lucide="star" fill="currentColor"></i>
                            <i data-lucide="star" fill="currentColor"></i>
                            <i data-lucide="star" fill="currentColor"></i>
                            <i data-lucide="star"></i>
                        </span>
                        <p>
                            ${product.description}
                        </p>
                        <hr />
                        <span class="price">${product.price} <span>kr</span></span>
                        <button class="button-primary-dark-xl">
                            Add To Cart
                        </button>
                    </div>
                </div>
    `;
}

//cart page


renderCategoryCards();
renderProducts();
renderProductDetail();
