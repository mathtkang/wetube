// const express = require("express"); //같은 말이지만 아래의 코드로 작성하는 것이 더 최신판
import express from "express";

const app = express();

// app.get("/", function(req, res){
//     res.send("hello world");
// });

const PORT = 4000;

const handleListening = () => console.log(`Listening on : http://localhost:${PORT}`);

// function handleHome(req, res){} //req,res가 없는 상태로는 계속 로딩중
//위의 함수와 같은 코드 : js의 arrow function : =>
const handleHome = (req, res) => res.send('Hello from my ass');

const handleProfile = (req, res) => res.send("You are on my profile");

const betweenHome = (req, res, next) => {
    console.log("Between");
    next();
}

//middleware : 위치에 따라서 실행가능한 서버가 달라짐 (여기서는 betweenHome 이 middleware 이다)
app.use(betweenHome); //맨 위에 있으니까, 모든 서버에 대해서 betweenHome 실행(전역)

app.get("/", handleHome);
// app.get("/", betweenHome, handleHome); //이렇게 쓰면 해당 /(home)에서만 betweenHome 실행(지역)

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
