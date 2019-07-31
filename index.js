// JavaScript code 

function fetchCountry() { 
let country,str='';

	let input = document.getElementById('searchbar').value 
	input=input.toLowerCase(); 
	let x = document.getElementsByClassName('animals'); 
	fetch('https://restcountries.eu/rest/v2/name/'+input)
        .then(response => response.json())
        .then(data => {
	        document.getElementById("row").innerHTML='';
	        country='';
            country=data;
            country.forEach((slide)=> {
			var out=document.getElementById("row");
			var output=document.createElement("div");
			output.setAttribute("id","column");
			var ele=document.createElement("div");
			ele.setAttribute("id","card");
			var ele5=document.createElement("a");
			ele5.setAttribute("href","details.html")
			ele5.addEventListener("click",slide);
			var ele2= document.createElement("div");
			ele2.setAttribute("id","flag-container");
			var ele3=document.createElement("img");
			ele3.setAttribute("src",slide.flag);
			ele3.setAttribute("id",slide.alpha3Code);
			var ele4=document.createElement("p");
			ele4.innerHTML=slide.name;
			ele5.appendChild(ele3);
			ele5.appendChild(ele4);
			ele2.appendChild(ele5);
			ele.appendChild(ele2);
			output.appendChild(ele);
			console.log(ele5);
			out.appendChild(output);;
		}); 

	})
	.catch(error => console.error(error))
 
} 
document.getElementById('lblName').innerHTML = 'Hi, I am Arun Banik';