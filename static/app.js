var url = "http://localhost:4242"
var app = new Vue({
    el: "#app",
    data: {
        dialog: false,
        active: false,
        searchString:"",
        selected_category:"Highlights",
        search_string:"",
        page:"home",
        category_products:[],
        cart:[
            
        ],
        products: [
            {
                title:"Ocean Water",
                bigImage:"",
                image:"../images/wave.jpg",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                tags:["Water"],
                price:1.00
                
            },
            {
                title:"Water Fall",
                bigImage:"",
                image:"../images/waterfall.jpg",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                tags: ["Water"],
                price: 2.00
                
            },
            {
                title:"Snowy Trees",
                bigImage:"",
                image:"../images/sun_snow.jpg",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                tags: ["Trees"],
                price: 1.00
                
            },
            {
                title:"Sunset with Mountains",
                bigImage:"",
                image:"../images/sun_mountain.jpg",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                tags:["Mountains","Sunsets", "Desert"],
                price: 2.00
                
            },
            {
                title:"Snow Mountains",
                bigImage:"",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                image:"../images/snow_mountain1.jpg",
                description:"Desert Mountain",
                tags:["Mountains"],
                price: 1.00
                
            },
            {
                title:"Underwater",
                bigImage:"",
                image:"../images/splashing.jpg",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                tags:["Water"],
                price: 1.00
                
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
    created: function(){
      this.filteredCategory();
    },
    methods:{
        getProducts: function(){
            fetch(`${url}/prices`).then(function(response){
                response.json().then(function(data){
                    console.log(data);
                    app.products=data;
                })
            })
        },
        searchProducts: function(){
            var product_array = []
            var searchString=this.searchString;
            searchString = searchString.trim().toLowerCase();

            this.category_products.forEach(function(item){
                
                if(item.title.toLowerCase().indexOf(searchString)!==-1){
                    console.log(item.title)
                    product_array.push(item)
                }
                if(item.description.toLowerCase().indexOf(searchString)!==-1){
                    product_array.push(item)
                }

            })
            app.category_products=product_array;
            console.log(app.category_products);
        },
        addToCart: function(product){
            app.cart.push(product);
            console.log(app.cart);
        },
        deleteFromCart: function(index){
            app.cart.splice(index,1);
            console.log(app.cart);
        },
        filteredCategory: function(){
            if(this.selected_category=="Highlights"){
                this.category_products=this.products
               // return this.category_products;
            }
            else{
                    this.category_products=[]
                    this.products.forEach(function(product,index){
                    product.tags.filter(function(tag){
                        if(tag == app.selected_category){
                            app.category_products.push(product);
                            console.log(product, tag);
                        }
                    })
                })
               // return this.category_products;
        
            }
    
        }
    }
    });
