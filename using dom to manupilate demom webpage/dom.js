let form=document.querySelector('#addForm')
let items=document.querySelector('#items')

//creating a form submit event

form.addEventListener('submit', additem);

//create additem function

function additem(e)
{
    e.preventDefault();

    // console.log('success')
    
    //to get input value
    //create new item taegeting input value element by its id
    let newItem=document.querySelector('#item').value;
    let input=document.querySelector('#for').value;


    // now we will create a new li and add it into our ul with input value 
    let newLi=document.createElement('li')
    newLi.className='list-group-item'
    console.log(newLi)
    //now we will addtextnode and set it to the value of our input 
    var value= document.createTextNode(newItem+' '+input)

    // to put it inside our listt
    newLi.appendChild(value)

    // to put our new list inside the ul with class of items.

    items.appendChild(newLi)

    //now creating a delete button through create element
    let deletebtn=document.createElement('button')

    //giving the class name to our deletebtn
    deletebtn.className='btn btn-danger btn-sm float-right delete'
    var deleteText=document.createTextNode('x')
    deletebtn.appendChild(deleteText)

    newLi.appendChild(deletebtn)

    var editbtn=document.createElement('button')
    editbtn.className='btn btn-danger btn-sm float-right delete'

    var editbtnTEXT= document.createTextNode('edit')
    editbtn.appendChild(editbtnTEXT)
    newLi.appendChild(editbtn)
    editbtn.style.backgroundColor='coral'
    editbtn.style.marginRight='10px'
    

}

items.addEventListener('click', removeitem)

//create a function to remove item

function removeitem(e)
{
    e.preventDefault();
    if(e.target.classList.contains('delete'))
    {
        //console.log(1)
        if(confirm('are you sure ?'))
        {
            var list=e.target.parentElement;
            items.removeChild(list)
            
        }
    }
}



//ADDIND EDIT BUTTON
var ul=document.querySelectorAll('li')
console.log(ul)





for(i=0;i<ul.length;i++)
{
    var editbtn=document.createElement('button')
    var editbtnTEXT=document.createTextNode('edit')
    editbtn.appendChild(editbtnTEXT)
    // console.log(editbtn)

    console.log(ul[i].appendChild(editbtn))
    // editbtn.style.padding='3px 30px'

    editbtn.className='btn btn-danger btn-sm float-right delete'
    editbtn.style.backgroundColor='coral'
    editbtn.style.marginRight='10px'
}


//creating filter 

let filter=document.querySelector('#filter')
console.log(filter)

filter.addEventListener('keyup', filterItems)

function filterItems(e)
{
    //convert text we type to lower case
    var text=e.target.value.toLowerCase()
    // console.log(text)
    let collectionli=items.getElementsByTagName('li')
    // console.log(collectionli)
    //convert the collection into an array
    var formLI=Array.from(collectionli);
    formLI.forEach(function(l)
    {
        var itemName=l.firstChild.textContent
        var description=l.childNodes[1].textContent
        //it will give us the list text name ex: item 1
        console.log(itemName)
        if(itemName.toLocaleLowerCase().indexOf(text)!=-1 || description.toLocaleLowerCase().indexOf(text)!=-1)
        //check if li text changed to lower case==our text or nor
        {
            l.style.display='block'
        }
        else{
            l.style.display='none'
        }
    })
}









