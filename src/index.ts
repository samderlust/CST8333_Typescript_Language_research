/**
 * Name: Ngoc Sang Nguyen
 * Student Id: 040925752
 */
import { HealthReader } from './HealthReader';

//create new health record reader
const reader = new HealthReader();
reader.readFile();
reader.printRecord(5);
