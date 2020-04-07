const User = require('../../models/userEntities/User');
const Company = require('../../models/userEntities/Company');

module.exports = {

  async addCompany(req, res) {

    const { id_user } = req.params;
    const { name, nome_fantasia, type, cnpj, ie, id_contact } = req.body;

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
      id_user,
    });

    return res.json(company);
  }

};
