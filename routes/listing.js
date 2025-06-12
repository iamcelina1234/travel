const express = require("express") ;
const router = express.Router() ;
const wrapAsync = require("../utils/wrapAsync.js") ;
const Listing = require("../models/listing.js");
const { isLoggedIn, isowner,validateListing } = require("../middleware.js") ;
const ListingController = require("../controller/listings.js") ;
const multer  = require('multer') ;
const {storage} = require("../cloudconfig.js") ;
const upload = multer({ storage }) ;

    
router.route("/")
.get(wrapAsync(ListingController.index))
.post(isLoggedIn  , upload.single("listing[image]"), validateListing,wrapAsync(ListingController.create)) ;

//new form 
router.get("/new",isLoggedIn ,ListingController.Rendernewform);

    router.route("/:id")
    .get(wrapAsync(ListingController.show))
    .put(isLoggedIn ,
    isowner ,
    upload.single("listing[image]"),
   validateListing,
   wrapAsync(ListingController.update))
  .delete(isLoggedIn,isowner,wrapAsync(ListingController.delete) );
 



// edit route
router.get("/:id/edit", isLoggedIn,isowner ,wrapAsync(ListingController.edit)) ;



module.exports = router ;   