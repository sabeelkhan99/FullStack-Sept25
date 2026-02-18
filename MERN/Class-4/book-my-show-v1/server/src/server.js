const app = require('./app');

const PORT = 3000;

(()=> {
    try {
        // await AppDataSource.connect()
        app.listen(PORT, () => {
            console.log(`server started at port ${PORT}`);
        })
    }
    catch (err) {
        console.log(err);
    }
})()