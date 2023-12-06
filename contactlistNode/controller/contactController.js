// controllers/contactController.js
const contactService = require('./services');

async function getAllContact(req, res , next) {
    try {
        const { page, limit, search } = req.query;
        const results = await contactService.getAllContacts(parseInt(page), parseInt(limit), search);
        res.status(200).json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function createContact(req, res , next) {
    const { firstName, lastName, email, phno } = req.body;
    const contact = { firstName, lastName, email, phno };
    const validationErrors = contactService.contactValidation(contact);

    if (validationErrors.length > 0) {
        res.status(400).json(validationErrors)  
    } else {
        try {
            const createdContact = await contactService.createContact(contact);
            res.status(200).json(createdContact);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

async function getOneContact(req, res) {
    const id = req.params.id;
    try {
        const oneContact = await contactService.getOneContactById(id);
        if (!oneContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json(oneContact);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

async function putOneContact(req, res) {
    const id = req.params.id;
    try {
        const putContact = await contactService.updateContactById(id, req.body);
        if (!putContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json(putContact);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

async function deleteOneContact(req, res) {
    const id = req.params.id;
    try {
        const deletedContact = await contactService.deleteContactById(id);
        if (!deletedContact) {
            return res.status(200).json({ message: 'Delete success' });
        }
        res.status(400).json(deletedContact);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = {
    getAllContact,
    createContact,
    getOneContact,
    putOneContact,
    deleteOneContact,
};
