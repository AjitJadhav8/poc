const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();
const app = express();
app.use(bodyParser.json());
app.use(cors());

// MySQL connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root', // Replace with your MySQL password
    database: 'budget_app' // Ensure database is created
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

// Endpoint for saving Planned Quantity (Step 1)
app.post('/save-planned-quantity', (req, res) => {
    const { fabricCat1, fabricCat2 } = req.body;
    const sql = 'INSERT INTO planned_quantity (fabricCat1, fabricCat2) VALUES (?, ?)';
    db.query(sql, [fabricCat1, fabricCat2], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error saving planned quantity' });
        }
        res.status(200).json({ message: 'Planned Quantity saved', result });
    });
});

// Endpoint for saving Plant Capacity (Step 2)
app.post('/save-plant-capacity', (req, res) => {
    const { machine1Cap, machine1Occ } = req.body;
    const sql = 'INSERT INTO plant_capacity (machine1Cap, machine1Occ) VALUES (?, ?)';
    db.query(sql, [machine1Cap, machine1Occ], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error saving plant capacity' });
        }
        res.status(200).json({ message: 'Plant Capacity saved', result });
    });
});

// Step 3: BOM Preparation
app.post('/save-bom-preparation', (req, res) => {
    const { rawMaterial1, rawMaterial2 } = req.body;
    const sql = 'INSERT INTO bom_preparation (rawMaterial1, rawMaterial2) VALUES (?, ?)';
    db.query(sql, [rawMaterial1, rawMaterial2], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error saving BOM preparation' });
        }
        res.status(200).json({ message: 'BOM Preparation saved', result });
    });
});

// Step 4: Substandard Fabric
app.post('/save-substandard-fabric', (req, res) => {
    const { subFabric1, subFabric2 } = req.body;
    const sql = 'INSERT INTO substandard_fabric (subFabric1, subFabric2) VALUES (?, ?)';
    db.query(sql, [subFabric1, subFabric2], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error saving substandard fabric' });
        }
        res.status(200).json({ message: 'Substandard Fabric saved', result });
    });
});

// Step 5: Fuel & Power
app.post('/save-fuel-power', (req, res) => {
    const { fuelReq1, powerReq1 } = req.body;
    const sql = 'INSERT INTO fuel_power (fuelReq1, powerReq1) VALUES (?, ?)';
    db.query(sql, [fuelReq1, powerReq1], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error saving fuel & power' });
        }
        res.status(200).json({ message: 'Fuel & Power saved', result });
    });
});

// Step 6: Packaging Cost
app.post('/save-packaging-cost', (req, res) => {
    const { packagingCost1, packagingCost2 } = req.body;
    const sql = 'INSERT INTO packaging_cost (packagingCost1, packagingCost2) VALUES (?, ?)';
    db.query(sql, [packagingCost1, packagingCost2], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error saving packaging cost' });
        }
        res.status(200).json({ message: 'Packaging Cost saved', result });
    });
});


// Step 7: Commission Charges
app.post('/save-commission-charges', (req, res) => {
    const { commission1, commission2 } = req.body;
    const sql = 'INSERT INTO commission_charges (commission1, commission2) VALUES (?, ?)';
    db.query(sql, [commission1, commission2], (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Error saving commission charges' });
      }
      res.status(200).json({ message: 'Commission Charges saved', result });
    });
  });
  

// Step 8: Processing Charges
app.post('/save-processing-charges', (req, res) => {
    const { contractual1, contractual2 } = req.body;
    const sql = 'INSERT INTO processing_charges (contractual1, contractual2) VALUES (?, ?)';
    db.query(sql, [contractual1, contractual2], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error saving processing charges' });
        }
        res.status(200).json({ message: 'Processing Charges saved', result });
    });
});

app.post('/save-salaries-overhead', (req, res) => {
    const { employees1, employees2 } = req.body; // Extracting data from the request body
    const sql = 'INSERT INTO salaries_overhead (employees1, employees2) VALUES (?, ?)';
    
    // Validate input
    if (!employees1 || !employees2) {
        return res.status(400).json({ error: 'Employees data is required' });
    }

    // Execute the SQL query
    db.query(sql, [employees1, employees2], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error saving salaries overhead' });
        }
        res.status(200).json({ message: 'Salaries Overhead saved successfully', result });
    });
});


