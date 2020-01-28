/**
 * Name: Ngoc Sang Nguyen
 * Student Id: 040925752
 */
import fs from 'fs';

/**
 * interface of single health record
 * this interface define how a record should look like
 */
export interface IHealthRecord {
  refDate: number;
  geo: string;
  dguid: string;
  sex: string;
  ageGroup: string;
  studentResponse: string;
  uom: string;
  uomId: number;
  scalarFactor: string;
  scalarId: number;
  vector: string;
  coordinate: string;
  value: number;
  status: string;
  symbol: string;
  terminated: string;
  decimals: number;
}

/**
 * Class that handle reading file and store records into datastructure
 */
export class HealthReader {
  /**
   * default contructor
   * @param records public arrays to store records
   */
  constructor(public records: IHealthRecord[] = []) {}

  /**
   * to read the csv file and convert all records into right format
   * store formated record into {@link this.records}
   */
  public readFile() {
    fs.readFileSync('13100262.csv', {
      encoding: 'utf-8'
    })
      .split('\n')
      .map((row: string): string[] => row.replace(/['"]+/g, '').split(','))
      .slice(1)
      .map((row: string[]) =>
        this.records.push({
          refDate: parseInt(row[0]),
          geo: row[1],
          dguid: row[2],
          sex: row[3],
          ageGroup: row[4],
          studentResponse: row[5],
          uom: row[6],
          uomId: parseInt(row[7]),
          scalarFactor: row[8],
          scalarId: parseInt(row[9]),
          vector: row[10],
          coordinate: row[11],
          value: parseInt(row[12]),
          status: row[13],
          symbol: row[14],
          terminated: row[15],
          decimals: parseFloat(row[16])
        })
      );
  }

  /**
   * print number of records into the console screen
   * @param num number of records that want to be print
   */
  public printRecord(num: number) {
    console.log(`Ngoc Sang Nguyen`);
    for (let i = 0; i < num; i++) {
      console.log(JSON.stringify(this.records[i], null, 0));
      console.log(`\n`);
    }
  }
}
