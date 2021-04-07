export default (sequelize, DataTypes) => {
    const treatments = sequelize.define(
      'treatments',
      {
        vaccine_name: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        total_vaccinations: {
          type: DataTypes.INTEGER
        },
        vaccine_form: {
            type: DataTypes.STRING
          },
        vaccine_success_rate: {
          type: DataTypes.DECIMAL
        },
        vaccine_release_date: {
            type: DataTypes.DATE
          }
      },
      { freezeTableName: true, timestamps: false }
    );
    return treatments;
  };
  