import { Sequelize } from "sequelize";

async function connectToDB(dbURI) {
  console.log(`Connecting to DB: ${dbURI}`);

  const sequelize = new Sequelize(dbURI, {
    logging: console.log,
    define: {
      underscored: true,
      timestamps: false
    }
  });

  try {
    console.log('Connected to DB Successfully!')
  } catch (err) {
    console.error('Unable to connect to DB: ', err)
  }

  return sequelize;
}

export const db = await connectToDB('postgresql:///draft');