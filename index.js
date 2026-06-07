import app from './config/server.js';
import { registerRoutes, register404 } from './app/routes/routes.js';

registerRoutes(app);
register404(app);
