import '../assets/css/style.css';

const app = document.getElementById('app');
// app.innerHTML = `<h1>JavaScript DOM</h1>`;




// DOM NODES EXPLAINED

// <html>
// console.log(document.documentElement);
// console.dir(document.documentElement);

// // <head>
// console.dir(document.head);

// // <body>
// console.dir(document.body);

// // retrieve the constructor name
// console.log(document.body.constructor.name);

// // looking at the prototype chain
// console.log(document.body instanceof HTMLBodyElement);
// console.log(document.body instanceof HTMLElement);
// console.log(document.body instanceof Element);
// console.log(document.body instanceof Node);
// console.log(document.body instanceof EventTarget);

// /*
//   - NodeTypes
//   1: Element
//   2: Attribute
//   3: Text
//   4: CDATASection
//   5: EntityReference
//   6: Entity
//   7: ProcessingInstruction
//   8: Comment
//   9: Document
//   10: DocumentType
//   11: DocumentFragment
//   12: Notation
// */

// console.log(document.body.nodeType);
// console.log(document.nodeType);

// // nodeName for any Node types
// console.log(document.nodeName);
// // tagName for any Element types
// console.log(document.tagName);






// CREATING DOM NODES

// const app = document.getElementById('app');

// const div = document.createElement('div');
// const text = document.createTextNode('DOM!');
// // const comment = document.createComment('No comment');

// // div.append(comment);
// div.append(text);
// app.append(div);

// console.log(app, div);






// CHANGING CONTENT DOM ELEMENT

// const h1 = document.createElement('h1');
// const h2 = document.createElement('h2')
// h2.innerText += 'BETTY ALAGWU'
// h1.innerText = 'Ultimate Courses';
// // if you want to append text inside a text you put the plus sign (+=) without the (+=) sign, the innerText overides the initial innerText
// h1.innerText += ' Learning JS DOM';
// // h1.style.display = 'none';
// app.append(h1);
// h1.append(h2)

// console.log(app.innerHTML);
// console.log(app.innerText); // Elements
// console.log(app.textContent); // Nodes






// INNERHTML VERSUS CREATING ELEMENT 

// Using document.createElement()
// function createInputDOM({ label, type = 'text' }) {
//     const labelEl = document.createElement('label');
//     const inputEl = document.createElement('input');
  
//     inputEl.type = type;
//     labelEl.innerText = label;
//     labelEl.append(inputEl);
  
//     return labelEl;
//   }
  
//   const inputFromDOM = createInputDOM({ label: 'Name' });
//   console.log(inputFromDOM.querySelector('input'));
//   app.append(inputFromDOM);
  
//   // Using string templates
//   function createInputTemplate({ label, type = 'email' }) {
//     return `
//     <label>
//       ${label}
//       <input type="${type}">
//     </label>
//     `;
//   }
  
//   const inputFromTemplate = createInputTemplate({
//     label: 'Email',
//     type: 'email',
//   });
//   app.innerHTML += inputFromTemplate;





// USING DOCUMENT-FRAGMENTS

// const data = ['Earth', 'Fire', 'Water', 'Air'];

// const fragment = document.createDocumentFragment();

// data.forEach(name => {
//   const li = document.createElement('li');
//   li.innerText = name;
//   fragment.append(li);
// });

// app.append(fragment);






// INSERTING DOM ELEMENTS

// const div = document.createElement('div');
// const span = document.createElement('span');
// const p = document.createElement('p');
// const i = document.createElement('i');
// const b = document.createElement('b');

// div.append(span);
// div.prepend(p);
// // p.before(i);
// p.after(i);

// Before: old way using insertBefore
// i.parentNode.insertBefore(b, i);

// After: old way using insertBefore + nextSibling
// i.parentNode.insertBefore(b, i.nextSibling);

// console.log(div);






// INSERTING DOM AS A STRING TEMPLATES

// const app = document.getElementById('app');
// app.innerHTML = `
//   <h1>JavaScript DOM</h1>
//   <ul>
//     <li>1</li>
//   </ul>
// `;

// const ul = app.querySelector('ul');

