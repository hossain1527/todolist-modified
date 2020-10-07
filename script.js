
let btn = document.getElementById('btn');
let result = document.getElementById('output');
let inputF = document.getElementById('inputF');


btn.addEventListener('click', () =>{
  
  let cont = document.createElement('h2');
  cont.innerText = inputF.value;
  result.appendChild(cont);
  inputF.value = '';

  cont.addEventListener('click', () =>{
     cont.style.textDecoration = 'line-through';
  });

  cont.addEventListener('dblclick', () =>{
   result.removeChild(cont);
  });
  
 
});

