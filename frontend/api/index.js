const expresss = require('express');
const app = express();

app.get("/test", (req, res) => {
    res.json("okay");
});

app.listen(4000);