// ul.insertAdjacentHTML('beforebegin', '<p>Before</p>');
// ul.insertAdjacentHTML('afterbegin', '<li>First</li>');
// ul.insertAdjacentHTML('beforeend', '<li>Last</li>');
// ul.insertAdjacentHTML('afterend', '<p>After</p>');





// CLONING DOM ELEMENTS

// const div = document.createElement('div');
// const span = document.createElement('span');

// span.innerText = 'Can you clone me?';
// div.append(span);

// app.append(div);

// // cloneNode(false) only clones the top element
// const clone = div.cloneNode();
// console.log(clone);

// // cloneNode(true) clones all elements and subtrees
// const newClone = div.cloneNode(true);
// console.log(newClone);

// app.append(newClone);






// REMOVING DOM ELEMENTS

// const div = document.createElement('div');
// div.innerText = 'I am a message!';

// app.append(div);

// setTimeout(() => div.remove(), 2500);

// old way
// setTimeout(() => div.parentNode.removeChild(div), 2500);





// QUERYING DOM NODES (HTML-COLLECTIONS)

// const data = ['Earth', 'Fire', 'Water'];
// const fragment = document.createDocumentFragment();

// data.forEach(item => {
//   const li = document.createElement('li');
//   li.className = 'list-item';
//   li.innerText = item;
//   fragment.append(li);
// });

// // getElementById: HTMLElement
// const ulFromId = document.getElementById('list');
// console.log(ulFromId);
// ulFromId.append(fragment);

// // getElementsByClassName: HTMLCollection
// const listItemsFromClassName = ulFromId.getElementsByClassName('list-item');
// console.log(listItemsFromClassName);

// // getElementsByTagName
// const listItemsFromTagName = ulFromId.getElementsByTagName('li');
// console.log(listItemsFromTagName);

// // Demonstrate live collection
// const newListItem = document.createElement('li');
// newListItem.className = 'list-item';
// newListItem.innerText = 'Air';
// ulFromId.append(newListItem);

// // No need to query again!
// console.log(listItemsFromClassName);
// console.log(listItemsFromTagName);






// QUERYING DOM NODES (NODELISTS)

// const data = ['Earth', 'Fire', 'Water'];
// const fragment = document.createDocumentFragment();

// data.forEach(item => {
//   const li = document.createElement('li');
//   li.className = 'list-item';
//   li.innerText = item;
//   fragment.append(li);
// });

// // ul { background: red; }
// // #list { background: red; }
// const ulFromQuerySelector = document.querySelector('#list');
// console.log(ulFromQuerySelector);

// ulFromQuerySelector.append(fragment);

// const listItemsFromQSA = ulFromQuerySelector.querySelectorAll('.list-item');
// console.log(listItemsFromQSA);

// const newListItem = document.createElement('li');
// newListItem.className = 'list-item';
// newListItem.innerText = 'Air';
// ulFromQuerySelector.append(newListItem);

// console.log(
//   listItemsFromQSA,
//   ulFromQuerySelector.querySelectorAll('.list-item')
// );







// LOOPING OVER DOM ELEMENTS

// const app = document.getElementById('app');
// app.innerHTML = `
//   <h1>JavaScript DOM</h1>
//   <ul id="list">
//     <li>Earth</li>
//     <li>Fire</li>
//     <li>Water</li>
//     <li>Air</li>
//   </ul>
// `;

// const listItems = document.querySelectorAll('#list li');
// console.log(listItems);

// for (let i = 0; i < listItems.length; i++) {
//   console.log(listItems[i]);
// }

// for (const item of listItems) {
//   console.log(item);
// }

// // Stackblitz doesn't like this example
// // so let's just comment it out
// // The example is fully valid, don't panic ;)
// // [...listItems].forEach(item => console.log(item));

// Array.from(listItems).forEach(item => console.log(item));






// FINDING CHILD ELEMENTS

// app.innerHTML = `
//   <h1>JavaScript DOM</h1>
//   <ul id="list">
//     <li>Earth</li>
//     <li>Fire</li>
//     <li>Water</li>
//     <li>Air</li>
//   </ul>
// `;

