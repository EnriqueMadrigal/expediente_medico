export interface Enfermedad {
  id: number;                       // INT, PK
  id_paciente: number;                  // VARCHAR(36), UUID
  id_enfermedad: number;
  id_tipo_enfermedad: number;
  fecha: Date | string;
  tiempo_evolucion: string;
  tratamiento: string;
  id_control: number;
  ultimo_control: Date | string;
  proximo_control: Date | string;
  complicaciones: string;
}
