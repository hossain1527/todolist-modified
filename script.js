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

const allTabs = document.querySelectorAll('[data-tab-target]');
const contents = document.querySelectorAll('[data-tab-content]');

allTabs.forEach(singleTab => {
  singleTab.addEventListener('click', () => {
    const target = document.querySelector(singleTab.dataset.tabTarget);
    contents.forEach(content => {
      content.classList.remove('active');
      
    });
    target.classList.add('active');
    
  });
});

function tick() {
  var chbx = document.getElementsByClassName('chbx');

   if(chbx[2].checked) {
    document.getElementById('crnt').style.textDecoration = 'line-through';
  
  } else{
     document.getElementById('crnt').style.textDecoration = 'none';
  }
}

function tick1() {
  
  var chbx1 = document.getElementsByClassName('chbx1');

  if(chbx1[0].checked) {
    document.getElementById('newSs').style.textDecoration = 'line-through';
    
  }else {
    document.getElementById('newSs').style.textDecoration = 'none';
  }

  if(chbx1[1].checked) {
    document.getElementById('newComp').style.textDecoration = 'line-through';
    
  }else {
    document.getElementById('newComp').style.textDecoration = 'none';
  }

  if(chbx1[2].checked) {
    document.getElementById('newCrnt').style.textDecoration = 'line-through';
    
  }else {
    document.getElementById('newCrnt').style.textDecoration = 'none';
  }
}



