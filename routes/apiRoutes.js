/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';
import countries from '../models/countries.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('group 8 api');
});

/// /////////////////////////////////
/// ////Diseases Endpoints////////
/// /////////////////////////////////
router.get('/diseases', async (req, res) => {
  try {
    const disease = await db.diseases.findAll();
    const reply = disease.length > 0 ? { data: disease } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/diseases/:disease_id', async (req, res) => {
  try {
    const disease = await db.diseases.findAll({
      where: {
        disease_id: req.params.disease_id
      }
    });

    res.json(disease);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/diseases', async (req, res) => {
  const disease = await db.diseases.findAll();
  const currentId = (await disease.length) + 1;
  try {
    const newDisease = await db.diseases.create({
      disease_id: currentId,
      disease_name: req.body.disease_name,
      latin_name: req.body.latin_name,
      type_of_infection: req.body.type_of_infection,
      disease_realm: req.body.disease_realm,
      disease_phylum: req.body.disease_phylum,
      disease_class: req.body.disease_class,
      disease_order: req.body.disease_order,
      disease_family: req.body.disease_family,
      disease_genus: req.body.disease_genus,
      disease_species: req.body.disease_species      
    });
    res.json(newDisease);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/diseases/:disease_id', async (req, res) => {
  try {
    await db.disease.destroy({
      where: {
        disease_id: req.params.disease_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/diseases', async (req, res) => {
  try {
    await db.disease.update(
      {
        disease_name: req.body.disease_name,
        latin_name: req.body.latin_name,
        type_of_infection: req.body.type_of_infection,
        disease_realm: req.body.disease_realm,
        disease_phylum: req.body.disease_phylum,
        disease_class: req.body.disease_class,
        disease_order: req.body.disease_order,
        disease_family: req.body.disease_family,
        disease_genus: req.body.disease_genus,
        disease_species: req.body.disease_species 
      },
      {
        where: {
          disease_id: req.body.disease_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////////Countries to outbreaks Endpoints//////////
/// /////////////////////////////////
router.get('/countries_to_outbreaks', async (req, res) => {
  try {
    const meals = await db.countries_to_outbreaks.findAll();
    res.json(meals);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/countries_to_outbreaks/:country_id', async (req, res) => {
  try {
    const meals = await db.countries_to_outbreaks.findAll({
      where: {
        country_id: req.params.country_id
      }
    });
    res.json(meals);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/countries_to_outbreaks', async (req, res) => {
  try {
    await db.countries_to_outbreaks.update(
      {
        meal_name: req.body.meal_name,
        meal_category: req.body.meal_category
      },
      {
        where: {
          meal_id: req.body.meal_id
        }
      }
    );
    res.send('Meal Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////////Countries Endpoints/////////
/// /////////////////////////////////

//written by Faraz Hafeez

router.get('/countries', async (req, res) => {
  try {
    const country = await db.countries.findAll();
    res.send(country);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/countries/:country_id', async (req, res) => {
  try {
    const country = await db.countries.findAll({
      where: {
        country_id: req.params.country_id
      }
    });
    res.json(country);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

//post method 
router.post('/countries', async (req, res) => {
  const country = await db.countries.findAll();
  const currentId = (await countries.length) + 1;
  try {
    const newCountry = await db.countries.create({
      country_id: currentId,
      country_name: req.body.country_name,
      historical_name: req.body.historical_name,
      country_code: req.body.country_code,
    });
    res.json(newCountry);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

//delete records
router.delete('/countries/:country_id', async (req, res) => {
  try {
    await db.countries.destroy({
      where: {
        country_id: req.params.country_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});


//put method for countries 
router.put('/countries', async (req, res) => {
  try {
    // N.B. - this is a good example of where to use code validation to confirm objects
    await db.countries.update(
      {
        country_name: req.body.country_name,
        historical_name: req.body.historical_name,
        country_code: req.body.country_code
      },
      {
        where: {
          country_id: req.body.country_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }



});

/// /////////////////////////////////
/// outbreaks Endpoints///
/// /////////////////////////////////

// Laraib Laubach

router.get('/outbreaks', async (req, res) => {
  try {
    const restrictions = await db.outbreaks.findAll();
    res.json(restrictions);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/outbreaks/:outbreak_id', async (req, res) => {
  try {
    const restrictions = await db.outbreaks.findAll({
      where: {
        outbreak_id: req.params.outbreak_id
      }
    });
    res.json(restrictions);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// reports Endpoints///
/// /////////////////////////////////

// joseph mccarthy

router.get('/reports', async (req, res) => {
  try {
    const restrictions = await db.reports.findAll();
    res.json(restrictions);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/reports/:Report_id', async (req, res) => {
  try {
    const restrictions = await db.reports.findAll({
      where: {
        Report_id: req.params.Report_id
      }
    });
    res.json(restrictions);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/reports', async (req, res) => {
  const report = await db.reports.indAll();
  const currentId = (await report.length) + 1;
  try {
    const newReport = await db.reports.create({
      Report_id: currentId,
      report_date: req.body.report_date,
      fatalities: req.body.fatalities,
      confirmed_cases: req.body.confirmed_cases,
      probably_cases: req.body.probably_cases,
      outbreak_id: req.body.outbreak_id
    });
    res.json(newReport);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/reports/:Report_id', async (req, res) => {
  try {
    await db.report.destroy({
      where: {
        Report_id: req.params.Report_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/reports', async (req, res) => {
  try {
    await db.report.update(
      {
      report_date: req.body.report_date,
      fatalities: req.body.fatalities,
      confirmed_cases: req.body.confirmed_cases,
      probably_cases: req.body.probably_cases,
      outbreak_id: req.body.outbreak_id 
      },
      {
        where: {
          Report_id: req.body.Report_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});


/// /////////////////////////////////
/// treatments_to_diseases Endpoints///
/// /////////////////////////////////
router.get('/treatments_to_diseases', async (req, res) => {
  try {
    const restrictions = await db.treatments_to_diseases.findAll();
    res.json(restrictions);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/treatments_to_diseases/:disease_id', async (req, res) => {
  try {
    const restrictions = await db.treatments_to_diseases.findAll({
      where: {
        disease_id: req.params.disease_id
      }
    });
    res.json(restrictions);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});


/// /////////////////////////////////
/// treatments Endpoints///
/// /////////////////////////////////
router.get('/treatments', async (req, res) => {
  try {
    const restrictions = await db.treatments.findAll();
    res.json(restrictions);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/treatments/:vaccine_name', async (req, res) => {
  try {
    const restrictions = await db.treatments.findAll({
      where: {
        vaccine_name: req.params.vaccine_name
      }
    });
    res.json(restrictions);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// //////////////////////////////////
/// ///////Custom SQL Endpoint////////
/// /////////////////////////////////
const macrosCustom = 'SELECT `Dining_Hall_Tracker`.`Meals`.`meal_id` AS `meal_id`,`Dining_Hall_Tracker`.`Meals`.`meal_name` AS `meal_name`,`Dining_Hall_Tracker`.`Macros`.`calories` AS `calories`,`Dining_Hall_Tracker`.`Macros`.`carbs` AS `carbs`,`Dining_Hall_Tracker`.`Macros`.`sodium` AS `sodium`,`Dining_Hall_Tracker`.`Macros`.`protein` AS `protein`,`Dining_Hall_Tracker`.`Macros`.`fat` AS `fat`,`Dining_Hall_Tracker`.`Macros`.`cholesterol` AS `cholesterol`FROM(`Dining_Hall_Tracker`.`Meals`JOIN `Dining_Hall_Tracker`.`Macros`)WHERE(`Dining_Hall_Tracker`.`Meals`.`meal_id` = `Dining_Hall_Tracker`.`Macros`.`meal_id`)';
router.get('/table/data', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(macrosCustom, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

const mealMapCustom = `SELECT hall_name,
  hall_address,
  hall_lat,
  hall_long,
  meal_name
FROM
  Meals m
INNER JOIN Meals_Locations ml 
  ON m.meal_id = ml.meal_id
INNER JOIN Dining_Hall d
ON d.hall_id = ml.hall_id;`;
router.get('/map/data', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(mealMapCustom, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
router.get('/custom', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(req.body.query, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

export default router;
