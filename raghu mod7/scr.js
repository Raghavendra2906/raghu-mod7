function myIpAdress() {
    const myIp = "http://api.ipify.org/?format=json";
    const myIpAdd = fetch(myIp)
    myIpAdd
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data);
            document.getElementById("landingIP").innerText = `MY Public IP ADDRESS : ${data.ip}`;
            var ip = data.ip;
            info(ip);
        })
}
myIpAdress();


async function info(ip) {
   const latData = 12.9719;
    const longitudedata = 77.5937;
  const apiurl = `https://ipinfo.io/157.45.7.175/json?token=783c5f07a0c83b`
    try {
        const response = await fetch(apiurl);
        const pinCode = 530068;
         postalData(pinCode);
        if (response.status !== 200)
            throw new Error("Can't ablt to fetch the data")
        const fetchdata = await response.json();
        console.log(fetchdata);
        var loc_Data = `Long: ${fetchdata.loc}`
        var lat_Data = [];
        lat_Data = loc_Data.split(",");
        for (let str of lat_Data) {
            console.log(str);
            document.getElementById("latData").innerHTML = ` Lat: ${lat_Data[1]}`
            document.getElementById("longData").innerHTML = ` ${lat_Data[0]}`
             dispalyMap(lat_Data[0], lat_Data[1]);
        }
        document.getElementById("cityData").innerHTML = `City: ${fetchdata.city}`
        document.getElementById("regionData").innerHTML = `Region: ${fetchdata.region}`
        document.getElementById("OrganisationData").innerHTML = `Organisation: ${fetchdata.org}`
        document.getElementById("HostnameData").innerHTML = `Hostname: ${fetchdata.org}`
        document.getElementById("timezonedata").innerHTML = `Time zone: ${fetchdata.timezone}`
        var pin_Code = document.getElementById("pincodeData")
        pin_Code.innerHTML = `Pincode: ${fetchdata.postal}`
        postalData(pin_Code);
        dispalyMap(latData, longitudedata);
    }
    catch (err) {
        console.log(err.message);
    }
}

function dispalyMap(latData, longData) {
    const dis = document.getElementById("targetFrame");
    dis.src = `https://maps.google.com/maps?q=${latData}  ${longData}&z=15&output=embed`
    dis.style.width = "950px"
    dis.style.height = "550px"
}

async function postalData(pin) {
 
    const postalApiUrl = `https://api.postalpincode.in/pincode/${pin}`;
    try {
        const response = await fetch(postalApiUrl);
        if (response.status !== 200)
            throw new Error("Can't ablt to fetch the Postal data")
        const data = await response.json();
        console.log(data);

        document.getElementById("pincodeMess").innerHTML = `Message: ${data[0].Message}`
        document.getElementById("postal-name-1").innerHTML = `Name: ${data[0].PostOffice[0].Name}`
        document.getElementById("postal-branch-type-1").innerHTML = `Branch Type: ${data[0].PostOffice[0].BranchType}`
        document.getElementById("postal-delivery-1").innerHTML = `Delivery Status: ${data[0].PostOffice[0].DeliveryStatus}`
        document.getElementById("postal-district-1").innerHTML = `District: ${data[0].PostOffice[0].District}`
        document.getElementById("postal-division-1").innerHTML = `Division: ${data[0].PostOffice[0].Division}`

    }
    catch (err) {
        console.log(err.message);
    }
}



