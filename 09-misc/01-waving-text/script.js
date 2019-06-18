/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    //found on the web, should be useful but doesn't work

    /*function createCSSSelector (selector, style) 
    {
        if (!document.styleSheets) return;
        if (document.getElementsByTagName('head').length == 0) return;
      
        let styleSheet,mediaType;
      
        if (document.styleSheets.length > 0) 
        {
            for (let i = 0, l = document.styleSheets.length; i < l; i++) 
            {
                if (document.styleSheets[i].disabled) 
                continue;
                let media = document.styleSheets[i].media;
                mediaType = typeof media;
        
                if (mediaType === 'string') 
                {
                    if (media === '' || (media.indexOf('screen') !== -1)) {
                        styleSheet = document.styleSheets[i];
                    }
                }
                else if (mediaType=='object') 
                {
                    if (media.mediaText === '' || (media.mediaText.indexOf('screen') !== -1)) {
                        styleSheet = document.styleSheets[i];
                    }
                }
        
                if (typeof styleSheet !== 'undefined') 
                break;
            }
        }
      
        if (typeof styleSheet === 'undefined') 
        {
            let styleSheetElement = document.createElement('style');
            styleSheetElement.type = 'text/css';
            document.getElementsByTagName('head')[0].appendChild(styleSheetElement);
        
            for (i = 0; i < document.styleSheets.length; i++) 
            {
                if (document.styleSheets[i].disabled) 
                {
                    continue;
                }
                styleSheet = document.styleSheets[i];
            }
        
            mediaType = typeof styleSheet.media;
        }
      
        if (mediaType === 'string') 
        {
            for (let i = 0, l = styleSheet.rules.length; i < l; i++) {
                if(styleSheet.rules[i].selectorText && styleSheet.rules[i].selectorText.toLowerCase()==selector.toLowerCase()) 
                {
                    styleSheet.rules[i].style.cssText = style;
                    return;
                }
            }
          styleSheet.addRule(selector,style);
        }
        else if (mediaType === 'object') 
        {
          let styleSheetLength = (styleSheet.cssRules) ? styleSheet.cssRules.length : 0;
            for (let i = 0; i < styleSheetLength; i++) 
            {
                if (styleSheet.cssRules[i].selectorText && styleSheet.cssRules[i].selectorText.toLowerCase() == selector.toLowerCase()) {
                    styleSheet.cssRules[i].style.cssText = style;
                    return;
                }
            }
            styleSheet.insertRule(selector + '{' + style + '}', styleSheetLength);
        }
    }*/

    /*sleep function with a Promise */
    function sleep(ms) 
    {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    //my own function that works for now
    function createCSSSelector(selector, tabRules)
    {
        let styleSheetElement = document.createElement('style');
        styleSheetElement.type = 'text/css';
        console.log(styleSheetElement);
        console.log(styleSheetElement.sheet);
        document.getElementsByTagName('head')[0].appendChild(styleSheetElement);
        let stringRules="";
        for(let index=0;index<tabRules.length;index++)
        {
            stringRules+= tabRules[index]+";";
        }
        styleSheetElement.sheet.insertRule(selector + '{' + stringRules+ '}',index);
        console.log(styleSheetElement);

    } 
    function createCSSSelector2 (selector, style)
    {
        let styleSheetElement = document.createElement('style');
        styleSheetElement.type = 'text/css';
        console.log(styleSheetElement);
        console.log(styleSheetElement.sheet);
        document.getElementsByTagName('head')[0].appendChild(styleSheetElement);
        styleSheetElement.sheet.insertRule(selector + '{' + style + '}',0);
        console.log(styleSheetElement);

    } 
    const CSSObject=
    {
        font_size:"50px";

    }
    async function main(waveText="", timer=500)
    {

        createCSSSelector2('.taille5', 'font-size:50px');
        createCSSSelector2('.taille4', 'font-size:40px');
        createCSSSelector2('.taille3', 'font-size:30px');
        createCSSSelector2('.taille2', 'font-size:20px');
        createCSSSelector2('.taille1', 'font-size:10px');

        /*initalize values for the first loop iteration*/
        const target = document.getElementById("target");
        let text;
        if(waveText.length==0)
        {
             text = target.innerHTML;
        }
        else
        {
            text = waveText;
        }
        console.log(text);
        let animationCounter=0;
        //const textNode = document.createTextNode(text);
        //target.appendChild(textNode);
        //const paragraph = document.createElement("P");
        while(true)
        {
            target.innerHTML="";
            for(let i=0;i<text.length;i++)
            {
                const letterContainer = document.createElement("SPAN");
                target.appendChild(letterContainer);
                letterContainer.innerHTML=text[i];
                switch ((i+animationCounter)%8) {
                    case 0:
                        letterContainer.classList.add("taille1");
                        break;
                    case 1:
                        letterContainer.classList.add("taille2");
                        break;
                    case 2:
                        letterContainer.classList.add("taille3");
                        break;
                    case 3:
                        letterContainer.classList.add("taille4");
                        break;
                    case 4:
                        letterContainer.classList.add("taille5");
                        break;
                    case 5:
                        letterContainer.classList.add("taille4");
                        break;
                    case 6:
                        letterContainer.classList.add("taille3");
                        break;
                    case 7:
                        letterContainer.classList.add("taille2");
                        break;
                    default:
                        break;
                }
            }
            animationCounter = (animationCounter+1)%text.length
            await sleep(timer);
        }
    }

    main("AZERTYUIOPQSDFGHJKLMWXCVBN\nAZERTYUIOPQSDFGHJKLMWXCVBN\nAZERTYUIOPQSDFGHJKLMWXCVBN\n"
        +"AZERTYUIOPQSDFGHJKLMWXCVBN\nAZERTYUIOPQSDFGHJKLMWXCVBN\nAZERTYUIOPQSDFGHJKLMWXCVBN\n"
        +"AZERTYUIOPQSDFGHJKLMWXCVBN\nAZERTYUIOPQSDFGHJKLMWXCVBN\nAZERTYUIOPQSDFGHJKLMWXCVBN\n",50);
    
    //target.appendChild(paragraph);
    //console.log(textNode);
    //console.log(textNode.style);
})();
/*function createCSSSelector (selector, style) 
    {
        if (!document.styleSheets) return;
        if (document.getElementsByTagName('head').length == 0) return;
      
        let styleSheet,mediaType;
      
        if (document.styleSheets.length > 0) 
        {
            for (let i = 0, l = document.styleSheets.length; i < l; i++) 
            {
                if (document.styleSheets[i].disabled) 
                continue;
                let media = document.styleSheets[i].media;
                mediaType = typeof media;
        
                if (mediaType === 'string') 
                {
                    if (media === '' || (media.indexOf('screen') !== -1)) {
                        styleSheet = document.styleSheets[i];
                    }
                }
                else if (mediaType=='object') 
                {
                    if (media.mediaText === '' || (media.mediaText.indexOf('screen') !== -1)) {
                        styleSheet = document.styleSheets[i];
                    }
                }
        
                if (typeof styleSheet !== 'undefined') 
                break;
            }
        }
      
        if (typeof styleSheet === 'undefined') {
          let styleSheetElement = document.createElement('style');
          styleSheetElement.type = 'text/css';
          document.getElementsByTagName('head')[0].appendChild(styleSheetElement);
      
          for (i = 0; i < document.styleSheets.length; i++) {
            if (document.styleSheets[i].disabled) {
              continue;
            }
            styleSheet = document.styleSheets[i];
          }
      
          mediaType = typeof styleSheet.media;
        }
      
        if (mediaType === 'string') {
          for (let i = 0, l = styleSheet.rules.length; i < l; i++) {
            if(styleSheet.rules[i].selectorText && styleSheet.rules[i].selectorText.toLowerCase()==selector.toLowerCase()) {
              styleSheet.rules[i].style.cssText = style;
              return;
            }
          }
          styleSheet.addRule(selector,style);
        }
        else if (mediaType === 'object') {
          let styleSheetLength = (styleSheet.cssRules) ? styleSheet.cssRules.length : 0;
          for (let i = 0; i < styleSheetLength; i++) {
            if (styleSheet.cssRules[i].selectorText && styleSheet.cssRules[i].selectorText.toLowerCase() == selector.toLowerCase()) {
              styleSheet.cssRules[i].style.cssText = style;
              return;
            }
          }
          styleSheet.insertRule(selector + '{' + style + '}', styleSheetLength);
        }
      }*/
