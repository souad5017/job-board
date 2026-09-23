CREATE DATABASE IF NOT EXISTS job_board;
USE job_board;

CREATE TABLE entreprise (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(150) NOT NULL,
    ville VARCHAR(100) NOT NULL,
    description TEXT
);

CREATE TABLE offre (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    ville VARCHAR(100) NOT NULL,
    type_contrat VARCHAR(50) NOT NULL,
    date_publication DATE NOT NULL,
    entreprise_id INT NOT NULL,

    CONSTRAINT fk_offre_entreprise
        FOREIGN KEY (entreprise_id)
        REFERENCES entreprise(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE technologie (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE offre_technologie (
    offre_id INT NOT NULL,
    technologie_id INT NOT NULL,

    PRIMARY KEY (offre_id, technologie_id),

    CONSTRAINT fk_offre_technologie_offre
        FOREIGN KEY (offre_id)
        REFERENCES offre(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_offre_technologie_technologie
        FOREIGN KEY (technologie_id)
        REFERENCES technologie(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);