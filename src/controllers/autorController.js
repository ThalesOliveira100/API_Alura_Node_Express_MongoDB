import NotFound from "../errs/NotFound.js";
import { autores } from "../models/Autor.js";

class AutorController {

    static async listarAutores(req, res, next) {
        try {
            const listaAutores = await autores.find();

            if (listaAutores.length !== 0) {
                res.status(200).json(listaAutores);
            } else {
                next(new NotFound("Id do Autor não encontrado."));
            };            
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
                next(new NotFound("Id do Autor não encontrado."));
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

            if (await autores.findByIdAndUpdate(id, { $set: req.body }) !== null) {
                res.status(200).json({ message: "Autor atualizado" });
            } else {
                next(new NotFound("Id do Autor não encontrado."));
            }
        } catch (err) {
            next(err);
        };
    };

    static async excluirAutor (req, res, next) {
        try {
            if (await autores.findByIdAndDelete(req.params.id) !== null) {
                res.status(200).json({ message: "Autor removido com sucesso."})
            } else {
                next(new NotFound("Id do Autor não encontrado."));
            }

        } catch (err) {
            next(err);
        };
    };
};

export default AutorController;