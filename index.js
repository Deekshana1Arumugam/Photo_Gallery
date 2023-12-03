const btn=document.getElementById("btn")
const errorMessage=document.getElementById("errorMessage")
const gallery=document.getElementById("gallery")
btn.addEventListener("click",fetchImg)

async function fetchImg(){
    const inputVal=document.getElementById("input").value
    if(inputVal>10||inputVal<1){
        errorMessage.style.display="block"
        errorMessage.innerText="Number should be between 0 and 11"
        return
    }
    imgs="";
    try {
        btn.style.display="none"
        const loading=`<img src="Spin.svg" />`
        gallery.innerHTML=loading
        await fetch(`https://api.unsplash.com/photos?per_page=${inputVal}&page=${
            Math.round(Math.random()*1000)
        }&client_id=HXL67cDe9rex6XAmNMVfbrT_6SWkhofD0PLZN2jLq34`)
        .then((res)=>res.json().then((data)=>{
            if(data){
                data.forEach((pic) => {
                    imgs+=`<img src=${pic.urls.small} alt"image"/>`
                    gallery.style.display="block"
                    gallery.innerHTML=imgs
                    btn.style.display="block"
                    errorMessage.style.display="none" 
                });
            }
    
        }))
       
        
    } catch (error) {
        errorMessage.style.display="block"
        errorMessage.innerHTML="An error happened,try again"
        btn.style.display="block"
        gallery.style.display="none"
    }
  
    

}