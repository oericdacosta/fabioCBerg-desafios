const domainName = url =>{
    return (url.split("//").length > 1) ? 
    url.split("//")[1].split(".")[url.split("//")[1].split(".").length - 2] :
    url.split(".")[url.split(".") - 2];
}
console.log(domainName("https://www.udemy.com/home/my-courses/learning/"));