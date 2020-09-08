export const getSelectionSortAnimation = (array, animation=[]) => {
    for(let i=0;i<array.length;i++){
        var min=i;
        for(let j=i+1;j<array.length;j++){
            animation.push(['C1',min,j]);
            animation.push(['C2',min,j]);
            min=(array[min] < array[j])?min:j;
        }
        animation.push(['S',i,array[min],min,array[i]]);
        var temp=array[min];
        array[min] = array[i];
        array[i] = temp;
    }
    return animation;
};

export const getBubbleSortAnimation = (array, animation=[]) => {
    let i,j;
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length-i-1; j++) {
            animation.push(['C1',j,j+1]);
            animation.push(['C2',j,j+1]);
            if (array[j] > array[j + 1]) {
                animation.push(['S',j,array[j+1],j+1,array[j]]);
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
        animation.push(['CL',j]);
    }
    return animation;
};

export const getInsertionSortAnimation = (array, animation=[]) => {
    let i,j;
    for(i=1;i<array.length;i++){
        let key;
        j=i
        while(j>0 && array[j-1] > array[j]){
            animation.push(['C1',j-1,j]);
            animation.push(['C2',j-1,j]);
            animation.push(['S',j,array[j-1],j-1,array[j]]);
            key=array[j];
            array[j] = array[j-1];
            array[j-1] = key;
            j--;
        }
    }
    return animation;
};


export const getMergeSortAnimation = (array) => {
    const animations = [];
    if (array.length <= 1) 
        return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }

function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations,) {
    if (startIdx === endIdx) 
        return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    merge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function merge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations,) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
        animations.push(['C1',i, j]);
        animations.push(['C2',i, j]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push(['S',k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        } 
        else {
            animations.push(['S',k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= middleIdx) {
        animations.push(['C1',i, i]);
        animations.push(['C2',i, i]);
        animations.push(['S',k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
        animations.push(['C1',j, j]);
        animations.push(['C2',j, j]);
        animations.push(['S',k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}


export const getquickSortAnimations = (array) => {
    const animation=[]
    quickSortHelper(array,0,array.length-1,animation);
    return animation;
}

function quickSortHelper(array, startIdx, endIdx,animation) {
    if(startIdx <= endIdx){
        let pivot = partition(array,startIdx,endIdx,animation);
        quickSortHelper(array,startIdx,pivot-1,animation);
        quickSortHelper(array,pivot+1,endIdx,animation);
    }
}

function partition(array,startIdx,endIdx,animation){
    const element = array[endIdx];
    let k=startIdx-1;
    for(let i=startIdx;i<endIdx;i++){
        if(array[i] < element){
            animation.push(['C1',i,endIdx]);
            animation.push(['C2',i,endIdx]);
            k++;
            animation.push(['S',k,array[i],i,array[k]]);
            let temp = array[k];
            array[k] = array[i];
            array[i] = temp;
        }
    }
    animation.push(['S',k+1,array[endIdx],endIdx,array[k+1]]);
    animation.push(['CL',k+1]);
    let temp = array[k+1];
    array[k+1] = array[endIdx];
    array[endIdx] = temp;
    

    return (k+1);

}