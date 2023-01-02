function myIpAdress(){
    const myIp = "https://api.ipify.org/?format=json";
    const myIpAdd = fetch(myIp)
    myIpAdd
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data);
document.getElementById("myIP").innerText = `MY Public IP ADDRESS : ${data.ip}`;
})
}
myIpAdress();





//document.getElementById("pincodeMess").innerHTML = `Message: ${data[0].Message}`
       // document.getElementById("postal-name-1").innerHTML = `Name: ${data[0].PostOffice[0].Name}`
       // document.getElementById("postal-branch-type-1").innerHTML = `Branch Type1: ${data[0].PostOffice[0].BranchType}`
       // document.getElementById("postal-delivery-1").innerHTML = `Delivery Status: ${data[0].PostOffice[0].DeliveryStatus}`
       // document.getElementById("postal-district-1").innerHTML = `District: ${data[0].PostOffice[0].District}`
       // document.getElementById("postal-division-1").innerHTML = `Division: ${data[0].PostOffice[0].Division}`

