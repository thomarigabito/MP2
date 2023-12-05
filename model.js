      const product = [
            {
                id: 0,
                image: 'Assets/compilehousemodels1/pexels-binyamin-mellish-106399.jpg',
                title: 'Harmony Haven',
                price: 1200000,
                details: 'index.html'
            },
            {
                id: 1,
                image: 'Assets/compilehousemodels1/pexels-binyamin-mellish-1396122.jpg',
                title: 'Serenity Suite',
                price: 1500000,
                details: 'index.html'
            },
            {
                id: 2,
                image: 'Assets/compilehousemodels1/pexels-binyamin-mellish-1396132.jpg',
                title: 'Crestview Cottage',
                price: 2300000,
                details: 'index.html'
            },
            {
                id: 3,
                image: 'Assets/compilehousemodels1/pexels-curtis-adams-3555615.jpg',
                title: 'Radiant Retreat',
                price: 3500000,
                details: 'index.html'
            },
            {
                id: 4,
                image: 'Assets/compilehousemodels1/pexels-curtis-adams-3990589.jpg',
                title: 'Tranquil Terrace',
                price: 2300000,
                details: 'index.html'
            },
            {
                id: 5,
                image: 'Assets/compilehousemodels1/pexels-curtis-adams-5353946.jpg',
                title: 'Majestic Manor',
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
