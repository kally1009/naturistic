var url = "http://localhost:4242"
var app = new Vue({
    el: "#app",
    data: {
        searchString:"",
        selected_category:"Highlights",
        products: [
            {
                "title":"Mountains",
                "url":"",
                "image":"../images/green_mountain_lake.jpg",
                tags: "Mountains"
                
            }
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