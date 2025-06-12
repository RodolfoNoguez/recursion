

function fibs(n){
    if (n <=0){return [];}
    if (n === 1){return [0];}
    if (n === 2){return [0, 1];}
    let result = [0,1];
    for (let i=2; i<n; i++){
        result[i] = result[i-1] + result[i-2];
    } 
    return result;   
}

function fibsrec(n){
    if (n<=0){return [];}
    if (n===1){return [0];}
    if (n===2){return [0,1];}

    let result = fibsrec(n - 1);
    result.push(result[result.length - 1] + result[result.length - 2]);
    return result;

    
}

console.log(fibs(10)); 
console.log(fibsrec(10));





function mergeSort(arr){
    if (arr.length <=1){return arr;}
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right){
    let result = [];
    let i=0;
    let j=0;
    
    while(i <left.length && j < right.length){
        if (left[i]<right[j]){
            result.push(left[i]);
            i++;
        }else{
            result.push(right[j]);
            j++;
        }
    }    
    return result.concat(left.slice(i)).concat(right.slice(j));
}
console.log(mergeSort([5, 3, 8, 4, 2, 7, 1, 6])); 