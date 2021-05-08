//Forms 

//Post form for Countries
async function windowActions() {
  console.log('loaded on Window');

  const form = document.querySelector('#recordSubmit');
  const countryName = document.querySelector('#country_name'); 
  const diseaseName = document.querySelector('#disease_name'); 
  const outbreakName = document.querySelector('#total_hospitalizations');
  const treatmentsName = document.querySelector('#total_vaccinations');
  const reportssName = document.querySelector('#report_date');


  form.addEventListener('submit', async (event) =>{
    event.preventDefault();
    console.info('submitted form', event.target);

    //const formdata = getdata
    
    //countries form
    const countryPost = await fetch('/api/countries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ country_name: countryName.value })
    });
    //diseases form
    const diseasePost = await fetch('/api/diseases', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ disease_name: diseaseName.value })
    });
    
    //outbreaks form
    const outbreakPost = await fetch('/api/outbreaks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ total_hospitalizations: outbreakName.value })
    });

    //outbreaks form
    const reportPost = await fetch('/api/reports', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ report_date: reportssName.value })
    });    
 
    //treatments form
    const treatmentsPost = await fetch('/api/treatments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ total_vaccinations: treatmentsName.value })
    });    
  });
}
window.onload = windowActions;