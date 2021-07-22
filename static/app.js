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
                title:"Ocean Water",
                bigImage:"",
                image:"../images/wave.jpg",
                description:"",
                tags:["Water"],
                price: 1.00
            }
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
                title:"Mountain",
                bigImage:"",
                image:"../images/waterfall.jpg",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                tags: ["Water"],
                
            },
            {
                title:"Single Desert Mountain",
                url:"",
                image:"../images/sun_snow.jpg",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                tags: ["Trees"],
                
            },
            {
                title:"Single Desert Mountain",
                bigImage:"",
                image:"../images/sun_mountain.jpg",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                tags:["Mountains","Water"],
                
            },
            {
                title:"Single Desert Mountain",
                bigImage:"",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                image:"../images/snow_mountain1.jpg",
                description:"Desert Mountain",
                tags:["Mountains"],
                
            },
            {
                title:"Single Desert Mountain",
                bigImage:"",
                image:"../images/splashing.jpg",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                tags:["Water"],
                
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
       this.getProducts();
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
        }
    },

    computed: {
        
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
