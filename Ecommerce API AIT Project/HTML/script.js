const cartCount=document.getElementById("cartCount");
const mensSection = document.getElementById("mensSection");
const womensSection = document.getElementById("womensSection");
const jewelerySection = document.getElementById("jewelerySection");
const electronicsSection = document.getElementById("electronsSection");
let cart=[];


async function fecthProducts() {
    try{
        const res= await fetch('https://fakestoreapi.com/products/1')
        const products = await res.json();
        renderProductsByCategory(products);
    } catch(err){
        mensSection.innerHTML=womensSection.innerHTML=jewelerySection.innerHTML=electronicsSection.innerHTML=`
        <p>Filed to fecth the data</p>`
    }
    
}
function renderProductsByCategory(products){
    const categories={
        "men's clothing" : mensSection,
        "women's clothing" : womensSection,
        "jewelery" : accessoriesSection,
        "electronics" : accessoriesSection,

       
    };
    products.forEach(product=>{
        const container = categories[product.category];
        if(container){
            const card = document.createElement("div");
            card.className = "card";
            
        }
    })

}