console.log('For testing');

const browserVersion = `Chrome`;
console.log(`value from const is`+browserVersion); // Refers to the constant

function getBrowserVersion(browserName) {

      // usage of LET  
    //if (browserName == "Chrome") 
    if (browserName.startsWith("Chrome"))
    //
    {
        let bname 
        
        const browserVersion = `edge`;
 
           bname = browserName
           console.log("Value of const variable is "+browserVersion);
           console.log("INSIDE IF, " + bname);
           

    } else
        {console.log('Do Nothing');}
      
//console.log("OUTSIDE IF, " + bname);
// if i use then it will report error as 
// its a let -- let have the scope inside the block
}
getBrowserVersion("Chrome");  // Call function

// -------------------

function getBrowserVersion1(browserName) {

if (browserName == "mozilla")
    {
        var bname // outside the code block
        
        const browserVersion = `edge`;
 
           bname = browserName
           console.log("Value of const variable is "+browserVersion);
           console.log("INSIDE IF, " + bname);
           

    } else
        {console.log('Do Nothing');}
      
console.log("OUTSIDE IF, " + bname); 
}
getBrowserVersion1("mozilla");  // Call function




