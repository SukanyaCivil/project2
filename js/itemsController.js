// Create a ItemsController class
class ItemsController {
    // Set up the items and currentId property in the contructor
    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
        
    }

    // Create the addItem method
    addItem(name, description,imageUrl) {
        const item = {
            // Increment the currentId property
            id: this.currentId++,
            name: name,
            description: description,
            imageUrl: imageUrl
        };

        // Push the item to the items property
        this.items.push(item);
        
        //"12345"  %^ - 2
        //Save items to local storage
        localStorage.setItem("items", JSON.stringify(this.items));
    }
     
    loadItemsFromLocalStorage() {
        const storageItems = localStorage.getItem("items")
        if (storageItems) {
            const items = JSON.parse(storageItems)
            for (var i = 0, size = items.length; i < size; i++) {
                const item = items[i];
                this.items.push(item);
            }
        }
    }
}

/* const controller = new ItemsController(); // Create an instance of ItemsController
controller.addItem("Item 1", "Description 1", "image1.jpg"); // Add a Item
controller.addItem("Item 2", "Description 2", "image2.jpg"); // Add another Item
controller.addItem("Item 3", "Description 3", "image3.jpg"); // Add a Item
controller.addItem("Item 4", "Description 4", "image4.jpg"); // Add another Item
console.log(controller.Items); // Output the Items array
*/