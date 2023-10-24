class CompactorController {

    static getCompactor = async (req, res, next) => {
        res.send(`
            <html>
                <head> 
                    <title> Nova imagem </title>
                </head>
                </body>
                    <form action="/"  method="POST" enctype="multipart/form-data">
                        <input type="file" name="image">
                        <button type="submit"> Enviar </button>
                    </form>
                </body>
            </html>
        `);
    }

    static postCompactor = async (req, res) => {
        if (req.file) {
            return res.send(req.file);
        }
        return res.send('Houve erro no upload!');
    }

}

export default CompactorController