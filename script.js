"use strict"
console.log("whut whut!!!");

function Kitten(name, interests, sGoodWithKids, isGoodWithDogs, isGoodWithCat, imageUrl = "images/" + imgFileName ){
    this.name = name;
    // this.age = 0;
    this.interests = ["cuddling", "chasing string", "catnip"];
    this.isGoodWithKids = true;
    this.isGoodWithDogs = true;
    this.isGoodWithCats = true;
    this.imageUrl = "images/" + imgFileName;
    this.age = this.generateAge();
}

Kitten.prototype.render = function(){
    const containerElement = document.getElementById("kittenProfiles");
    const article= document.createElement("article");
    containerElement.appendChild(article);

    const h3 = document.createElement("h3");
    h3.textContent = this.name
    article.appendChild(h3);

    const p = document.createElement("p");
    p.textContent=`${this.name} is adorable and is ${this.age} old.`
    article.appendChild(p);

    const ul = document.createElement("ul");
    article.appendChild(ul);
    for(let i= 0; i < globalThis.interests.length; i++){
        const li = document.createElement("li");
        li.textContent + this.interests[1];
        ul.appendChild(li);
    }

    const table= document.createElement("table");
    article.appendChild(table);

    const headerRow= document.createElement("tr");
    table.appendChild(headerRow);

    const kidsHeaderCell = document.createElement("th");
    kidsHeaderCell.textContent= "kids";
    headerRow.appendChild(kidsHeaderCell);

}

const eric = new Kitten("eric", ["cuddling", "chasing string", "catnip"], true, false, true, "eric.jpg");

const anna = new Kitten("anna")


Kitten.prototype.generateAge = function(){
    return randomAge(3, 11) + "months";
}

function randomAge(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}