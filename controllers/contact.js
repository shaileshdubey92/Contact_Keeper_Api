import { Contact } from "../Models/contact.js"

// add contact

export const addContact =async (req, res) => {
    // console.log("add contact is working");
    // console.log(req.body)
  
    const { name, gmail, phone, ctype } = req.body;
  
    let contact = await Contact.findOne({ gmail });
    let phoneNumber = await Contact.findOne({ phone });
  
    if (contact || phoneNumber)
      return res.json({ message: "Contact Already Exist....!" });
  
    contact = await Contact.create({
      name,
      gmail,
      phone,
      ctype,
    });
    res.json({ message: "Contact Saved...!" });
  }

//get contact

  export const getContact =async (req, res) => {
    // console.log("get All contacts is working");
  
    const contacts = await Contact.find();
  
    res.json({ message: "fetched all contacts ", contacts });
  }

//update contact

  export const updateContact =async (req, res) => {
    // console.log(req.params.id);
  
    const contactId = req.params.id;
  
    let contact = await Contact.findById(contactId);
  
    if (!contact) return res.json({ message: "Invalid ID....!" });
  
    const { name, gmail, phone, ctype } = req.body;
  
    contact.name = name;
    contact.gmail = gmail;
    contact.phone = phone;
    contact.ctype = ctype;
  
    await contact.save();
  
    res.json({ contact });
  }
  //delete contact
  export const deleteContact = async (req, res) => {
    // console.log("Delete route is working");
  
    const id = req.params.id;
  
    let contact = await Contact.findById(id);
  
    if (!contact) return res.json({ message: "Id not exist...!" });
  
    await contact.deleteOne();
  
    res.json({
      success: true,
  
      message: "your contact has been deleted Successfully",
    });
  }
  export const getContactById =async (req,res) =>{
    const id = req.params.id;
  
    let contact = await Contact.findById(id);
  
    if (!contact) return res.json({ message: "Id not exist...!" });
    res.json({contact});

  }