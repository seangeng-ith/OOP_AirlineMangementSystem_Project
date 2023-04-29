import { Gender, Person } from "../../person/Person";


export enum CategoryEmployeeType{
    CoPilot,
    Pilot,
    FlyAttendant,
}
export class Crew extends Person{
    private jobTitle: CategoryEmployeeType;
    private salary: number;
    constructor (firstName: string, lastName: string, phone: string,gender: Gender, jobTitle: CategoryEmployeeType){
        super(firstName, lastName, phone,gender)
        this.jobTitle = jobTitle
    }
    setSalary(salary: number) {
        this.salary = salary
    }
    getJobTitle():CategoryEmployeeType  {
        return this.jobTitle
    }
    getSalary():number {
       return this.salary
    }
}