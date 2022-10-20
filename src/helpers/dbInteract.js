import fs from 'fs';

const file = './db/data.json';

const saveDataInDB = (data) => {
    fs.writeFileSync(file, JSON.stringify(data));
};

const readDataInDB = () => {
    if (!fs.existsSync(file)) {
        return null;
    }
    const info = fs.readFileSync(file, { encoding: 'utf-8' });
    return JSON.parse(info);
};

export { saveDataInDB, readDataInDB };
