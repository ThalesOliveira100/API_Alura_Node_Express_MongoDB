import { autor } from "../models/Autor.js";

class AutorController {

    static async listarAutores(req, res) {
        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
            
        } catch (error) {
            res.status(500).json({ message: `Falha na listagem de autores: ${error.message}`});
        }
    };

    static async listaAutorPorId (req, res) {
        try {
            const autorEncontrado = await autor.findById(req.params.id);
            res.status(200).json(autorEncontrado);

        } catch (error) {
            res.status(500).json({message: `Falha na listagem de autor: ${error.message}`});
        }
    };

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);

            res.status(201).json(
                {
                    message: `Criado com sucesso`,
                    autor: novoAutor
                }
            );
            
        } catch (error) {
            res.status(500).json({message: `Falha na criação de Autor: ${error.message}`});
        }
    };

    static async atualizarAutor (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Autor atualizado"});

        } catch (error) {
            res.status(500).json({message: `Falha na atualização do autor: ${error.message}`});
        }
    };

    static async excluirAutor (req, res) {
        try {
            await autor.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "Autor removido com sucesso."})

        } catch (error) {;
            res.status(500).json({message: `Falha na exclusão do autor: ${error.message}`});
        }
    };
};

export default AutorController;