// const list = document.querySelector('#list');
// const selectedIndex = 2;

// // querySelectorAll: NodeList
// const queryChildren = list.querySelectorAll('li');
// console.log(queryChildren[selectedIndex], queryChildren.length);

// // .children: HTMLCollection
// console.log(list.children[selectedIndex], list.children.length);

// // .childNodes: NodeList
// console.log(list.childNodes[selectedIndex], list.childNodes.length);

// // first/last
// console.log(list.firstChild, list.firstElementChild);
// console.log(list.lastChild, list.lastElementChild);






// FINDING PARENT ELEMENTS
// app.innerHTML = `
//   <h1>JavaScript DOM</h1>
//   <div class="item"></div>
// `;

// const item = document.querySelector('.item');

// console.log(item.parentNode);
// console.log(item.parentElement.parentElement);

// console.log(item.closest('#app'));
// console.log(item.closest('body'));






// FINDING SIBLING ELEMENTS
// app.innerHTML = `
//   <h1>JavaScript DOM</h1>
//   <ul id="list">
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
//     <li>4</li>
//   </ul>
// `;

// const listItem = document.querySelector('#list li');

// // Any DOM Nodes
// console.log(listItem.nextSibling);
// console.log(listItem.previousSibling);

// // Any Element Nodes
// console.log(listItem.nextElementSibling);
// console.log(listItem.previousElementSibling);





// ELEMENTS PROPERTIES VERSUS HTML ATTRIBUTES

// app.innerHTML = `
//   <h1>JavaScript DOM</h1>
//   <input type="text">
// `;

// const input = document.querySelector('input');
// input.value = 2;
// console.log(parseInt(input.value, 10));
// console.dir(input);





// SETTING AND GETTING HTML ATTRIBUTES

// app.innerHTML = `
//   <h1>JavaScript DOM</h1>
//   <button type="button">
//     Close Me
//   </button>
// `;

// const button = document.querySelector('button');

// // SET
// button.setAttribute('aria-label', 'Close this Modal');
// // GET
// const value = button.getAttribute('aria-label');
// console.log(value);

// // .attributes
// console.log(button.attributes['aria-label']);






// SETTING AND GETTING INLINE STYLES

// app.innerHTML = `
//   <h1>JavaScript DOM</h1>
//   <button type="button">
//     Click Me!
//   </button>
// `;

// // <button style="padding: 25px; margin: 10px 0;">
// const button = document.querySelector('button');

// // cssText
// button.style.cssText = 'padding: 25px; margin: 10px 0; font-size: 20px;';

// // direct property access
// button.style.fontSize = '22px';
// button.style.marginTop = '15px';

// console.log(button.style.fontSize);






// SETTING AND GETTING CLASSES
// app.innerHTML = `
//   <h1>JavaScript DOM</h1>
//   <button type="button" class="one two">
//     Click Me!
//   </button>
// `;

// const button = document.querySelector('button');

// // Old way: Set
// button.className += ' three';

// // Old way: Get
// console.log(button.className.split(' '));

// // New way: ClassList
// // Add
// button.classList.add('four');

// // Remove
// button.classList.remove('one');

// // Toggle
// button.classList.toggle('five');
// setTimeout(() => button.classList.toggle('five'), 2500);

// // Replace
// button.classList.replace('two', 'six');






// ADDING EVENT LISTENERS AND EVENT OBJECTS

// const app = document.getElementById('app');
// app.innerHTML = `
//   <h1>JavaScript DOM</h1>
//   <button type="button">
//     Click Me
//   </button>
// `;

// const button = document.querySelector('button');

// // Avoid, doesn't allow multiple events
// // button.onclick = function() {
// //   console.log('1');
// // };

// function handleClick(event) {
//   console.log(this, event.target);
// }

// button.addEventListener('click', handleClick);

// // arrow functions
// button.addEventListener('dblclick', event => {
//   console.log(this, event.target, 'Double-clicked!');
// });






// REMOVING EVENT LISTENERS

