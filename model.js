      const product = [
            {
                id: 0,
                image: 'Assets/compilehousemodels1/pexels-binyamin-mellish-106399.jpg',
                title: 'Villa',
                price: 1200000,
                details: 'index.html'
            },
            {
                id: 1,
                image: 'Assets/compilehousemodels1/pexels-binyamin-mellish-1396122.jpg',
                title: 'Single House',
                price: 1500000,
                details: 'index.html'
            },
            {
                id: 2,
                image: 'Assets/compilehousemodels1/pexels-binyamin-mellish-1396132.jpg',
                title: 'House Model 3',
                price: 2300000,
                details: 'index.html'
            },
            {
                id: 3,
                image: 'Assets/compilehousemodels1/pexels-curtis-adams-3555615.jpg',
                title: 'House Model 4',
                price: 3500000,
                details: 'index.html'
            },
            {
                id: 4,
                image: 'Assets/compilehousemodels1/pexels-curtis-adams-3990589.jpg',
                title: 'House Model 5',
                price: 2300000,
                details: 'index.html'
            },
            {
                id: 5,
                image: 'Assets/compilehousemodels1/pexels-curtis-adams-5353946.jpg',
                title: 'House Model 6',
                price: 4500000,
                details: 'index.html'
            },
        ]






const categories = [...new Set(product.map((item) => {
        return item}))]

    document.getElementById('searchBar').addEventListener('keyup', (e) => {
        const searchData = e.target.value.toLowerCase();
        const filteredData = categories.filter((item) => {
            return (
                item.title.toLowerCase().includes(searchData)
            )

        })
        displayItem(filteredData)
    });

    const displayItem = (items) => {
        document.getElementById("root").innerHTML = items.map((item) => {
            var { image, title, price, details,} = item;
            return (
                `<div class='box'>
                    <div class='img-box'>
                        <img class='images' src=${image}></img>
                    </div> 
                    <div class='bottom'>
                        <p>${title}</p>
                        <h2>PHP ${price}.00</h2>
                    <button><a href=${details}> Details </a> </button>
                    </div>
                </div>`
            )
        }).join('')
    };
    displayItem(categories);
