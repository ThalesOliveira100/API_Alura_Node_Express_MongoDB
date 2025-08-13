import { autores } from "../models/Autor.js";

class AutorController {

    static async listarAutores(req, res) {
        try {
            const listaAutores = await autores.find({});

            res.status(200).json(listaAutores);
            
        } catch (error) {
            res.status(500).json({ message: `Falha na listagem de autores: ${error.message} `});
        }
    };

    static async listaAutorPorId (req, res) {
        try {
            const autorEncontrado = await autores.findById(req.params.id);

            res.status(200).json(autorEncontrado);

        } catch (error) {
            res.status(500).json({ message: `Falha na listagem de autor: ${error.message}` });
        }
    };

    static async cadastrarAutor(req, res) {
        try {
            const autor = new autores(req.body);

            const autorResultado = await autor.save()

            res.status(201).send(autorResultado.toJSON());
            
        } catch (error) {
            res.status(500).json({ message: `Falha na criação de Autor: ${error.message}` });
        }
    };

    static async atualizarAutor (req, res) {
        try {
            const id = req.params.id;

            await autores.findByIdAndUpdate(id, { $set: req.body });

            res.status(200).json({ message: "Autor atualizado" });

        } catch (error) {
            res.status(500).json({ message: `Falha na atualização do autor: ${error.message}` });
        }
    };

    static async excluirAutor (req, res) {
        try {
            await autores.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "Autor removido com sucesso."})

        } catch (error) {;
            res.status(500).json({ message: `Falha na exclusão do autor: ${error.message}` });
        }
    };
};

export default AutorController;