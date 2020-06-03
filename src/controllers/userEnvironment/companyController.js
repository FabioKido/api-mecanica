const User = require('../../models/userEntities/User');
const Company = require('../../models/userEntities/Company');

module.exports = {

  async show(req, res) {
    const { id_company } = req.params;

    const company = await Company.findByPk(id_company);

    return res.json(company);
  },

  async store(req, res) {

    const id_user = req.user;
    const { name, nome_fantasia, type, cnpj, ie } = req.body;

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
      id_user,
    });

    return res.json(company);
  },

  async update(req, res) {
    const { id_company } = req.params;
    const {
      name,
      nome_fantasia,
      type,
      cnpj,
      ie
    } = req.body;

    const company = await Company.update( {
      name,
      nome_fantasia,
      type,
      cnpj,
      ie
     },
     {
      where: {
        id: id_company
      }
    });

    res.json({
      data: company,
      message: "Empresa atualizada com sucesso"
    })
  }

};
