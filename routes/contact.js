import express from "express";
import { Contact } from "../Models/contact.js";
import { addContact ,getContact,updateContact,deleteContact,getContactById } from "../controllers/contact.js";


const router = express.Router();

//home route
router.get("/home", (req, res) => {
  res.json({ message: "Converting to MVC Structure..!" });
});

//@route- '/AddContact'
//@method- 'post'
router.post("/addcontact",addContact);

//@route- '/getContact'
//@method- 'get'
router.get("/getcontacts", getContact);

//@route - '/:id'
//method- put

router.put("/:id",updateContact );

//@route - '/:id'
//method- Delete
router.delete("/:id",deleteContact );

router.get("/:id",getContactById);



export default router;
