const localMemory= (JSON.parse(localStorage.getItem('girrafs'))||[])

function createButton (event, values, render, renderVolume, closed) {   
  event.preventDefault();   
  localMemory.unshift(values)
  localStorage.setItem('girrafs', JSON.stringify(localMemory));
  render(localMemory)
  renderVolume(localMemory.length)
  closed("main-card__create_disabled")  
  event.target.reset()

}

export default createButton;