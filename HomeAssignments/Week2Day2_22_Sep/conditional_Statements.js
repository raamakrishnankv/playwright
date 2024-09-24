

function launchBrowser(browser_Name)
{
     if (browser_Name.startsWith("chrome"))
     {
        console.log('the browser is chrome');
     } else if (browser_Name.startsWith("edge"))
        {
           console.log('the browser is edge');
        } else if (browser_Name.startsWith("safari"))
            {
               console.log('the browser is safari');
            } else if (browser_Name.startsWith("opera"))
                {
                   console.log('the browser is opera');
                } else if (browser_Name.startsWith("edge"))
                    {
                       console.log('the browser is edge');
                    } else
                    {console.log('Not a valid browser');}
}

function runTests(testType)
{
    switch (testType)
    {
        case ('smoke'):
            {console.log('The Type is Smoke');
              break;  
            }
        case 'sanity':
             {console.log('The Type is sanity');
            break;  
          }    
        case 'regression':
        {console.log('The Type is regression');
            break; } 
        default:
            {console.log('None of the Above');}


    }
}


launchBrowser("edge")

runTests("sanity")


