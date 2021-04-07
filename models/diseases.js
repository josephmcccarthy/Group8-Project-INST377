export default (sequelize, DataTypes) => {
    const diseases = sequelize.define(
      'diseases',
      {
        disease_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        disease_name: {
          type: DataTypes.STRING
        },
        latin_name: {
            type: DataTypes.STRING
          },
        type_of_infection: {
            type: DataTypes.STRING
          },
          disease_realm: {
            type: DataTypes.STRING
          },
          disease_phylum: {
            type: DataTypes.STRING
          },
          disease_class: {
            type: DataTypes.STRING
          },
          disease_order: {
            type: DataTypes.STRING
          },
          disease_family: {
            type: DataTypes.STRING
          },
          disease_genus: {
            type: DataTypes.STRING
          },
          disease_species: {
            type: DataTypes.STRING
          },
      },
      { freezeTableName: true, timestamps: false }
    );
    return diseases;
  };