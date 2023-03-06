console.log("hello node js");

const http = require("http") ;

const server = http.createServer((req , res) =>{
    console.log("req" , req);
    // tạo project
    const Products = [
        {
            name: "iphone 12" , price : 2000

        },
        {
            name: "iphone 11" , price : 1000

        }


    ];
        Products.push({ name: "iphone X" , price : 500})
        if(req.url == "/Products"){  //nhận url server gửi lên localhost:8080/products
            res.end(JSON.stringify(Products)) //chuyển đổi dữ liệu

        }

});


server.listen(8080 , ()=> {
    console.log("server is running")

})