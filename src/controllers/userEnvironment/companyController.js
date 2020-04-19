const User = require('../../models/userEntities/User');
const Company = require('../../models/userEntities/Company');

module.exports = {

  async getCompanyContact(req, res) {
    const { id_company } = req.params;

    const company = await Company.findByPk(id_company, {
      include: { association: 'contact' }
    })

    return res.json(company.contact);
  },

  async getCompanyAddress(req, res) {
    const { id_company } = req.params;

    const company = await Company.findByPk(id_company, {
      include: { association: 'address' }
    })

    return res.json(company.address);
  },

  async addCompany(req, res) {

    const { id_user } = req.params;
    const { name, nome_fantasia, type, cnpj, ie, id_contact, id_address } = req.body;

    const user = await User.findByPk(id_user);

    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    }

    const company = await Company.create({
      name,
      nome_fantasia,
      type,
      cnpj,
      ie,
      id_contact,
      id_address,
      id_user,
    });

    return res.json(company);
  }

};
