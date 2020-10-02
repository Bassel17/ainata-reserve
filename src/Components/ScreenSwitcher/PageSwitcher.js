
const getIndexOfElement = (array,value) => {

    for(let i=0;i<array.length;i++){
        if(array[i].style.bottom === value){
            return i;
        }
    }
    return -1;
}

const getIndexOfElementWithMatchingId = (array,id)=>{
    for(let i=0;i<array.length;i++){
        if(array[i].id === id){
            return i;
        }
    }
    return -1;
}

const screenShow = {
    bottom:0,
    transition: "all 400ms ease-in",
    position: "absolute"
}

const screenUp = {
    bottom:"105vh",
    transition: "all 400ms ease-in",
    position: "absolute"
}

const screenDown = {
    bottom:"-105vh",
    transition: "all 400ms ease-in",
    position: "absolute"
}

class PageSwitcher{

    transformArray(arrayOfComponents,id){

        const newArray = [];
        if (typeof id === 'undefined'){
            for(let i=0;i<arrayOfComponents.length;i++){
                if(i === 0){
                    const elementStructure = {
                        "component":arrayOfComponents[i].component,
                        "style":screenShow
                    }
                    newArray.push(elementStructure)
                }else{
                    const elementStructure = {
                        "component":arrayOfComponents[i].component,
                        "style":screenDown
                    }
                    newArray.push(elementStructure)
                }
            }
        }else {
            const indexOfElementWithId = getIndexOfElementWithMatchingId(arrayOfComponents,id);
            for(let i=0;i<arrayOfComponents.length;i++){
                if(i === indexOfElementWithId){
                    const elementStructure = {
                        "component":arrayOfComponents[i].component,
                        "style":screenShow
                    }
                    newArray.push(elementStructure)
                }else{
                    if(i<indexOfElementWithId){
                        const elementStructure = {
                            "component":arrayOfComponents[i].component,
                            "style":screenUp
                        }
                        newArray.push(elementStructure)
                    }else{
                        const elementStructure = {
                            "component":arrayOfComponents[i].component,
                            "style":screenDown
                        }
                        newArray.push(elementStructure)
                    }
                }
            }
        }

        return newArray;
    }


    down(arrayOfComponents){
        const indexOfCurrentElement = getIndexOfElement(arrayOfComponents,screenShow.bottom);
        if(indexOfCurrentElement + 1 < arrayOfComponents.length){
            arrayOfComponents[indexOfCurrentElement].style = screenUp;
            arrayOfComponents[indexOfCurrentElement + 1].style = screenShow;
        }
        return arrayOfComponents;
    }   

    up(arrayOfComponents){
        const indexOfCurrentElement = getIndexOfElement(arrayOfComponents,screenShow.bottom);
        if(indexOfCurrentElement > 0){
            arrayOfComponents[indexOfCurrentElement].style = screenDown;
            arrayOfComponents[indexOfCurrentElement - 1].style = screenShow;
        }
        return arrayOfComponents;
    }

}

export default PageSwitcher;