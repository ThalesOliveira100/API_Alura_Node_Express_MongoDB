import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
            
        } catch (error) {
            res.status(500).json({ message: `Falha na requisição: ${error.message}`});
        }
    };

    static async listaLivroPorId (req, res) {
        try {
            const livroEncontrado = await livro.findById(req.params.id);
            res.status(200).json(livroEncontrado);

        } catch (error) {
            res.status(500).json({message: `Falha na requisição: ${error.message}`});
        }
    };

    static async cadastrarLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.body);

            res.status(201).json(
                {
                    message: `Criado com sucesso`,
                    livro: novoLivro
                }
            );
            
        } catch (error) {
            res.status(500).json({message: `Falha na requisição: ${error.message}`});
        }
    };

    static async atualizarLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Livro atualizado"});

        } catch (error) {
            res.status(500).json({message: `Falha na atualização do livro: ${error.message}`});
        }
    };

    static async excluirLivro (req, res) {
        try {
            await livro.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "Livro removido com sucesso."})

        } catch (error) {;
            res.status(500).json({message: `Falha na exclusão do livro: ${error.message}`});
        }
    };
};

export default LivroController