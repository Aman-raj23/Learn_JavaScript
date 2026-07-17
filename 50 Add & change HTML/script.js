let parent = document.getElementById("parent");
let item2 = document.getElementById("item2");
let output = document.getElementById("output");


// =========== 1. Show parent of Item 2 =========== 

function showParent() {
    output.textContent = "Parent of Item 2 is: " + item2.parentElement.tagName;
}


// =========== 2. Show children of Parent =========== 

function showChildren() {
    let children = parent.children;
    let names = [];
    for (let child of children) {
        names.push(child.textContent);
    }
    output.textContent = "Children of Parent are: " + names.join(", ");
}


// =========== 3. Show siblings of Item 2 =========== 

function showSiblings() {
    let prev = item2.previousElementSibling ? item2.previousElementSibling.textContent : "None";
    let next = item2.nextElementSibling ? item2.nextElementSibling.textContent : "None";
    output.textContent = `Previous: ${prev}, Next: ${next}`;
}


// ===========  4. Add a new child =========== 

function addChild() {
    let newItem = document.createElement("p"); 
    newItem.textContent = "New Item " + (parent.children.length + 1); 
    parent.appendChild(newItem); 
    output.textContent = "✅ New item added!";
}


// =========== 5. Change Item 2 =========== 

function changeItem() {
    item2.textContent = "⭐ Item 2 (Updated)"; // change text
    output.textContent = "Item 2 has been updated.";
}
