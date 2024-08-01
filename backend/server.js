import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        { id: 1, title: 'First heading', content: 'here is heading' },
        { id: 2, title: 'Second heading', content: 'here is another heading' },
        { id: 3, title: 'Third heading', content: 'here is third heading' },
        { id: 4, title: 'Fourth heading', content: 'here is fourth heading' },
    ]
    res.json(jokes);
})

const port = 5000;

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
})

