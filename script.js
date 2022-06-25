function snapCrackle (maxValue) {
    
    let str = []

    for(let i = 1; i <= maxValue; i++){
        if(i % 5 == 0 && i % 2 !== 0){
            str.push("SnapCrackle")
        }else if(i % 2 !== 0){
            str.push("Snap")
        }else if(i % 5 == 0){
            str.push("Crackle")
        }else{
            str.push(i)
        }
    }
    return str.join(", ")
}

console.log(snapCrackle(12))








