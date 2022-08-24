module.exports = {
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'strapi-hook-bookshelf',
      settings: {
        client: 'postgres',
        host: 'ec2-52-207-15-147.compute-1.amazonaws.com',
        port: 5432,
        database: 'd7e7m2ttdbq0e1',
        username: 'mftlqsvbcqokhf',
        password: 'bfa1db5fd48ff4621e37fb30778ddcd972cb36d179794a3c05bfaa344e79c640',
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {
        ssl: true,
      },
    },
  },
};