export interface Enfermedades {
  id: number;                       // INT, PK
  id_paciente: number;                  // VARCHAR(36), UUID
  id_cardio: number;
  id_metabolismo: number;
  id_respiratorio: number;
  id_neurologico: number;
  id_geneticas: number;
  fecha: Date | string;
  tiempo_evolucion: string;
  tratamiento: string;
  id_control: number;
  ultimo_control: Date | string;
  proximo_control: Date | string;
  complicaciones: string;
  created_at:  Date | string;               // DATETIME -> ISO string
  updated_at:  Date | string;        // DATETIME -> ISO string or null
  otro_cardio: string;
  otro_metabolismo: string;
  otro_respiratorio: string;
  otro_neurologico: string;
  otro_geneticas: string;
}