// app.innerHTML = `
//   <h1>JavaScript DOM</h1>
//   <button type="button">
//     Click Me
//   </button>
// `;

// const button = document.querySelector('button');

// function handleClickOnce(event) {
//   console.log(event.target);
//   button.removeEventListener('click', handleClickOnce);
// }

// button.addEventListener('click', handleClickOnce);

// button.addEventListener(
//   'dblclick',
//   () => {
//     console.log('Double-click!');
//   },
//   { once: true }
// );






// EVENT BUBBLING, CAPTURING AND PROPAGATION

// app.innerHTML = `
//   <h1>JavaScript DOM</h1>
//   <div class="one">
//     <div class="two">
//       <button type="button" class="three">
//         Click Me
//       </button>
//     </div>
//   </div>
// `;

// const one = document.querySelector('.one');
// const two = document.querySelector('.two');
// const three = document.querySelector('.three');

// function handleClick(event) {
//   event.stopPropagation();
//   // event.stopImmediatePropagation();
//   console.log(event.target);
// }

// one.addEventListener('click', handleClick);
// two.addEventListener('click', handleClick);
// three.addEventListener('click', handleClick);

// three.addEventListener('click', event => console.log(event), { capture: true });






// PREVENTING DEFAULT EVENT ACTIONS

// app.innerHTML = `
//   <h1>JavaScript DOM</h1>
//   <form>
//     <label>
//       Sign-up Email
//       <input type="email">
//     </label>
//     <label>
//       I agree to the terms
//       <input type="checkbox">
//     </label>
//   </form>
// `;

// const form = document.querySelector('form');
// const email = form.querySelector('input[type="email"]');
// const checkbox = form.querySelector('input[type="checkbox"]');

// function handleSubmit(event) {
//   if (!checkbox.checked) {
//     event.preventDefault();
//     console.log('I am not submitting...');
//     console.log(event.defaultPrevented);
//     return;
//   }
//   console.log('Submitted', email.value);
// }

// form.addEventListener('submit', handleSubmit);

// example to demonstrate no checking
// checkbox.addEventListener('click', event => {
//   event.preventDefault();
// });






// EVENT DELEGATION AND DYNAMIC EVENTS

// app.innerHTML = `
//   <h1>JavaScript DOM</h1>
//   <button type="button">
//     Add Item
//   </button>
//   <ul id="list">
//     <li>Item 1</li>
//     <li>Item 2</li>
//     <li>Item 3</li>
//     <li>Item 4</li>
//   </ul>
// `;

// const button = document.querySelector('button');
// const list = document.querySelector('#list');

// // const items = [...list.querySelectorAll('li')];
// // items.forEach(item => {
// //   item.addEventListener('click', handleClick);
// // });

// function handleClick(event) {
//   if (event.target.nodeName.toLowerCase() !== 'li') {
//     return;
//   }
//   console.log(event.target.innerText);
// }

// list.addEventListener('click', handleClick);

// button.addEventListener('click', () => {
//   const items = list.querySelectorAll('li');
//   const li = document.createElement('li');
//   li.innerText = `Item ${items.length + 1}`;
//   list.append(li);
// });








// KEYBOARD EVENTS
// app.innerHTML = `
//   <h1>JavaScript DOM</h1>
//   <div style="height: 1000px;"></div>
// `;

// document.addEventListener('keydown', event => {
//   // console.log(event.key, event.code);
//   switch (event.key) {
//     case 'ArrowUp': {
//       console.log('Up!');
//       event.preventDefault();
//       break;
//     }
//     case 'ArrowDown': {
//       console.log('Down!');
//       event.preventDefault();
//       break;
//     }
//   }
// });

// document.addEventListener('keyup', event => console.log(event.key));
// document.addEventListener('keydown', event => console.log(event.key));






// ACCESSING FORM AND ELEMENTS

// app.innerHTML = `
//   <h1>JavaScript DOM</h1>
//   <form name="order">
//     <label>
//       Your name
//       <input type="text" name="fullname">
//     </label>
//   </form>
// `;

// const form = document.forms.order;

