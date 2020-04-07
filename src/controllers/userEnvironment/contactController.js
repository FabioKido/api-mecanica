const Contact = require('../../models/userEntities/Contact');

module.exports = {

  async addContact(req, res) {

    const { phone, celphone, email } = req.body;

    const contact = await Contact.create({
      phone,
      celphone,
      email,
    });

    return res.json(contact);
  }

};
