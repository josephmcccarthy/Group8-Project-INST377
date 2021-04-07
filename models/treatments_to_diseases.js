export default (sequelize, DataTypes) => {
    const treatments_to_diseases = sequelize.define(
      'treatments_to_diseases',
      {
        disease_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        vaccine_name: {
          type: DataTypes.STRING
        },
      },
      { freezeTableName: true, timestamps: false }
    );
    return treatments_to_diseases;
  };
  