export default (sequelize, DataTypes) => {
  const countries = sequelize.define(
    'countries',
    {
      country_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      country_name: {
        type: DataTypes.STRING
      },
      historical_name: {
          type: DataTypes.STRING
        },
      country_code: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return countries;
};
