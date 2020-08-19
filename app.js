var express=require("express"),
app=express(),
bodyParser=require("body-parser"),
mongoose=require("mongoose");

mongoose.connect("mongodb://localhost/cricket",{useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine","ejs");

var signupschema=new mongoose.Schema({
    name: String,
    password: String
});

var Signup=mongoose.model("User",signupschema);
Signup.create({
    name: "yogesh@gmail.com",
    password: "nanu234"
});

app.get('/', function(req, res){
    res.render("index");
    
});

app.post('/submit', function(req, res){

    var name1=req.body.username;
    var password1=req.body.password;
    Signup.find({name: name1,password: password1},function(err,users){
        if(users.length)
        {res.render("selectmatch");}
        else{
            res.render("index");
            
        }
    });
 
});
app.get('/createteam',function(req,res){
    res.render("createteam");
});

app.get("/selectcontest",function(req,res){
    res.render("selectcontest");
});

app.get("/leaderboard",function(req,res){
    res.render("leaderboard");
});


app.listen(3000,function(){
    console.log('App listening on port 3000!');
});

