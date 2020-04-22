const Contact = require('../../models/userEntities/Contact');

module.exports = {

  async addContact(data) {

    const { phone, celphone, email } = data;

    const contact = await Contact.create({
      phone,
      celphone,
      email,
    });

    return contact;
  }

};
