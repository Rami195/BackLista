CREATE TABLE task (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) UNIQUE NOT NULL,
    description TEXT NOT NULL,
    image_url VARCHAR(500), -- Permite almacenar URLs de imágenes
    created_at TIMESTAMP DEFAULT NOW() -- Guarda la fecha de creación automáticamente
);
