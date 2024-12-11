// Verifica se o banco de dados existe e cria a tabela se necessário
db.query('CREATE DATABASE IF NOT EXISTS web1_crud', (err) => {
    if (err) throw err;
    console.log('Banco de dados criado ou já existente.');

    db.query('USE web1_crud', (err) => {
        if (err) throw err;
        
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS registros (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(255) NOT NULL,
                descricao TEXT NOT NULL
            )
        `;
        db.query(createTableQuery, (err) => {
            if (err) throw err;
            console.log('Tabela criada ou já existente.');
        });
    });
});