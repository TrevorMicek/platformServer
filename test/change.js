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
         
   console.log('change is called')
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
                    if (jsonFile.add && comData[i].component[0] === jsonFile.add) {
                        return comData[i]
                    }
            }
             }
            
			let changeText =  parseData[i].text[jsonFile.position - 1] && parseData[i].component[0] === jsonFile.from
		    let changeStyle = parseData[i].style[jsonFile.property] && parseData[i].component[0] === jsonFile.from
            let deleteComponent = jsonFile.delete && parseData[i].component[0] === jsonFile.delete
            let addComponent = jsonFile.add && getAdd().component[0] === jsonFile.add
            let replaceProperty = (textOrStyle) => data.replace(textOrStyle[jsonFile.property], jsonFile.to)

            switch (true) {
                case changeText:
                    return replaceProperty(parseData[i].text[jsonFile.position - 1])
                case changeStyle:
                    return replaceProperty(parseData[i].style[jsonFile.property])
                case deleteComponent:
                    parseData.splice(parseData.indexOf(parseData[i]), 1)
                    return JSON.stringify(parseData, null, 2)
                case addComponent:
                    parseData.push(getAdd())
                    return JSON.stringify(parseData, null, 2)
                default:
                    console.log('error')
            }
            //console.log(changeText, changeStyle, deleteComponent, addComponent)
            if (parseData === []) {
                parseData.push({
                    component: [
                        "FirstSection"
                    ],
                    text: [],
                    style: []
                })
            }
	
		}
    
  }
 let myCallBack = function(data) {
     console.log('added')
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