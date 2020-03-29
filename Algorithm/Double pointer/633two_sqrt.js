var Sum=function(c){
    let a=0
    let b=Math.floor(Math.sqrt(c))

    while(a<=b){
        let res=a*a+b*b
        if(res<c){a++}
        else if(res>c){b--}
        else{return true}
    }
    return false
}