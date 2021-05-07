//Forms 

//
async function windowActions() {
  console.log('loaded on Window');

  const form = document.querySelector('#recordSubmit');
  const name = document.querySelector('#country_name'); 


  form.addEventListener('submit', async (event) =>{
    event.preventDefault();
    console.info('submitted form', event.target);

    //const formdata = getdata

    const post = await fetch('/api/countries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ country_name: name.value })
    });
  });
}

window.onload = windowActions;