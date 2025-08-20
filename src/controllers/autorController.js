import { autores } from "../models/Autor.js";

class AutorController {

    static async listarAutores(req, res, next) {
        try {
            const listaAutores = await autores.find();

            res.status(200).json(listaAutores);
            
        } catch (err) {
            next(err);
        }
    };

    static async listaAutorPorId (req, res, next) {
        try {
            const autorEncontrado = await autores.findById(req.params.id);

            if (autorEncontrado !== null) {
                res.status(200).json(autorEncontrado);
            } else {
                res.status(404).json({ message: "Id do Autor não localizado."});
            };
        } catch (err) {
            next(err);
        };
    };

    static async cadastrarAutor(req, res, next) {
        try {
            const autor = new autores(req.body);

            const autorResultado = await autor.save()

            res.status(201).send(autorResultado.toJSON());
            
        } catch (err) {
            next(err);
        };
    };

    static async atualizarAutor (req, res, next) {
        try {
            const id = req.params.id;

            await autores.findByIdAndUpdate(id, { $set: req.body });

            res.status(200).json({ message: "Autor atualizado" });

        } catch (err) {
            next(err);
        };
    };

    static async excluirAutor (req, res, next) {
        try {
            await autores.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "Autor removido com sucesso."})

        } catch (err) {
            next(err);
        };
    };
};

export default AutorController;