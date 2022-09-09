    let newRatin=[5,4]
    let index=newRatin
    rating=index
    console.log(index)
    for (let i=0,total=0;i!==(index.length+1);i++){
        if (i===index.length){
            total=total/(index.length)
            rating=total
            break
        }
        total=total+index[i]
    }

    console.log(rating)




