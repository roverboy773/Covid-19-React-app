export default ()=>{
    let d=new Date();
    return ((d.getFullYear()%4===0 && d.getFullYear()%100!==0) && (d.getFullYear()%400===0 && d.getFullYear()%100===0))
 
}