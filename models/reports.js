export default (sequelize, DataTypes) => {
    const reports = sequelize.define(
      'reports',
      {
        Report_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        report_date: {
          type: DataTypes.DATE
        },
        fatalities: {
            type: DataTypes.INTEGER
          },
        conirmed_cases: {
          type: DataTypes.INTEGER
        },
        probable_cases: {
            type: DataTypes.INTEGER
          },
          outbreak_id: {
            type: DataTypes.INTEGER
          }
      },
      { freezeTableName: true, timestamps: false }
    );
    return reports;
  };
  