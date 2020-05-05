const Contact = require('../models/userEntities/Contact');

module.exports = {

  async createContact(data) {

    const { phone, celphone, email } = data;

    const contact = await Contact.create({
      phone,
      celphone,
      email,
    });

    return contact;
  }

};