// const fullname = form.elements.fullname;

// function handleInput(event) {
//   // access the value
//   console.log(event.target.value);

//   // access the form
//   console.log(event.target.form);
// }

// fullname.addEventListener('input', handleInput);








// FORM SUBMIT EVENT AND FOR-DATA

// app.innerHTML = `
//   <h1>JavaScript DOM</h1>
//   <form name="order">
//     <label>
//       Your name
//       <input type="text" name="fullname">
//     </label>
//     <br>
//     <label>
//       your email
//       <input type="email" name="email">
//     </label>
//     <br>
//     <label>
//       Which pizza would you like?
//       <select name="pizza">
//         <option value="pepperoni">Pepperoni</option>
//         <option value="meaty">Meaty</option>
//         <option value="cheesey">Cheesey</option>
//       </select>
//     </label>
//     <br>
//     <br>
//     <button type="submit">
//       Submit
//     </button>
//   </form>
// `;

// const form = document.forms.order;

// function handleSubmit(event) {
//   event.preventDefault();
//   console.log(new FormData(event.target));
// }

// function handleFormData(event) {
//   console.log(Array.from(event.formData));
//   console.log(Array.from(event.formData.values()));
//   const entries = event.formData.entries();
//   for (const entry of entries) {
//     console.log(entry);
//   }
// }

// form.addEventListener('submit', handleSubmit);
// form.addEventListener('formdata', handleFormData);






// TRANSFORMING FORM-DATA FOR THE SERVER
// app.innerHTML = `
//   <h1>JavaScript DOM</h1>
//   <form name="order">
//     <label>
//       Your name
//       <input type="text" name="fullname">
//     </label>
//     <label>
//       Which pizza would you like?
//       <select name="pizza">
//         <option value="pepperoni">Pepperoni</option>
//         <option value="meaty">Meaty</option>
//         <option value="cheesey">Cheesey</option>
//       </select>
//     </label>
//     <div>
//       What size?
//       <label>
//         Small
//         <input type="radio" name="size" value="small" checked>
//       </label>
//       <label>
//         Medium
//         <input type="radio" name="size" value="medium">
//       </label>
//       <label>
//         Large
//         <input type="radio" name="size" value="large">
//       </label>
//     </div>
//     <label>
//       Quantity
//       <input type="number" name="quantity" value="1">
//     </label>
//     <button type="submit">
//       Submit
//     </button>
//   </form>
// `;

// const form = document.forms.order;

// function handleSubmit(event) {
//   event.preventDefault();
//   const formData = new FormData(event.target);

//   // query string
//   // Content-Type = application/x-www-form-urlencoded
//   // fullname=Todd%20Motto&pizza=pepperoni&size=large&quantity=2
//   // const data = [...formData.entries()];
//   // const asString = data
//   //   .map(x => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
//   //   .join('&');
//   const asString = new URLSearchParams(formData).toString();
//   console.log(asString);

//   // json
//   const asJSON = JSON.stringify(Object.fromEntries(formData));
//   console.log(asJSON);
// }

// form.addEventListener('submit', handleSubmit);







// POSTING FORM-DATA VIA FETCH-API
// app.innerHTML = `
//   <h1>JavaScript DOM</h1>
//   <form name="order">
//     <label>
//       Your name
//       <input type="text" name="fullname">
//     </label>
//     <label>
//       Which pizza would you like?
//       <select name="pizza">
//         <option value="pepperoni">Pepperoni</option>
//         <option value="meaty">Meaty</option>
//         <option value="cheesey">Cheesey</option>
//       </select>
//     </label>
//     <div>
//       What size?
//       <label>
//         Small
//         <input type="radio" name="size" value="small" checked>
//       </label>
//       <label>
//         Medium
//         <input type="radio" name="size" value="medium">
//       </label>
//       <label>
//         Large
//         <input type="radio" name="size" value="large">
//       </label>
//     </div>
//     <label>
//       Quantity
//       <input type="number" name="quantity" value="1">
//     </label>
//     <button type="submit">
//       Submit
//     </button>
//   </form>
// `;

