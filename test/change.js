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
                        
                        return comData[i]
                    } 
            }
             }
             /*
             let getStyleName = () => {
                let styleName = parseData[i].style.filter(comp => comp.hasOwnProperty(jsonFile.position))
                console.log(styleName.hasOwnProperty(jsonFile.position))
             } 
             let newStyle = parseData.filter(comp => console.log(comp.style[jsonFile.position]))
             */
             let newFrom = `["${jsonFile.from}"]`
             let component = parseData.filter((comp,i) => {
                if (comp === undefined) {
                    return
                } else if (JSON.stringify(comp.component) === newFrom) {
                           return comp
                     
                 } 
             }           
             )
 
             //component[0].style[1][jsonFile.position]
             //console.log(jsonFile.switch[0] === parseData[i].component[0])
             //[0][jsonFile.position][jsonFile.property]
            //let changed = parseData[i].style.map(comp => comp[jsonFile.position])[0]
            
            let changeStyle = component[0] && component[0].style[i][jsonFile.position] && component[0].component[0] === jsonFile.from
			let changeText = component[0] && component[0].text[i][jsonFile.property] && component[0].component[0] === jsonFile.from
            let deleteComponent = jsonFile.delete && parseData[i].component[0] === jsonFile.delete
            let addComponent = jsonFile.add && getAdd().component[0] === jsonFile.add
            let switchComponent = jsonFile.switch && parseData[i].component[0] === jsonFile.switch[0]
             console.log(jsonFile)
            
            let replaceText = (textOrStyle) => {
               console.log('text')
               let toReplace = JSON.stringify(component[0].text[i][jsonFile.property], null, 2).replace(component[0].text[i][jsonFile.property], `${jsonFile.to}`)
               let oldProperty = JSON.stringify(parseData[parseData.indexOf(component[0])], null, 2).replace(JSON.stringify(component[0].text[i][jsonFile.property], null, 2), toReplace)
               
              // let compToReplace = JSON.stringify(parseData[parseData.indexOf(component[0])], null, 2)
                console.log(toReplace, oldProperty)
               //console.log(data.replace(`"${JSON.stringify(component[0])}"`, `"${oldProperty}"`))
                //console.log(oldProperty)
                parseData.splice(parseData.indexOf(component[0]), 1, JSON.parse(oldProperty))
  
                return JSON.stringify(parseData, null, 2)
               //return data.replace(component[0].style[i][jsonFile.position][jsonFile.property], jsonFile.to)
               
            }
            let replaceStyle = (textOrStyle) => {
               console.log('style')
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
                    console.log('text')
                    return replaceText()
                case changeStyle:
                    console.log('style')
                    return replaceStyle()
                case deleteComponent:
                    console.log('delete')
                    jsonFile.delete === 'Holder' ? JSON.stringify(parseData, null, 2) :
                    parseData.splice(parseData.indexOf(parseData[i]), 1)
                    return JSON.stringify(parseData, null, 2)
                case addComponent:
                    console.log('add')
                    parseData.push(getAdd())
                    return JSON.stringify(parseData, null, 2)
                case switchComponent:
                    console.log('switch')
                    jsonFile.add = jsonFile.switch[0]
                    parseData.splice(parseData.indexOf(parseData[i]), 1)
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