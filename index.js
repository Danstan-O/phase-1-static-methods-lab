class Formatter {
  //add static methods here



static capitalize(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
  
  

}
static sanitize(alpha){
  return alpha.replace(/[^a-z0-9]\s-/gi, '' );

}
static titleize(words){
  return words.split( '')[0].toUpperCase( ).join( '');
}

}

const obj = new Formatter();
obj.speak(); 
const speak = obj.speak;
speak(); 

Formatter.capitalize() 
const capitalize = Formatter.capitalize;
capitalize();