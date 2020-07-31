const localMemory= (JSON.parse(localStorage.getItem('girrafs'))||[])

function createButton (event, values) {   
  event.preventDefault();   
  console.log(values, 'это валуе');
  localMemory.unshift(values)
  localStorage.setItem('girrafs', JSON.stringify(localMemory));
  console.log(localMemory)

}

export default createButton;