export const func =async()=>{
    try{
        const response = await fetch(`http://localhost:3005/track`,{
            method:'GET',
            credentials:"include"
        })
        const data=await response.json();
        console.log("data from server",data);
    } catch(err)  {
        console.log(err);
        }
}
window.onload = function() {
    func();
  };
