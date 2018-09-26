// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const jadwalkursus = sequelizeClient.define('jadwalkursus', {
    hari: {
      type: DataTypes.STRING,
      allowNull: false
    },
    jammulai: {
      type: DataTypes.STRING,
      allowNull: false
    },
    jamselesai: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  jadwalkursus.associate = function (models) {
    const Pemain = models.datakursus;
    const Timajah  = models.jadwalkursus;
    Timajah.belongsTo(Pemain,{targetKey:'id',foreignKey:'idkursus'});
    const PemainNoob = models.datapengajar;
    Timajah.belongsTo(PemainNoob,{targetKey:'id',foreignKey:'idpengajar'});
 
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return jadwalkursus;
};
