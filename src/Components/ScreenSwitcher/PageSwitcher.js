
const getIndexOfElement = (array,value) => {

    for(let i=0;i<array.length;i++){
        if(array[i].style.bottom === value){
            return i;
        }
    }
    return -1;
}

const screenShow = {
    bottom:0,
    transition: "all 600ms ease-in",
    position: "absolute"
}

const screenUp = {
    bottom:"100vh",
    transition: "all 600ms ease-in",
    position: "absolute"
}

const screenDown = {
    bottom:"-100vh",
    transition: "all 600ms ease-in",
    position: "absolute"
}

class PageSwitcher{

    transformArray(arrayOfComponents){

        const newArray = [];

        for(let i=0;i<arrayOfComponents.length;i++){
            if(i === 0){
                const elementStructure = {
                    "component":arrayOfComponents[i],
                    "style":screenShow
                }
                newArray.push(elementStructure)
            }else{
                const elementStructure = {
                    "component":arrayOfComponents[i],
                    "style":screenDown
                }
                newArray.push(elementStructure)
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