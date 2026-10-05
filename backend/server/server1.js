import http from 'http';

const userdata = [
    {
        id: 1,
        name: 'Dravin',
        age: 20
    },
    {
        id: 2,
        name: 'Rahul',
        age: 21
    },
    {
        id: 3,
        name: 'Aman',
        age: 19
    }
];

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'application/json');

    const url = req.url;
    const method = req.method;
    if (url === '/' && method === 'GET') {
        res.statusCode = 200;
        res.end(JSON.stringify({
            message: 'Welcome to the Home Page'
        }));
    }

    
    else if (url === '/sys' && method === 'GET') {
        res.statusCode = 200;
        res.end(JSON.stringify({
            message: 'Welcome to the System Page'
        }));
    }

    // All users
    else if (url === '/users' && method === 'GET') {
        res.statusCode = 200;
        res.end(JSON.stringify(userdata));
    }

    
    else if (url.startsWith('/users/') && method === 'GET') {

        const id = url.split('/')[2];

        const user = userdata.find((u) => u.id == id);

        if (!user) {
            res.statusCode = 404;
            return res.end(JSON.stringify({
                message: 'User not found'
            }));
        }

        res.statusCode = 200;
        res.end(JSON.stringify(user));
    }

    // 404
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({
            message: 'Page not found'
        }));
    }
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});