import multer from "multer";

const multerMiddleware = multer({
    
    storage: multer.diskStorage({
      
        destination: (req, file, cb) => {
            cb(null, './uploads');
        },
        
        filename: (req, file, cb) => {
            cb(null, Date.now().toString() + '-' + file.originalname);
        }
    }),
    fileFilter: (req, file, cb) => {
     
        const isAccepted = ['image/png', 'image/jpg', 'image/jpeg'].find(formatoAceito => formatoAceito == file.mimetype);

        if(isAccepted){
            return cb(null, true);
        }
        
        return cb(null, false);
    }
});

export default multerMiddleware;