/*const apiKey = "https://api.api-ninjas.com/v1/quotes?category=happiness";
const getQuotes=async()=>{

    
try{
    let data= await fetch(apiKey);
    let realdata= await data.json();
    console.log(realdata);

}catch(error){

}
};
getQuotes();*/
const apiUrl = "GET https://api.quotable.io/random";
const apiKey = "YOUR_API_KEY"; // Replace with your actual API key

async function fetchQuote() {
  try {
    const response = await fetch(apiUrl, {
      headers: {
        'X-Api-Key': apiKey,
      }
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Quote:', data);
    } else {
      console.error('Failed to fetch quote:', response.status);
    }
  } catch (error) {
    console.error('Error fetching quote:', error);
  }
}

fetchQuote();





