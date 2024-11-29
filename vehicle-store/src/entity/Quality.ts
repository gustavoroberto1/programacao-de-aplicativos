import { v4 as uuid } from 'uuid';

export default class Quality {
  private id: string;
  private vehicleId: string;
  private status: string;
  private inspectionDate: Date;
  private inspectedBy: string;
  private fuelSystem: boolean;
  private electricalSystem: boolean;
  private brakeSystem: boolean;
  private suspensionSystem: boolean;
  private steeringSystem: boolean;
  private transmissionSystem: boolean;
  private coolingSystem: boolean;
  private safetySystem: boolean;
  private rollingSystem: boolean;
  private instrumentationSystem: boolean;
  private bodySystem: boolean;
  private updateAt: Date;
  private createAt: Date;

  constructor(
    vehicleId: string,
    status: string,
    inspectedBy: string,
    fuelSystem: boolean,
    electricalSystem: boolean,
    brakeSystem: boolean,
    suspensionSystem: boolean,
    steeringSystem: boolean,
    transmissionSystem: boolean,
    coolingSystem: boolean,
    safetySystem: boolean,
    rollingSystem: boolean,
    instrumentationSystem: boolean,
    bodySystem: boolean,
    id?: string
  ) {
    this.id = id ? id : uuid();
    this.vehicleId = vehicleId;
    this.status = status;
    this.inspectionDate = new Date();
    this.inspectedBy = inspectedBy;
    this.fuelSystem = fuelSystem;
    this.electricalSystem = electricalSystem;
    this.brakeSystem = brakeSystem;
    this.suspensionSystem = suspensionSystem;
    this.steeringSystem = steeringSystem;
    this.transmissionSystem = transmissionSystem;
    this.coolingSystem = coolingSystem;
    this.safetySystem = safetySystem;
    this.rollingSystem = rollingSystem;
    this.instrumentationSystem = instrumentationSystem;
    this.bodySystem = bodySystem;
    this.createAt = new Date();
    this.updateAt = new Date();
  }

  public getId() {
    return this.id;
  }

  public getVehicleId() {
    return this.vehicleId;
  }

  public getStatus() {
    return this.status;
  }

  public getInspectionDate() {
    return this.inspectionDate;
  }

  public getInspectedBy() {
    return this.inspectedBy;
  }

  public getFuelSystem() {
    return this.fuelSystem;
  }

  public getElectricalSystem() {
    return this.electricalSystem;
  }

  public getBrakeSystem() {
    return this.brakeSystem;
  }

  public getSuspensionSystem() {
    return this.suspensionSystem;
  }

  public getSteeringSystem() {
    return this.steeringSystem;
  }

  public getTransmissionSystem() {
    return this.transmissionSystem;
  }

  public getCoolingSystem() {
    return this.coolingSystem;
  }

  public getSafetySystem() {
    return this.safetySystem;
  }

  public getRollingSystem() {
    return this.rollingSystem;
  }

  public getInstrumentationSystem() {
    return this.instrumentationSystem;
  }

  public getBodySystem() {
    return this.bodySystem;
  }

  public getUpdateAt() {
    return this.updateAt;
  }

  public getCreateAt() {
    return this.createAt;
  }
}