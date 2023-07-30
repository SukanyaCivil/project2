// Initialize a new TaskManager with currentId set to 0
const itemsController = new ItemsController(0);


function addItemCard(item){
    const itemHTML = '<div class="col-4 my-2 text-center">\n' +
        '     <div class="card" style="width: 16rem;">\n' +
        '    <img src="' +item.imageUrl + '" alt="item image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '</div>\n'+
        '</div>\n'+
        '<hr/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
    //i++; // i = i+1;
    //i+=2; // i = i+2;
    //str += 8; //str = str + 5;
    //innerHTML = innerHTML + itemHTML;
}

/* function loadStorageSampleData(){
    if(!localStorage.getItem("items")){
        const sampleItems = [{'name':'Kerala Sarees',
        'img':'https://ladyindia.com/cdn/shop/products/new-kerala-saree-designs_1024x1024.jpg?v=1571439251',
        'description':'Buy Onam Sarees & Kerala Wedding Sarees Designs online at Best Prices in India'},
        {'name':'Traditional Sarees',
        'img':'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/22536178/2023/3/28/060630ba-0cb0-46f5-ab19-59a0d7502af41679989291511KALINIMaroonBlueWovenDesignZariPureSilkKanjeevaramSaree1.jpg',
        'description':'Buy Traditional and Fashionable Saree Online'},
        {'name': 'HalfSaree Model',
         'img': 'https://i0.wp.com/anayadesignerstudio.com/wp-content/uploads/2022/03/Pink-Kanjivaram-Silk-Half-Saree-For-Wedding-2.webp',
         'description': 'Latest Half Saree Design With Price For Bridal Wedding 2022'},
        {'name': 'Traditional Half Saree Designs',
         'img': 'https://keepmestylish.com/wp/wp-content/uploads/2020/09/half-saree-images-latest-2020-feature.jpg',
          'description': 'Traditional Half Saree Designs That Will Blow Your Mind!! • Keep Me Stylish'}];
        
    }
}*/

function loadCardsListFromItemsController(){
    console.log('start');
    for(var i = 0, size = itemsController.items.length; i < size ; i++){
        const item = itemsController.items[i];
        console.log(item)
        // localStorage.setItem("item", JSON.stringify(sampleItems));
        console.log(item)
         addItemCard(item);
    }
}

//loadStorageSampleData();
itemsController.loadItemsFromLocalStorage();
loadCardsListFromItemsController();