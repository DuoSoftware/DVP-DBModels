const db = require('./index');
const Sequelize = require('sequelize');

async function testConnection() {
    try {
        console.log('Testing connection...');
        await db.SequelizeConn.authenticate();
        console.log('Connection successful.');

        // Test Legacy Operator ($ne)
        // We simulate a query that uses string operators which would fail in v6 without aliases
        const Op = Sequelize.Op;
        
        // We'll just define a dummy model to test the query generation or basic query execution
        // Or better, just inspect the query generator if possible, or run a raw query with replacements?
        // Let's try to query an existing model 'Context' if available, or just ANY model.
        // db.Context is available.
        
        if (db.Context) {
            console.log('Testing legacy operator query on Context model...');
            // This query is expected to fail if operatorsAliases are missing
            const result = await db.Context.findOne({
                where: {
                    Context: { $ne: 'NON_EXISTENT_CONTEXT_XYZ' } 
                }
            });
            console.log('Legacy operator query executed successfully.');
        } else {
            console.warn('Context model not found, skipping specific query test.');
        }

        process.exit(0);
    } catch (error) {
        console.error('Test Failed:', error);
        process.exit(1);
    }
}

testConnection();
