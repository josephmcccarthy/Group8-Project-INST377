export default (sequelize, DataTypes) => {
    const countries_to_outbreaks = sequelize.define(
      'countries_to_outbreaks',
      {
        country_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        outbreak_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
          },
      },
      { freezeTableName: true, timestamps: false }
    );
    return countries_to_outbreaks;
  };