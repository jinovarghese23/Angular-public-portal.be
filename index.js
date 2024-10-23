// import json-server
const jsonServer=require('json-server')

// create server using create() method
const publicportalServer=jsonServer.create()

// create a path/route to db.json file
const router=jsonServer.router('db.json')

// create a middleware used to convert JSON Data to js object
const middleware=jsonServer.defaults()

// add middleware and router to publicportalserver

publicportalServer.use(middleware);
publicportalServer.use(router)

const PORT=4000;

// run the publicportalserver
publicportalServer.listen(PORT,()=>{
    console.log(`public Portal server running on port ${PORT} `);
    
})