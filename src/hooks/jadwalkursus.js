// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return function jadwalpelajaranhook (hook) {
    hook.params.sequelize = {
      raw: false,
      include: [
        hook.app.services.datapengajar.Model,
        hook.app.services.datakursus.Model
      ]
    }; 
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    return Promise.resolve(hook);
  };
};