// const form = document.forms.order;

// function handleSubmit(event) {
//   event.preventDefault();
//   const formData = new FormData(event.target);

//   // query string
//   const asString = new URLSearchParams(formData).toString();
//   console.log(asString);

//   // json
//   const asJSON = JSON.stringify(Object.fromEntries(formData));
//   console.log(asJSON);

//   fetch('/fakeapi', {
//     method: 'post',
//     headers: {
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//       'Content-Type': 'application/json',
//     },
//     // body: asString,
//     body: asJSON,
//   });
// }

// form.addEventListener('submit', handleSubmit);






// HANDLING INPUT ELEMENTS
// app.innerHTML = `
//   <h1>JavaScript DOM</h1>
//   <form name="example">
//     <input type="text" name="myInput" value="Hello">
//   </form>
// `;

// const form = document.forms.example;
// const input = form.elements.myInput;

// // 1. Properties that are useful
// console.dir(input);
// // set
// input.value = 'Goodbye';
// // input.readOnly = true;
// // input.disabled = true;
// // get
// console.log(input.value);

// // 2. Events
// // other events: cut, copy and paste
// input.addEventListener('focus', () => console.log('Focus'));
// input.addEventListener('blur', () => console.log('Blur'));
// input.addEventListener('input', () => console.log('Input'));
// input.addEventListener('change', () => console.log('Change'));

// // 3. Methods
// // focus an input
// input.focus();
// setTimeout(() => input.blur(), 2500);







// HANDLING RADIO INPUT ELEMENTS

// app.innerHTML = `
//   <h1>JavaScript DOM</h1>
//   <form name="example">
//     <div class="container">
//       <label>
//         Blue
//         <input type="radio" name="color" value="blue">
//       </label>
//       <label>
//         Red
//         <input type="radio" name="color" value="red" checked>
//       </label>
//       <label>
//         Green
//         <input type="radio" name="color" value="green">
//       </label>
//     </div>
//   </form>
// `;

// const form = document.forms.example;
// const radios = Array.from(form.elements.color);

// // 1. Properties that are useful
// radios[2].checked = true;
// radios.forEach(radio => {
//   console.log(radio.value);
//   console.log(radio.checked);
// });

// // 2. Events
// const container = form.querySelector('.container');

// container.addEventListener('change', () => {
//   // const checked = radios.find(radio => radio.checked).value;
//   // console.log(checked);
//   console.log(form.elements.color.value);
// });

// // 3. Methods
// radios[2].select();







// HANDLING CHECKBOX INPUT ELEMENTS

// app.innerHTML = `
//    <h1>JavaScript DOM</h1>
//    <form name="example">
//      <div class="container">
//        <label>
//          Accept Marketing
//          <input type="checkbox" name="marketing">
//        </label>
       
       
//      </div>
//    </form>
//  `;

// const form = document.forms.example;
// const checkbox = form.elements.marketing
// console.dir(checkbox)
// // // set checkbox
// console.log(checkbox.checked)

// // events
// checkbox.addEventListener('change', () => {
//   console.log(checkbox.checked)
//   console.log(checkbox.value)
// })
// // methods
// checkbox.select()








// HANDLING SELECT ELEMENTS
app.innerHTML = `
<h1>
  <form name="example">
    <select name="drink">
      <option value=""> Select your Drink... </option>
      <option value="lemonade"> Lemonade </option>
      <option value="cola"> Cola </option>
      <option value="water"> Water </option>
    </select>
  </form>
</h1>`

const form = document.forms.example
const select = form.elements.drink

// 1. selected value
select.value = 'water'
console.log(select.value)

// 2. selected index
const id = 2
select.selectedIndex = id
console.log(select.selectedIndex)

// selected DOM Elements
console.log(select.options[select.selectedIndex])

// events
select.addEventListener('change', () => {
  console.log(select.value)
  console.log(select.selectedIndex)
  console.log(select.options[select.selectedIndex])
})

// Add new item
const option = document.createElement('option')
option.value = 'milk'
option.text = 'Milk'

// select.append(option)
select.add(option, 2)