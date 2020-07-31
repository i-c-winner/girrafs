function createButton (event, values) {   
  event.preventDefault();   
  console.log(values, 'это валуе');
  localStorage.setItem('girrafs',JSON.stringify( values));

}

export default createButton;