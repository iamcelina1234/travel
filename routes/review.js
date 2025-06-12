const express = require("express") ;
const router = express.Router({mergeParams : true}) ;
const wrapAsync = require("../utils/wrapAsync.js") ;
const ExpressError = require("../utils/ExpressError.js") ;
const ReviewController = require("../controller/reviews") ;
const Review  = require("../models/reviews.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn , isReviewAuthor} = require("../middleware.js") ;

//Post Route
router.post("/" , isLoggedIn ,validateReview ,wrapAsync( ReviewController.postReview)) ;
  
  //Delete Review Route ----> Show.ejs
  router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(ReviewController.deletePost)) ;

  module.exports = router ;