/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"

function domainName(url){
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};

function domainName(url){
  return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
}

*/
function domainName(url) {
    var arrAns = url.split('.');
    if (arrAns[0].includes('www')) return arrAns[1];
    if (!arrAns[0].includes('http')) return arrAns[0];
    return arrAns[0].slice(arrAns[0].indexOf('//') + 2, arrAns[0].length);
}


