import leapYear from "../helperFunctions/leapYear"

export default () => {
    let d = new Date();
    const monthArr = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    let date, month, year

    if (d.getDate() === 1) {
        month = d.getMonth()
        if (month <=8 ) {
            
            if(month===0){
                month=monthArr[monthArr.length-1]
                year = d.getFullYear() - 1
                date = 31
                return `${date} ${month} ${year}` 
            }
            else if(month===2){
                if(leapYear())
                date=29
                else date=28
            }
            else if (month === 7 ||month === 8) 
                date = 31
            else if(month%2===0)
                date=30
            else date=31
        }else{
             if(month%2===0)
            date=31
            else date=30
        }
        month = monthArr[month-1]
        year = d.getFullYear()
       return `${date} ${month} ${year}`
    }else{
        return `${d.getDate()-1} ${monthArr[d.getMonth()]} ${d.getFullYear()}`
    }

   
}