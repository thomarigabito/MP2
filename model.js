
  

const product = [
            {
                id: 0,
                image: 'Assets/house_specs/CamellaArielle.jpg',
                title: 'Harmony Haven',
                price: 1200000,
                details: 'loginpage.html'
            },
            {
                id: 1,
                image: 'Assets/house_specs/CamellaCriselle.jpg',
                title: 'Serenity Suite',
                price: 1500000,
                details: 'index.html'
            },
            {
                id: 2,
                image: 'Assets/house_specs/CamellaDana.jpg',
                title: 'Crestview Cottage',
                price: 2300000,
                details: 'index.html'
            },
            {
                id: 3,
                image: 'Assets/house_specs/CamellaElla.jpg',
                title: 'Radiant Retreat',
                price: 3500000,
                details: 'index.html'
            },
            {
                id: 4,
                image: 'Assets/house_specs/CamellaEzabelle.jpg',
                title: 'Tranquil Terrace',
                price: '2300000',
                details: 'index.html'
            },
            {
                id: 5,
                image: 'Assets/house_specs/CamellaFreya.jpg',
                title: 'Majestic Manor',
                price: '4500000',
                details: 'index.html'
            },
            {
                id: 6,
                image: 'Assets/house_specs/CamellaGreta.jpg',
                title: 'Majestic Manor',
                price: '4500000',
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
    document.getElementById('searchBar').addEventListener('keyup', (e) => {
        const searchData = e.target.value.toLowerCase();
        const filteredData = categories.filter((item) => {
            return (
                item.price.toLowerCase().includes(searchData)
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
                    <div class='detailsbox'>
                        <div class='bottom'>
                            <p>${title}</p>
                            <h2>PHP ${price}.00</h2>
                        </div>
                        <div class='btn-box'>
                            <button class="cardbtn"><a href=${details}> Details </a> </button>
                            <button class="cardbtn"> Book </button>
                        </div>
                    </div>
                </div>`
                   
            )
        }).join('')
    };
displayItem(categories);








    

