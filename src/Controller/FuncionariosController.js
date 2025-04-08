const Funcionario = require("../Model/Funcionario");
// setInterval(async ()=>{
//     let teste = 
//         {
//             "nome":"teste",
//             "cargo":"teste",
//             "salario":1500.00,
//             "departamento":"teste",
//             "cpf":"000.000.000-00",
//             "telefone":123456,
//             "endereco":"rua teste"
//         }
    
//     const novoFuncionario = new Funcionario(teste);
//     novoFuncionario.save()
//     console.log("Funcionário adicionado ao sistema.");

//     await Funcionario.findOneAndDelete({ nome: teste.nome, cargo: teste.cargo });
//     console.log("Funcionário deletado ao sistema.");
// }, 5000)

class FuncionariosController{
    async create(req,res){
        try {
            const novoFuncionario = new Funcionario(req.body);
            await novoFuncionario.save();
            res.status(201).json({
                message: "Funcionário adicionado ao sistema."
            });
        } catch (error) {
            res.status(500).json({ error: "Erro ao criar funcionário" });
            console.log(error)
        }
    }
    async list(req,res){
        try {
            const funcionarios = await Funcionario.find();
            res.json(funcionarios);
        } catch (error) {
            res.status(500).json({ error: "Erro ao buscar funcionários" });
        }
    }
    async delete(req,res){
        try {
            const funcionarioDeletado = await Funcionario.findByIdAndDelete(req.params.id);
            if (!funcionarioDeletado) return res.status(404).json({ error: "Funcionário não encontrado" });
            res.json({ message: "Funcionário removido com sucesso!" });
        } catch (error) {
            res.status(500).json({ error: "Erro ao remover funcionário" });
        }
    }
    async update(req,res){
        try {
            const funcionarioAtualizado = await Funcionario.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!funcionarioAtualizado) return res.status(404).json({ error: "Funcionário não encontrado" });
            res.json(funcionarioAtualizado);
        } catch (error) {
            res.status(500).json({ error: "Erro ao atualizar funcionário" });
            console.log(error)
        }
    }

}
module.exports = FuncionariosController;