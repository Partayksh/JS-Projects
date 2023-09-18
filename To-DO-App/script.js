document.addEventListener('DOMContentLoaded', function () {
    let add = document.querySelector('.add');
    let input = document.querySelector('#inputbox');
    let ul = document.querySelector('#list');

    add.addEventListener('click', () => {
        let string = input.value.trim(); // Get the value of the input field and trim whitespace
        if (string !== "") {

            addlist(string);
            input.value = ""; // Clear the input field
        }
        else {
            alert('Write something')
        }
    });

    function addlist(string) {
        let li = document.createElement('li');
        let span = document.createElement('span');
        li.appendChild(document.createTextNode(string));
        ul.appendChild(li);
        // li.innerHTML=string
        // ul.appendChild(li);
        li.addEventListener('click', () => {
            li.style.backgroundColor = 'green';
        })
        span.innerHTML = '\u00d7'
        li.appendChild(span);
        span.addEventListener('click', function (span) {
            span.li.remove();
        })

    }

    ul.addEventListener('click',(e)=>{
        if(e.target.tagName==='LI'){
            e.target.ul.toggle('checked');
        }
        else if(e.target.tagName==='SPAN'){
            e.target.parentElement.remove();
        }
    })
});

