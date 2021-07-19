var url = "http://localhost:4242"
var app = new Vue({
    el: "#app",
    data: {
        searchString:"",
        selected_category:"Highlights",
        slides: 7,
        search_string:"",
        page:"home",
        cart:[
            {
                "title":"California Waves",
                "image":"../images/wave.jpg",
                "price": 1.00
            },
            {
                "title":"Desert Mountain",
                "image":"../images/wave.jpg",
                "price": 1.00
            }
        ],
        products: [
            {
                _id: "fgfhghs",
                title:"Single Desert Mountain",
                url:"",
                image:"../images/wave.jpg",
                description:"Desert Mountain"
            },
            {
                _id: "ghgfhsg",
                title:"California Waves",
                url:"",
                image:"../images/lake.jpg",
                descriptioin:"Ocean Waves in California USA"
            },
            {
                _id: "fdfadsfds",
                title:"Single Desert Mountain",
                url:"",
                image:"../images/waterfall.jpg",
                description:"Desert Mountain"
            },
            {
                _id: "dfdsfadsaf",
                title:"Single Desert Mountain",
                url:"",
                image:"../images/desert_mountain.jpg",
                description:"Desert Mountain"
            },
            {
                _id: "sfadsfa",
                title:"Single Desert Mountain",
                url:"",
                image:"../images/sun_mountain.jpg",
                description:"Desert Mountain"
            },
            {
                _id: "fdsafdsaf",
                title:"Single Desert Mountain",
                url:"",
                image:"../images/snow_mountain1.jpg",
                description:"Desert Mountain"
            },
            {
                _id: "sdafsdfasd",
                title:"Single Desert Mountain",
                url:"",
                image:"../images/splashing.jpg",
                description:"Desert Mountain"
            },
        ],
        categories:[
            "Highlights",
            "Water",
            "Mountains",
            "Space",
            "Trees",
            "Plains",
            "Desert",
            "Sunsets",
            "Flowers"
        ]

    },
    vuetify: new Vuetify(), 
   // created: function(){
       // this.getProducts();
    //},
    methods:{
        getProducts: function(){
            fetch(`${url}/products/${selected_category}`).then(function(response){
                response.json().then(function(data){
                    console.log(data);
                    app.products=data;
                })
            })
        }
    },
    computed: {
        filteredProducts: function(){
            var product_array = this.products;
            var searchString=this.searchString
            searchString = searchString.trim().toLowerCase();

            product_array= product_array.filter(function(item){
                if(item.title.toLowerCase().indexOf(searchString)!==-1){
                    return item
                }

            })
            return product_array
        },
        filteredCategory: function(){
            if(this.selected_category=="Highlights"){
                return this.products 
            }
            else{
                var sorted_products = this.products.filter(function(product){
                    return product.tags == app.selected_category;
                });
                return sorted_products 
            }
            
    }
   }
});
