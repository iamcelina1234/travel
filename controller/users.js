const User = require("../models/user");
const router = require("../routes/user")  ;

module.exports.rendersignupform = (req,res)=>{
    res.render("users/signup.ejs");
};

module.exports.renderloginform = (req,res)=>{
     res.render("users/login.ejs")
} ;

module.exports.signupUser = async(req,res)=>{
    try {
        let {username , email ,password} = req.body ;
        const newUser = new User({email,username}) ;
       const registeredUser = await User.register(newUser, password) ;
       console.log(registeredUser) ;
       req.login(registeredUser, (err) => {
        if (err) return next(err);
        req.flash("success", "Welcome to Encrypted travels" );
        res.redirect( "/listings"); // fallback
    });     
    }catch(e){
        req.flash("error" , e.message) ;
        res.redirect("/signup")
    }
    
};


module.exports.login = async (req, res) => {
        req.flash("success", "Welcome to Wanderlust, You logged in !!");
        let redirectUrl = res.locals.redirectUrl || "/listings";
        res.redirect(redirectUrl); // fallback
    };


    module.exports.logout = (req,res,next)=>{
    req.logOut((err)=>{
        if(err){
          return  next(err) ;
        }
        req.flash("success" ,"You are logged-out ! ") ;
        res.redirect("/listings") ;
    }) ;
} ;
