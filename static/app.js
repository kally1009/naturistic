var url = "http://localhost:4242"
var app = new Vue({
    el: "#app",
    data: {
        dialog: false,
        searchString:"",
        selected_category:"Highlights",
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
                title:"Single Desert Mountain",
                url:"",
                image:"../images/wave.jpg",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                tags:["Water"],
                shown: true
            },
            {
                title:"Single Desert Mountain",
                url:"",
                image:"../images/waterfall.jpg",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                tags: ["Water"],
                shown: true
            },
            {
                title:"Single Desert Mountain",
                url:"",
                image:"../images/sun_snow.jpg",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                tags: ["Trees"],
                shown: true
            },
            {
                title:"Single Desert Mountain",
                url:"",
                image:"../images/sun_mountain.jpg",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                tags:["Mountains","Water"],
                shown: true
            },
            {
                title:"Single Desert Mountain",
                url:"",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                image:"../images/snow_mountain1.jpg",
                description:"Desert Mountain",
                tags:["Mountains"],
                shown: true
            },
            {
                title:"Single Desert Mountain",
                url:"",
                image:"../images/splashing.jpg",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                tags:["Water"],
                shown: true
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
                console.log(item.title)
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
                return this.category_products;
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
                return this.category_products;
                
               // this.category_products = this.products.filter(function(product){
                //    product.tags.filter(function(tag,index){
                 //       return tag[index]==this.selected_category;
                 //  });
                       
                    
                    //product.tags,this.selected_category)
                    //return product.tags == app.selected_category;
                 
          //  })
        
    }
    
}
    }
    });
