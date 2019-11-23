const {
    perfis
} = require('../data/db')

module.exports = {
    salario(usuario) {
        return usuario.salario_real;
    },
    perfil(usuario) {
        const perfil = perfis.find(e => e.id === usuario.perfil_id);

        return perfil ? perfil : null
    }
}