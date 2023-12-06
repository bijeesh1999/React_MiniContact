// services/contactService.js
const contacts = require('../contactdata/contactdetails');

function emailValidation(email) {  
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailValid.test(email);
}

function phnoValidation(phno) {
    const phnoValid = /^\d{10}$/;
    return phnoValid.test(phno);
}

function contactValidation(contact) {
    const errors = [];
    if (!contact.firstName) {
        errors.push('First name is required');
    }
    if (!contact.lastName) { 
        errors.push('Last name is required');
    }
    if (!emailValidation(contact.email)) {
        errors.push('Email is not valid');
    }
    if (!phnoValidation(contact.phno)) {
        errors.push('Phone number is not valid');
    }
    return errors;
}

async function getAllContacts(page, limit, search) {
    try {
        let query = {};
        if (search) {
            query = {
                $or: [
                    { firstName: { $regex: search, $options: 'i' } },
                    { lastName: { $regex: search, $options: 'i' } },
                    { email: { $regex: search, $options: 'i' } },
                ],
            };
        }

        const allContacts = await contacts.find(query);

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const results = {
            pageCount: Math.ceil(allContacts.length / limit),
            currentPage: page,
            contactResult: allContacts.slice(startIndex, endIndex),
        };

        if (endIndex < allContacts.length) {
            results.nextPage = page + 1;
        }
        if (startIndex > 0) {
            results.prevPage = page - 1;
        }

        return results;
    } catch (error) {
        throw error;
    }
}

async function createContact(contact) {
    try {
        return await contacts.create(contact);
    } catch (error) {
        throw error;
    }
}

async function getOneContactById(id) {
    try {
        return await contacts.findById(id);
    } catch (error) {
        throw error;
    }
}

async function updateContactById(id, data) {
    try {
        return await contacts.findByIdAndUpdate(id, data);
    } catch (error) {
        throw error;
    }
}

async function deleteContactById(id) {
    try {
        return await contacts.findByIdAndDelete(id);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    contactValidation,
    getAllContacts,
    createContact,
    getOneContactById,
    updateContactById,
    deleteContactById,
};
