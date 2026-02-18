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
        name: "Vertex Speed Low Shoe",
        thumbnail:
            "https://images-dynamic-arcteryx.imgix.net/details/1350x1710/S26-X000009716-Vertex-Speed-Low-Shoe-Luminary-Stratus-Women-s-Profile.jpg?auto=format%2Ccompress&q=70&fit=crop&fill=white&dpr=2.0000000298023224&ixlib=react-9.10.0",
        description:
            "Low-profile running shoe designed to climb through technical vertical terrain.",
        price: 2099,
        star: 4,
    },
    {
        id: 4,
        name: "Norvan LD 4 GTX Shoe",
        thumbnail:
            "https://images-dynamic-arcteryx.imgix.net/details/1350x1710/S26-X000010399-Norvan-LD-4-GTX-Shoe-Stratus-Stratus-Women-s-Profile.jpg?auto=format%2Ccompress&q=75&fill=white",
        description:
            "Adaptable waterproof shoe for confidence on training and adventure runs.",
        price: 2399,
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

function renderProducts() {
    const wrapper = document.getElementById("products-wrapper");
    wrapper.innerHTML = products
        .map(
            (product) => `
                    <div class="product-card">
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

renderProducts();
