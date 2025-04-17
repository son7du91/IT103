const products = [
    {
        id: 1,
        name: "laptop dell xps 15",
        price: 35990000,
        image: "https://laptopmedia.com/wp-content/uploads/2022/04/3-14-scaled.jpg",
        description: "laptop cao cấp với màn hình 15 inch, cpu intel core i7 và ram 16gb."
    },
    {
        id: 2,
        name: "iphone 15 pro max",
        price: 32990000,
        image: "https://th.bing.com/th/id/OIP.PO8M08Vxndz_455at0qGawHaFj?rs=1&pid=ImgDetMain",
        description: "điện thoại flagship của apple với camera 48mp và chip a17 pro."
    },
    {
        id: 3,
        name: "samsung galaxy s24 ultra",
        price: 28990000,
        image: "https://th.bing.com/th/id/OIP.Yz-yhR8sUrAVKCr3EBW0bQHaEK?rs=1&pid=ImgDetMain",
        description: "điện thoại android mạnh mẽ với bút s-pen và camera siêu zoom."
    },
    {
        id: 4,
        name: "tai nghe sony wh-1000xm5",
        price: 7990000,
        image: "https://logico.com.vn/upload_images/images/2022/05/13/wh-1000xm55(1).jpg",
        description: "tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ."
    },
    {
        id: 5,
        name: "apple watch series 9",
        price: 11990000,
        image: "https://bgr.com/wp-content/uploads/2023/09/apple-watch-series-9.jpg?quality=82&strip=all",
        description: "đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao."
    },
    {
        id: 6,
        name: "loa jbl charge 5",
        price: 3990000,
        image: "https://th.bing.com/th/id/R.0fe273a64bd6af158455621ba66f3bac?rik=lIEJhIpRM5jniA&riu=http%3a%2f%2fwww.maccenter.vn%2fAudio%2fJBL-Charge5-Gray-A.jpg&ehk=tJ3ynLA5PEPOXVLhB1lsZH8Rj2RRWf6athbe1cB5hy8%3d&risl=&pid=ImgRaw&r=0",
        description: "loa bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ."
    }
];

function search_products() {
    let search_term = document.getElementById("search").value.toLowerCase();
    let result_container = document.getElementById("result");
    result_container.innerHTML = "";

    let filtered_products = products.filter(product =>
        product.name.toLowerCase().includes(search_term)
    );

    if (filtered_products.length > 0) {
        filtered_products.forEach(product => {
            let product_card = document.createElement("div");
            product_card.className = "product-card";

            let image = document.createElement("img");
            image.src = product.image;
            image.alt = product.name;

            let name = document.createElement("h3");
            name.textContent = product.name;

            let description = document.createElement("p");
            description.textContent = product.description;

            let price = document.createElement("p");
            price.textContent = `giá: ${product.price.toLocaleString()} đ`;

            let buy_button = document.createElement("button");
            buy_button.textContent = "mua";
            buy_button.style.background = "blue";
            buy_button.style.color = "white";
            buy_button.onclick = () => alert(`bạn đã chọn mua ${product.name}!`);

            product_card.appendChild(image);
            product_card.appendChild(name);
            product_card.appendChild(description);
            product_card.appendChild(price);
            product_card.appendChild(buy_button);

            result_container.appendChild(product_card);
        });
    } else {
        let no_result = document.createElement("p");
        no_result.textContent = "không tìm thấy sản phẩm nào phù hợp.";
        result_container.appendChild(no_result);
    }
}
