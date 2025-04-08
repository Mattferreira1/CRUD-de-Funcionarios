const mongoose = require("mongoose");

const FuncionarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    cargo: { type: String, required: true },
    salario: { type: Number, required: true },
    departamento: { type: String, required: true },
    cpf:{type:String, required: true},
    telefone:{type:Number, required: true},
    endereco:{type:String, required: true}
}, { timestamps: true });

module.exports = mongoose.model("Funcionario", FuncionarioSchema);