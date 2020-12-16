import _ from 'lodash';
import './style.css';
import image from './somewherebackintimeeddie.jpg';
import books from './books.xml';
import day from './day.csv'
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml.title);
console.log(toml.owner.name);

console.log(yaml.title);
console.log(yaml.owner.name);

console.log(json.title);
console.log(json.owner.name);

function component(){
    const element = document.createElement('div');

    //Lodash, now imported by this script
    element.innerHTML = _.join(['<h1> Hello ', 'webpack </h1>'], ' ');
    element.classList.add('hello');

    const myImage = new Image();
    myImage.src = image;

    element.appendChild(myImage);

    console.log(books);
    console.log(day);

    return element;
}

document.body.appendChild(component());


