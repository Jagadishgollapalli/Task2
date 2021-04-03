var request=new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload=function()
{
    var population = JSON.parse(this.response);
    var total=population.reduce((acc,pop)=>{return acc+ pop.population},0);
console.log(total);
}
