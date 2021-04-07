export default (sequelize, DataTypes) => {
    const outbreaks = sequelize.define(
      'outbreaks',
      {
        outbreak_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        disease_id: {
          type: DataTypes.INTEGER
        },
        total_hospitalizations: {
            type: DataTypes.INTEGER
          },
        total_cases: {
            type: DataTypes.INTEGER
          },
          total_deaths: {
            type: DataTypes.INTEGER
          },
          first_confirmed_case: {
            type: DataTypes.DATE
          },
          last_confirmed_case: {
            type: DataTypes.DATE
          },
          pandemic_start_date: {
            type: DataTypes.DATE
          },
          pandemic_end_date: {
            type: DataTypes.DATE
          },
          outbreak_origin_cause: {
            type: DataTypes.STRING
          }
      },
      { freezeTableName: true, timestamps: false }
    );
    return outbreaks;
  };