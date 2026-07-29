import "dotenv/config";

import app from "./app";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`
====================================
🚀 DevFlow Backend Started
====================================
Server : http://localhost:${PORT}
Health : http://localhost:${PORT}/health
====================================
`);
});