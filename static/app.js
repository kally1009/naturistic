var url = "http://localhost:4242"
var app = new Vue({
    el: "#app",
    data: {
        dialog: false,
        searchString:"",
        selected_category:"Highlights",
        slides: 7,
        search_string:"",
        page:"home",
        category_products:[],
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
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                tags:"Water",
                shown: true
            },
            {
                _id: "fdfadsfds",
                title:"Single Desert Mountain",
                url:"",
                image:"../images/waterfall.jpg",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                tags: "Water",
                shown: true
            },
            {
                _id: "dfdsfadsaf",
                title:"Single Desert Mountain",
                url:"",
                image:"../images/sun_snow.jpg",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                shown: true
            },
            {
                _id: "sfadsfa",
                title:"Single Desert Mountain",
                url:"",
                image:"../images/sun_mountain.jpg",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                shown: false
            },
            {
                _id: "fdsafdsaf",
                title:"Single Desert Mountain",
                url:"",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                image:"../images/snow_mountain1.jpg",
                description:"Desert Mountain",
                shown: false
            },
            {
                _id: "sdafsdfasd",
                title:"Single Desert Mountain",
                url:"",
                image:"../images/splashing.jpg",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                shown: false
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
        searchProducts: function(){
            var product_array = this.category_products;
            var searchString=this.searchString;
            searchString = searchString.trim().toLowerCase();

            product_array= product_array.filter(function(item){
                if(item.title.toLowerCase().indexOf(searchString)!==-1){
                    return item
                }
                if(item.description.toLowerCase().indexOf(searchString)!==-1){
                    return item
                }
                if(item.tags.toLowerCase().indexOf(searchString)!==-1){
                    return item
                }

            })
            return product_array
        },
        filteredCategory: function(){
            if(this.selected_category=="Highlights"){
                this.category_products=this.products
                return this.category_products
            }
            else{
                this.category_products = this.products.filter(function(product){
                    return product.tags == this.selected_category;
                });
                return this.category_products 
            }
            
    }
   }
});
