// Since the execution of this `app.js` script will be finished by the time the following `fetch()` call returns data, 
//need to put the loop inside the second .then().  
// fetch('http://localhost:3000/api/destinations') --use for testing--


fetch('https://assignmentdh.herokuapp.com/api/destinations')
  .then(function(response){
    return response.json();
  })
  .then(function(destinations){

  const imgList = destinations;

  // Variable where img tags are stored //
  let imgTemplate = ''; 

  // Flex container for images //
  const gallery = document.querySelector('.gallery'); 

  // Loop through items using forEach //
  imgList.forEach(function(item){
    imgTemplate += 
      `<figure>
        <a href="${item.id}">
          <img src="https://picsum.photos/id/${item.id}/250" alt="${item.description}"> ${item.title}  
        </a>
      </figure>`
  });
    // Add HTML img string to the gallery container //
    gallery.innerHTML = imgTemplate;
});

























