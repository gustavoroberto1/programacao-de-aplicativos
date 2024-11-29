export type IQualityCreate = {
  vehicleId: string;
  status: string;
  inspectedBy: string;
  fuelSystem: boolean;
  electricalSystem: boolean;
  brakeSystem: boolean;
  suspensionSystem: boolean;
  steeringSystem: boolean;
  transmissionSystem: boolean;
  coolingSystem: boolean;
  safetySystem: boolean;
  rollingSystem: boolean;
  instrumentationSystem: boolean;
  bodySystem: boolean;
}

export type IQualityResponse = {
  id: string;
  vehicleId: string;
  status: string;
  inspectionDate: Date;
  inspectedBy: string;
  fuelSystem: boolean;
  electricalSystem: boolean;
  brakeSystem: boolean;
  suspensionSystem: boolean;
  steeringSystem: boolean;
  transmissionSystem: boolean;
  coolingSystem: boolean;
  safetySystem: boolean;
  rollingSystem: boolean;
  instrumentationSystem: boolean;
  bodySystem: boolean;
  updateAt: Date;
  createAt: Date;
}