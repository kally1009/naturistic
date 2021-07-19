var app = new Vue({
    el: "#app",
    data: {
        slides: 7,
        search_string:"",
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
                image:"../images/snow_mountain.jpg",
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
    methods:{

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
        }
   }
});
