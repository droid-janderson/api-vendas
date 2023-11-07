import { Router } from "express";

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({
    message: 'Welcome to the application!'
  });
})

export default routes;
