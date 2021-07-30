var url = "https://naturistic-demo.herokuapp.com"
var app = new Vue({
    el: "#app",
    data: {
        dialog:false,
        active: false,
        searchString:"",
        selected_category:"Highlights",
        search_string:"",
        page:"home",
        category_products:[],
        cart:[],
        cart_empty: "Cart is Empty",
        products: [],
        categories:[
            "Highlights",
            "Water",
            "Mountains",
            "Space",
            "Trees",
            "Desert",
            "Sunsets",
            "Flowers"
        ],
        

    },
    vuetify: new Vuetify(), 
    created: function(){
      this.filteredCategory();
      console.log(this.page);
    },
    methods:{
        getProducts: function(){
            fetch(`${url}/prices`).then(function(response){
                response.json().then(function(data){
                    console.log(data);
                    if(data){
                        app.products=data;
                    } 
                })
            })
        },
        postPrice: ()=>{ 
            var line_items=[]
                //loop through for each object in the cart. 
                this.cart.forEach((product,index)=>{
                    var price=product.price
                    let Obj = {
                        price: price,
                        quantity: 1
                    }
                    line_items.push(Obj);
                }),
            fetch(`${url}/create-checkout-session`,{
                method: "POST",
                headers:{
                    "content-type":"application/json"
                },
                body: JSON.stringify(line_items)
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
                else if(item.description.toLowerCase().indexOf(searchString)!==-1){
                    product_array.push(item)
                }

            })
            app.category_products=product_array;
            console.log(app.category_products);
            this.searchString="";
            searchString="";

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
        
            }
    
        }
    }
    });