app.post('/save-summary-data', (req, res) => {
    const data = req.body;

    // Perform necessary validation here
    if (!data || Object.keys(data).length === 0) {
        return res.status(400).json({ error: 'No data provided' });
    }

    // Use the createdAt date directly from the request
    const createdAt = data.createdAt; // This will be in YYYY-MM-DD HH:MM:SS format

    // Insert data into the summary_table
    const insertSummarySql = `
        INSERT INTO summary_table (
            planned_quantity_fabricCat1, planned_quantity_fabricCat2,
            plant_capacity_machine1Cap, plant_capacity_machine1Occ,
            bom_preparation_rawMaterial1, bom_preparation_rawMaterial2,
            substandard_fabric_quantity1, substandard_fabric_quantity2,
            fuel_power_fuelReq1, fuel_power_powerReq1,
            packaging_cost_cost1, packaging_cost_cost2,
            commission_charges_commission1, commission_charges_commission2,
            processing_charges_contractual1, processing_charges_contractual2,
            salaries_overhead_employees1, salaries_overhead_employees2,
            created_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.beginTransaction(err => {
        if (err) throw err;

        db.query(insertSummarySql, [
            data.plannedQuantity.fabricCat1,
            data.plannedQuantity.fabricCat2,
            data.plantCapacity.machine1Cap,
            data.plantCapacity.machine1Occ,
            data.bomPreparation.rawMaterial1,
            data.bomPreparation.rawMaterial2,
            data.substandardFabric.subFabric1,
            data.substandardFabric.subFabric2,
            data.fuelPower.fuelReq1,
            data.fuelPower.powerReq1,
            data.packagingCost.packagingCost1,
            data.packagingCost.packagingCost2,
            data.commissionCharges.commission1,
            data.commissionCharges.commission2,
            data.processingCharges.contractual1,
            data.processingCharges.contractual2,
            data.salariesOverhead.employees1,
            data.salariesOverhead.employees2,
            createdAt // Use the createdAt date from the payload
        ], (err) => {
            if (err) {
                console.error('SQL Error:', err.sqlMessage);
                return db.rollback(() => res.status(500).json({ error: 'Error saving summary data' }));
            }

            db.commit(err => {
                if (err) return db.rollback(() => res.status(500).json({ error: 'Error committing transaction' }));
                res.status(200).json({ message: 'Summary data saved successfully' });
            });
        });
    });
});


// Endpoint for fetching all data for the summary
app.get('/fetch-summary', (req, res) => {
    const summary = {};
    
    const queries = [
        { sql: 'SELECT * FROM planned_quantity ORDER BY id DESC LIMIT 1', key: 'plannedQuantity' },
        { sql: 'SELECT * FROM plant_capacity ORDER BY id DESC LIMIT 1', key: 'plantCapacity' },
        { sql: 'SELECT * FROM bom_preparation ORDER BY id DESC LIMIT 1', key: 'bomPreparation' },
        { sql: 'SELECT * FROM substandard_fabric ORDER BY id DESC LIMIT 1', key: 'substandardFabric' },
        { sql: 'SELECT * FROM fuel_power ORDER BY id DESC LIMIT 1', key: 'fuelPower' },
        { sql: 'SELECT * FROM packaging_cost ORDER BY id DESC LIMIT 1', key: 'packagingCost' },
        { sql: 'SELECT * FROM commission_charges ORDER BY id DESC LIMIT 1', key: 'commissionCharges' },
        { sql: 'SELECT * FROM processing_charges ORDER BY id DESC LIMIT 1', key: 'processingCharges' },
        { sql: 'SELECT * FROM salaries_overhead ORDER BY id DESC LIMIT 1', key: 'salariesOverhead' }
    ];

    const fetchData = (index) => {
        if (index >= queries.length) {
            return res.json(summary); // Send summary when done
        }

        const { sql, key } = queries[index];
        db.query(sql, (err, results) => {
            if (err) return res.status(500).json({ error: `Error fetching data from ${key}` });
            summary[key] = results[0]; // Store the latest result
            fetchData(index + 1); // Fetch next table
        });
    };

    fetchData(0); // Start fetching from the first table
});

// Fetch unique timestamps
// app.get('/api/historical/timestamps', (req, res) => {
//     const query = 'SELECT DISTINCT created_at FROM summary_table ORDER BY created_at DESC';
//     db.query(query, (err, results) => {
//       if (err) throw err;
//       res.send(results);
//     });
//   });
  
  // Fetch row data based on selected timestamp
//   app.get('/api/historical/data/:timestamp', (req, res) => {
//     const timestamp = req.params.timestamp;
//     const query = 'SELECT * FROM summary_table WHERE created_at = ?';
//     db.query(query, [timestamp], (err, result) => {
//         if (err) throw err;
//         res.send(result);
//     });
// });
  // Fetch unique timestamps
// Fetch unique timestamps
app.get('/api/historical/timestamps', (req, res) => {
    const query = 'SELECT DISTINCT DATE_FORMAT(created_at, "%Y-%m-%d %H:%i:%s") as created_at FROM summary_table ORDER BY created_at DESC';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.send(results); // Send formatted results
    });
});

// Fetch row data based on selected timestamp
app.get('/api/historical/data/:timestamp', (req, res) => {
    const timestamp = req.params.timestamp;
    const query = 'SELECT * FROM summary_table WHERE DATE_FORMAT(created_at, "%Y-%m-%d %H:%i:%s") = ?';
    db.query(query, [timestamp], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});


// Add this code in your existing Express server code

// Endpoint for user login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const sql = 'SELECT * FROM login WHERE username = ? AND password = ?';
    db.query(sql, [username, password], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        if (results.length > 0) {
            // Include username in the response
            res.status(200).json({ message: 'Login successful', username: results[0].username });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    });
});



// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
