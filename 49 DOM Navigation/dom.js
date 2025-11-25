let parent = document.getElementById("parent");
let item2 = document.getElementById("item2");
let output = document.getElementById("output");

// ========== 1. Show parent of Item 2 ===========
function showParent() {
    output.textContent = "Parent of Item 2 is: " + item2.parentElement.tagName;
}

// ========== 2. Show children of Parent ========== 
function showChildren() {
    let children = parent.children;
    let names = [];
    for (let child of children) {
        names.push(child.textContent);
    }
    output.textContent = "Children of Parent are: " + names.join(", ");
}

// ========== 3. Show siblings of Item 2 ========== 
