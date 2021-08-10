const { json } = require('body-parser');
const fs = require('fs');




const writeCart = (filePath, jsonFile) => {
   const options = {
    files: './first-page.json',
    from: /}}]/g,
    to: ''
}


fs.readFile(`${filePath}`, "utf8", function(err, data) {
    if (err) throw err;
   
    let parseData = JSON.parse(data)
         

    fs.readFile('./test/CompStore.json', "utf8", function(err, pageData) {

    if (err) throw err;
  let  comData = JSON.parse(pageData)
  

 
  let getNewState = () => {
    /*
    done
    change this to that(property)
    add component

    need
    add element to component
    delete component and element
    switch?


    */
    
    
		for (let i=0;i<parseData.length;i++) {
            let getAdd = () => {
                for (let i=0;i<comData.length;i++) {
                    if (jsonFile.add && comData[i].component[0] === `${jsonFile.add}`) {
                        console.log('here')
                        return comData[i]
                    }
            }
             }
             let getStyleName = () => {
                let styleName = parseData[i].style.filter(comp => comp.hasOwnProperty(jsonFile.position))
                console.log(styleName.hasOwnProperty(jsonFile.position))
             } 
             let newStyle = parseData.filter(comp => console.log(comp.style[jsonFile.position]))
             console.log(newStyle)
             let newFrom = `["${jsonFile.from}"]`
             let component = parseData.filter((comp,i) => {
                       if (JSON.stringify(comp.component) === newFrom) {
                           return comp
                     
                 }
             }           
             )
             //component[0].style[1][jsonFile.position]
  
             //[0][jsonFile.position][jsonFile.property]
            //let changed = parseData[i].style.map(comp => comp[jsonFile.position])[0]
			let changeText =  component[0].text[i][jsonFile.position] && component[0].component[0] === jsonFile.from
		    let changeStyle = component[0].style[i][jsonFile.position] && component[0].component[0] === jsonFile.from
            let deleteComponent = jsonFile.delete && component[0].component[0] === jsonFile.delete
            let addComponent = jsonFile.add && getAdd().component[0] === jsonFile.add
            //let switchComponent = jsonFile.swtch && parseData[i].component[0] === jsonFile.switch
            let replaceText = (textOrStyle) => {
               
               let toReplace = JSON.stringify(component[0].text[i][jsonFile.position][jsonFile.property], null, 2).replace(component[0].text[i][jsonFile.position][jsonFile.property], `${jsonFile.to}`)
               let oldProperty = JSON.stringify(parseData[parseData.indexOf(component[0])], null, 2).replace(JSON.stringify(component[0].text[i][jsonFile.position][jsonFile.property], null, 2), toReplace)
               
              // let compToReplace = JSON.stringify(parseData[parseData.indexOf(component[0])], null, 2)
                
               //console.log(data.replace(`"${JSON.stringify(component[0])}"`, `"${oldProperty}"`))
                //console.log(oldProperty)
                parseData.splice(parseData.indexOf(component[0]), 1, JSON.parse(oldProperty))
  
                return JSON.stringify(parseData, null, 2)
               //return data.replace(component[0].style[i][jsonFile.position][jsonFile.property], jsonFile.to)
               
            }
            let replaceStyle = (textOrStyle) => {
               
                let toReplace = JSON.stringify(component[0].style[i][jsonFile.position][jsonFile.property], null, 2).replace(component[0].style[i][jsonFile.position][jsonFile.property], `${jsonFile.to}`)
                let oldProperty = JSON.stringify(parseData[parseData.indexOf(component[0])], null, 2).replace(JSON.stringify(component[0].style[i][jsonFile.position][jsonFile.property], null, 2), toReplace)
                
               // let compToReplace = JSON.stringify(parseData[parseData.indexOf(component[0])], null, 2)
                 
                //console.log(data.replace(`"${JSON.stringify(component[0])}"`, `"${oldProperty}"`))
                 //console.log(oldProperty)
                 parseData.splice(parseData.indexOf(component[0]), 1, JSON.parse(oldProperty))
   
                 return JSON.stringify(parseData, null, 2)
                //return data.replace(component[0].style[i][jsonFile.position][jsonFile.property], jsonFile.to)
                
             }
           /*
            let newObj = {
                [jsonFile.position]: parseData[i].style[0],
                
            }
            let filterAnswer = styleName.filter(comp => comp.hasOwnProperty(jsonFile.position))
            let newAnswer = {
                [jsonFile.property] : newObj[jsonFile.position]
            }
            */
            //let filterAnswer = parseData.filter(comp => comp.hasOwnProperty(jsonFile.position))
            //let propertyName = filterAnswer
            
             //console.log(component[0].style[i][jsonFile.position][jsonFile.property])
             //.style[0][jsonFile.position][jsonFile.property]
            switch (true) {
                case changeText:
                  
                    return replaceText()
                case changeStyle:
                    
                    return replaceStyle()
               
                case deleteComponent:
                    parseData.splice(parseData.indexOf(parseData[i]), 1)
                    return JSON.stringify(parseData, null, 2)
                case addComponent:
                    parseData.push(getAdd())
                    return JSON.stringify(parseData, null, 2)

            }
            //console.log(changeText, changeStyle, deleteComponent, addComponent)
	
		}
    
  }
 let myCallBack = function(data) {
   
    return data()
    
 }

  /*
  if two components share same value on same key first one updates
  sometimes deletes whole API or returns undefined
  sometimes doesn't do anything
  occaisonally adds edding brackets again

  */
 

        
        fs.writeFile(`${filePath}`, myCallBack(getNewState), (err) => {
        if (err) throw err;
        });
       
});//read/write
})
}
module.exports = writeCart;